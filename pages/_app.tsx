import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Saadia El fekak" />
        <meta name="description" content="Saadia El fekak portfolio"></meta>
        <title>Saadia El fekak</title>
        <Component {...pageProps} />
      </Head>
    </>
  );
}
