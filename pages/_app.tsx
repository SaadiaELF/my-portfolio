import "../styles/globals.css";
import Head from "next/head";
import { Montserrat, Barlow_Condensed } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Saadia El fekak" />
        <meta name="description" content="Saadia El fekak portfolio"></meta>
        <title>Saadia El fekak</title>
      </Head>
      <main
        className={`bg-primary_1 bg-cover xl:bg-main ${montserrat.variable} ${barlow.variable}`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
