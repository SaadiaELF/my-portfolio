import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Saadia El fekak" />
        <title>Saadia El fekak</title>
        <meta name="description" content="Saadia El fekak portfolio"></meta>
        <Component {...pageProps} />
      </Head>
    </>
  );
}
