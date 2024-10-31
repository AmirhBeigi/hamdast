import { activeUsersLog } from "@/lib/bridge/activeUsersLog";
import { getState } from "@/lib/bridge/getState";
import { saveReplay } from "@/lib/bridge/saveReplay";
import { sessionToken } from "@/lib/bridge/sessionToken";
import { usersDurationLog } from "@/lib/bridge/usersDurationLog";
import { addAndUpdateQueryParam, generateUniqueId } from "@/lib/utils";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

function Bridge() {
  const {
    query: { link },
    isReady,
  } = useRouter();

  useEffect(() => {
    window.hamdast?.openLink({ url: link });
  }, [link]);

  return <></>;
}

export default Bridge;
