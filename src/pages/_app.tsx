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
      <Script id="clarity">{`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "4zn9fqioi8");
            `}</Script>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
