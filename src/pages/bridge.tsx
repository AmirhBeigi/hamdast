import { getState } from "@/lib/bridge/getState";
import { saveReplay } from "@/lib/bridge/saveReplay";
import { generateUniqueId } from "@/lib/utils";
import { useRouter } from "next/router";
import { LegacyRef, useEffect, useRef } from "react";

function Bridge() {
  const {
    query: { src, client_key, app, menu, user_id },
    isReady,
  } = useRouter();
  const iframe = useRef<HTMLIFrameElement | undefined>();
  const uniqueId = useRef(generateUniqueId(15));

  let embedSrc: any;
  if (isReady && src) {
    embedSrc = new URL(src ? (src as string) : "");
    embedSrc.searchParams.append("client_key", client_key as string);
    embedSrc.searchParams.append("hamdast_embedded", "1");
  }

  const sendEvent = async (event: any) => {
    const data = await getState[event?.data?.state as "user" | "provider"]();
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
    if (app && menu) {
      window.addEventListener("message", (messageEvent) => {
        if (messageEvent.data?.hamdast?.event === "HAMDAST_GET_STATE") {
          sendEvent(messageEvent.data?.hamdast);
        }

        if (
          messageEvent.data?.hamdast?.event === "HAMDAST_REPLAY_SAVE" &&
          app &&
          menu
        ) {
          saveReplay({
            menu,
            app,
            uniqueId,
            events: messageEvent.data?.hamdast?.data?.events,
          });
        }
      });
    }
  }, [app, menu]);

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
