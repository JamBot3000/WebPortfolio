import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/ionicons@4.5.0/dist/css/ionicons.min.css"
          rel="stylesheet"
        />
      </Head>

      <body className="is-in">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
