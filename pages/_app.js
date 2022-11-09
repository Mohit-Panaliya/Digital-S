import "../styles/globals.css";
import Header from "../sections/Header";
import Footer from "../sections/Footer"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
