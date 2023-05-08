import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-87ETS7Y1TK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-87ETS7Y1TK');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
