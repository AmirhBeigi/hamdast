"use client";

import * as React from "react";
import { useRouter } from "next/router";
import { FeatureCard } from "@/components/FeatureCard";

const API_BASE = "https://apigw.paziresh24.com/v1/hamdast/list/capabilities";

/** ارسال پیام به فریم والد (برای استفاده داخل iframe) */
function postToParent(type: string, payload: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.parent !== window) {
    window.parent.postMessage({ type, payload }, "*");
  }
}

/**
 * گزارش ارتفاع محتوا به parent برای تنظیم ارتفاع iframe.
 * Parent باید به پیام type: "HAMDAST_IFRAME_RESIZE" با payload: { height: number } گوش دهد
 * و iframe.style.height = payload.height + "px" تنظیم کند.
 */
function reportHeightToParent(height: number) {
  postToParent("HAMDAST_IFRAME_RESIZE", { height });
}

/** آیتم خروجی API قابلیت‌ها (ساختار قابل انعطاف) */
type CapabilityItem = {
  id?: string;
  key?: string;
  title?: string;
  name?: string;
  description?: string;
  subtitle?: string;
  icon?: string;
  iconUrl?: string;
  enabled?: boolean;
  isEnabled?: boolean;
  defaultChecked?: boolean;
  [k: string]: unknown;
};

/** آیکون پیش‌فرض برای آیتم‌های بدون آیکون */
const DefaultIcon = () => (
  <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l2 2" strokeLinecap="round" />
  </svg>
);

function mapApiItemToCard(item: CapabilityItem, index: number): {
  id: string;
  key: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  defaultChecked: boolean;
} {
  const id = String(item.id ?? item.slug ?? `cap-${index}`);
  const key = String(item.key ?? item.id ?? item.slug ?? `cap-${index}`);
  const title = item.title ?? item.name ?? "";
  const description = item.description ?? item.subtitle;
  const enabled = item.enabled ?? item.isEnabled ?? item.defaultChecked ?? false;
  const iconUrl = item.icon ?? item.iconUrl;
  const icon = iconUrl ? (
    <img src={iconUrl} alt="" className="h-8 w-8 object-contain" />
  ) : (
    <DefaultIcon />
  );
  return { id, key, title, description, icon, defaultChecked: enabled };
}

export default function FeatureCardsPage() {
  const router = useRouter();
  const touchpoint = React.useMemo(
    () => (typeof router.query.touchpoint === "string" ? router.query.touchpoint : undefined),
    [router.query.touchpoint]
  );

  const [list, setList] = React.useState<CapabilityItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!router.isReady) return;
    if (!touchpoint) {
      setLoading(false);
      setError("پارامتر touchpoint در آدرس وجود ندارد.");
      return;
    }

    const url = new URL(API_BASE);
    url.searchParams.set("touchpoint", touchpoint);

    setLoading(true);
    setError(null);
    fetch(url.toString(), { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error(`خطا: ${res.status}`);
        return res.json();
      })
      .then((data: { data?: CapabilityItem[]; capabilities?: CapabilityItem[]; list?: CapabilityItem[] } | CapabilityItem[]) => {
        const raw = Array.isArray(data) ? data : (data.data ?? data.capabilities ?? data.list ?? []);
        setList(Array.isArray(raw) ? raw : []);
      })
      .catch((err: Error) => setError(err.message ?? "خطا در دریافت لیست"))
      .finally(() => setLoading(false));
  }, [touchpoint, router.isReady]);

  const cards = React.useMemo(() => list.map(mapApiItemToCard), [list]);

  /** وضعیت تاگل هر کارت (با id و key هر دو قابل به‌روزرسانی از parent) */
  const [checkedState, setCheckedState] = React.useState<Record<string, boolean>>({});

  /** مقدار اولیه از API وقتی لیست لود شد */
  const cardsSignature = React.useMemo(
    () => cards.map((c) => `${c.id}:${c.key}:${c.defaultChecked}`).join("|"),
    [cards]
  );
  React.useEffect(() => {
    if (cards.length === 0) return;
    setCheckedState((prev) => {
      const next = { ...prev };
      cards.forEach((c) => {
        next[c.id] = c.defaultChecked;
        next[c.key] = c.defaultChecked;
      });
      return next;
    });
  }, [cardsSignature]);

  /** گوش دادن به پیام parent برای تنظیم روشن/خاموش تاگل */
  React.useEffect(() => {
    const handler = (event: MessageEvent) => {
      const { type, payload } = event.data || {};
      if (type !== "HAMDAST_CAPABILITY_SET" || !payload || typeof payload.checked !== "boolean") return;
      const keyOrId = payload.key ?? payload.id;
      if (keyOrId == null) return;
      const key = String(keyOrId);
      setCheckedState((prev) => ({ ...prev, [key]: payload.checked }));
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const getChecked = React.useCallback(
    (card: { id: string; key: string; defaultChecked: boolean }) =>
      checkedState[card.id] ?? checkedState[card.key] ?? card.defaultChecked,
    [checkedState]
  );

  const contentRef = React.useRef<HTMLDivElement>(null);

  /** در هر لحظه ارتفاع محتوا را به parent می‌فرستد (ResizeObserver + بازهٔ زمانی) */
  React.useEffect(() => {
    const el = contentRef.current;
    if (!el || typeof window === "undefined" || window.parent === window) return;

    const report = () => {
      const height = el.scrollHeight;
      reportHeightToParent(height);
    };

    report();
    const resizeObserver = new ResizeObserver(report);
    resizeObserver.observe(el);

    const interval = setInterval(() => {
      if (contentRef.current) {
        reportHeightToParent(contentRef.current.scrollHeight);
      }
    }, 150);

    return () => {
      resizeObserver.disconnect();
      clearInterval(interval);
    };
  }, [loading, error, cards.length]);

  if (loading) {
    return (
      <div ref={contentRef} dir="rtl" className="min-h-[200px] w-full bg-white flex items-center justify-center" style={{ direction: "rtl" }}>
        <div className="flex flex-col items-center gap-3">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin" />
          </div>
          <span className="text-[13px] text-gray-500 font-medium">در حال بارگذاری...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div ref={contentRef} dir="rtl" className="min-h-[120px] w-full bg-white flex items-center justify-center" style={{ direction: "rtl", textAlign: "right" }}>
        <p className="text-[13px] text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div ref={contentRef} dir="rtl" className="min-h-0 w-full bg-white" style={{ direction: "rtl", textAlign: "right" }}>
      <div className="w-full space-y-3">
        {cards.length === 0 ? (
          <p className="text-[13px] text-gray-500 text-center py-8">موردی یافت نشد.</p>
        ) : (
          cards.map((card) => (
            <FeatureCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              checked={getChecked(card)}
              onCheckedChange={(checked) => {
                postToParent("HAMDAST_CAPABILITY_TOGGLE", {
                  id: card.id,
                  key: card.key,
                  checked,
                  touchpoint: touchpoint ?? "",
                });
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
