import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import Script from "next/script";

// ...

// This code belongs ABOVE the <Head> tag in your _app.js file's return.

{/* Global Site Tag (gtag.js) - Google Analytics */}




export default function App({ Component, pageProps }) {

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-EZ7P9312VS`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EZ7P9312VS');
        `}
      </Script>

      <NextUIProvider><Component {...pageProps} /></NextUIProvider>
    </>
  );
} 
