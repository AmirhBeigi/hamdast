"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  /** شناسه کارت (برای ارسال در ایونت) */
  id?: string;
  /** عنوان یا سوال اصلی کارت */
  title: string;
  /** توضیح کوتاه زیر عنوان */
  description?: string;
  /** آیکون یا تصویر سمت راست - می‌توان ReactNode یا مسیر تصویر داد */
  icon?: React.ReactNode;
  /** وضعیت اولیه سوئیچ (روشن/خاموش) */
  defaultChecked?: boolean;
  /** کنترل شده: مقدار فعلی سوئیچ */
  checked?: boolean;
  /** هنگام تغییر وضعیت سوئیچ (کلیک روی کارت هم همین را صدا می‌زند و تاگل می‌کند) */
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

function FeatureCard({
  id,
  title,
  description,
  icon,
  defaultChecked = false,
  checked,
  onCheckedChange,
  className,
}: FeatureCardProps) {
  const isControlled = typeof checked === "boolean";
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const value = isControlled ? checked : internalChecked;

  const handleChange = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalChecked(next);
      onCheckedChange?.(next);
    },
    [isControlled, onCheckedChange]
  );

  const iconContent =
    typeof icon === "string" ? (
      <img src={icon} alt="" className="h-8 w-8 object-contain" />
    ) : (
      icon
    );

  /** کلیک روی کارت = همان تاگل (کارت به‌صورت label عمل می‌کند) */
  const handleCardClick = React.useCallback(() => {
    handleChange(!value);
  }, [value, handleChange]);

  return (
    <article
      dir="rtl"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      className={cn(
        "flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm",
        "min-h-[72px] box-border w-full cursor-pointer",
        className
      )}
      style={{ direction: "rtl" }}
      data-card-id={id}
    >
      {iconContent && (
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
          {iconContent}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold leading-snug text-gray-900" style={{ direction: "rtl", textAlign: "right" }}>{title}</p>
        {description && (
          <p className="mt-0.5 text-[12px] leading-snug text-gray-500" style={{ direction: "rtl", textAlign: "right" }}>{description}</p>
        )}
      </div>
      <div className="flex-shrink-0" dir="ltr" onClick={(e) => e.stopPropagation()}>
        <SwitchPrimitive.Root
          checked={value}
          onCheckedChange={handleChange}
          dir="ltr"
          className={cn(
            "inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1",
            "data-[state=checked]:!bg-blue-500 data-[state=unchecked]:!bg-gray-300"
          )}
        >
          <SwitchPrimitive.Thumb
            className={cn(
              "block h-4 w-4 rounded-full bg-white shadow transition-transform",
              "data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-0"
            )}
          />
        </SwitchPrimitive.Root>
      </div>
    </article>
  );
}

export { FeatureCard };
export default FeatureCard;
