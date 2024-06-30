import { getState } from "@/lib/bridge/getState";
import { useRouter } from "next/router";
import { LegacyRef, useEffect, useRef } from "react";

function Bridge() {
  const {
    query: { src, client_key, app, menu, user_id },
    isReady,
  } = useRouter();
  const iframe = useRef<HTMLIFrameElement | undefined>();

  let embedSrc: any;
  if (isReady && src) {
    embedSrc = new URL(src ? (src as string) : "");
    embedSrc.searchParams.append("client_key", client_key as string);
    embedSrc.searchParams.append("hamdast_embedded", "1");
  }

  const sendEvent = async (event: any) => {
    const data = await getState[event?.data?.state as "user"]();
    iframe.current?.contentWindow?.postMessage(
      {
        hamdast: {
          event: "HAMDAST_GET_STATE",
          data: data,
          hash_id: event?.hash_id,
        },
      },
      "*"
    );
  };

  useEffect(() => {
    window.addEventListener("message", (messageEvent) => {
      if (messageEvent.data?.hamdast?.event === "HAMDAST_GET_STATE") {
        sendEvent(messageEvent.data?.hamdast);
      }
    });
  }, []);

  if (!embedSrc?.href) return null;
  return (
    <>
      <iframe
        ref={iframe as any}
        src={embedSrc?.href}
        className="w-screen h-screen"
      />
    </>
  );
}

export default Bridge;
