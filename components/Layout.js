import Header from "./Header";
import Footer from "./Footer";
import Top from "./Top";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jamie's Site</title>
        <meta
          name="Jamie's Site"
          content="Jamie's Software Development Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/ionicons@4.5.0/dist/css/ionicons.min.css"
          rel="stylesheet"
        />
      </Head>

      <Header />

      {children}

      <Top />
      <Footer />
    </>
  );
};

export default Layout;
