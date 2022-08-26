import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import ParticlesBackground from "./ParticlesBackground";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jamie{"'"}s Site</title>
        <meta
          name="Jamie's Site"
          content="Jamie's Software Development Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ParticlesBackground />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
