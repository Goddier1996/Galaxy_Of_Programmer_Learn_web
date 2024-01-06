import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {


  useEffect(() => {

    let typeCursor = sessionStorage.getItem("typeCursor");

    if (typeCursor != null) {
      document.body.style.cursor = `url(${typeCursor}), pointer`;
    }
  }, []);



  return (

    <Layout>
      <main>
      <Component {...pageProps} />
      </main>
    </Layout>

  )
}

export default MyApp