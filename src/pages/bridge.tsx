import { activeUsersLog } from "@/lib/bridge/activeUsersLog";
import { getState } from "@/lib/bridge/getState";
import { saveReplay } from "@/lib/bridge/saveReplay";
import { usersDurationLog } from "@/lib/bridge/usersDurationLog";
import { generateUniqueId } from "@/lib/utils";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

function Bridge() {
  const {
    query: { src, client_key, app, menu, page, user_id },
    isReady,
  } = useRouter();
  const iframe = useRef<HTMLIFrameElement | undefined>();
  const uniqueId = useRef(generateUniqueId(15));
  const startTime = useRef(0);

  let embedSrc: any;
  if (isReady && src) {
    embedSrc = new URL(src ? (src as string) : "");
    embedSrc.searchParams.append("client_key", client_key as string);
    embedSrc.searchParams.append("hamdast_embedded", "1");
    embedSrc.searchParams.append("user_id", user_id);
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
    if (app && (menu || page)) {
      startTime.current = Date.now();
      activeUsersLog({ app, menu, page });
      window.addEventListener("message", (messageEvent) => {
        if (messageEvent.data?.hamdast?.event === "HAMDAST_GET_STATE") {
          sendEvent(messageEvent.data?.hamdast);
        }

        if (messageEvent.data?.hamdast?.event === "HAMDAST_OPEN_LINK") {
          window.parent.location.href = messageEvent.data?.hamdast?.data?.url;
        }

        if (
          messageEvent.data?.hamdast?.event === "HAMDAST_REPLAY_SAVE" &&
          app &&
          (menu || page)
        ) {
          saveReplay({
            menu,
            page,
            app,
            uniqueId: uniqueId.current,
            events: messageEvent.data?.hamdast?.data?.events,
          });
        }
      });
    }

    return () => {
      usersDurationLog({ app, menu, duration: Date.now() - startTime.current });
    };
  }, [app, menu, page]);

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
