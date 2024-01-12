import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import LoadingLinearProgress from "../components/tools/loading/LoadingLinearProgress";


function MyApp({ Component, pageProps }) {


  const [loading, setLoading] = useState(false);

  // here we create loading pages use Router , and show animation when loading page's
  useEffect(() => {

    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);

      let typeCursor = sessionStorage.getItem("typeCursor");

      if (typeCursor != null) {
        document.body.style.cursor = `url(${typeCursor}), pointer`;
      }
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);



  return (
      <>
        <Head>
          <title>Galaxy of programmers</title>
          <meta
            name="Learning webSite"
            content="Here programmers learn new language's"
          />
          <meta name="description" content="learn new language's" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="favicon" href="/public/favicon.ico" />
        </Head>

        {loading ? (
          <LoadingLinearProgress />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </>
  );
}


export default MyApp;