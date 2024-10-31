import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

function Bridge() {
  const {
    query: { destination },
    isReady,
  } = useRouter();

  useEffect(() => {
    if (destination) {
      window.hamdast?.openLink({ url: destination });
    }
  }, [destination]);

  return <></>;
}

export default Bridge;
