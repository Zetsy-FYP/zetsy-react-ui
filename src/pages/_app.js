import "remixicon/fonts/remixicon.css";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        facebook={{ appId: "1363790691017277" }}
        canonical={pageProps?.canonical}
      />
      <Head>
        <title>{pageProps?.title}</title>
        <meta name="description" content={pageProps?.description} />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="og:image" content={pageProps?.ogImage} />
        <meta property="og:image:width" content="928" />
        <meta property="og:image:height" content="585" />
        <meta property="og:image:alt" content="explicitly provided" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="google-site-verification" content="EICBeVat_galmLItuV75cvY2ZtieEfbykxrzh4dpreU" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:url" content={pageProps?.ogUrl} />
        <meta name="twitter:image" content={pageProps?.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageProps?.title} />
        <meta name="twitter:description" content={pageProps?.description} />
        <meta name="twitter:site" content="@zetsy_store" />
        <meta name="twitter:creator" content="@zetsy_store" />
        <meta name="twitter:image:alt" content={pageProps?.title} />
        <meta name="msapplication-TileColor" content="#1E69FF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
