import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          id="hamdast-script"
          type="text/javascript"
          // src="http://localhost:3000/sdk/hamdast.js"
          src="https://hamdast.paziresh24.com/sdk/hamdast.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
