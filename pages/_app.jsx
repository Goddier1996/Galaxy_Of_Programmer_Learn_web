import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import Head from 'next/head'


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
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}


export default MyApp;