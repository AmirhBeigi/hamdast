import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import { useEffect } from "react";
import Script from "next/script";

const iransansFont = localFont({
  src: "../../public/fonts/IRANSansXV.woff2",
  variable: "--iran-sans-x",
  preload: true,
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add(iransansFont.variable);
  }, []);
  return (
    <PlasmicRootProvider Head={Head}>
      <Script id="ms_clarity">{`(function (a, e, b, f, g, c, d) {
  a[b] =
    a[b] ||
    function () {
      (a[b].q = a[b].q || []).push(arguments);
    };
  c = e.createElement(f);
  c.async = 1;
  c.src = "https://www.clarity.ms/tag/" + g;
  d = e.getElementsByTagName(f)[0];
  d.parentNode.insertBefore(c, d);
})(window, document, "clarity", "script", "4zn9fqioi8");
`}</Script>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
