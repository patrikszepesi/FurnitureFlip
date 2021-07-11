import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import { Provider } from "../context";
import Head from 'next/head';
import Swiper from 'swiper/bundle';
import toast, { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
    <Head>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

       <title>My page title</title>

       <link
      href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
      rel="stylesheet"
    />
     </Head>
     <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
