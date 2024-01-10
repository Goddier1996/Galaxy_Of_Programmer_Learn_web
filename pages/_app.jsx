import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let typeCursor = sessionStorage.getItem("typeCursor");

    if (typeCursor != null) {
      document.body.style.cursor = `url(${typeCursor}), pointer`;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Galaxy of programmers</title>
        <meta
          name="Learning webSite"
          content="Here programmers learn new language's"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
