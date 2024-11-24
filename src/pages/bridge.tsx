import { activeUsersLog } from "@/lib/bridge/activeUsersLog";
import { getState } from "@/lib/bridge/getState";
import { saveReplay } from "@/lib/bridge/saveReplay";
import { sessionToken } from "@/lib/bridge/sessionToken";
import { addAndUpdateQueryParam, generateUniqueId } from "@/lib/utils";
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
    embedSrc = src ? (src as string) : "";
    embedSrc = addAndUpdateQueryParam(
      embedSrc,
      "client_key",
      client_key as string
    );
    embedSrc = addAndUpdateQueryParam(embedSrc, "hamdast_embedded", "true");
    embedSrc = addAndUpdateQueryParam(
      embedSrc,
      "user_id",
      user_id?.toString() ?? ""
    );
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

  const sendSessionToken = async (event: any) => {
    const data = await sessionToken({ app });
    iframe.current?.contentWindow?.postMessage(
      {
        hamdast: {
          event: "HAMDAST_GET_SESSION_TOKEN",
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

        if (messageEvent.data?.hamdast?.event === "HAMDAST_GET_SESSION_TOKEN") {
          sendSessionToken(messageEvent.data?.hamdast);
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
  }, [app, menu, page]);

  if (!embedSrc) return <div></div>;
  return (
    <>
      <iframe
        ref={iframe as any}
        src={embedSrc}
        className="w-screen h-screen"
      />
    </>
  );
}

export default Bridge;
