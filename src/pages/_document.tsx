import { Html, Head, Main, NextScript } from "next/document";
import { fontTheme } from "binar/helpers";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={fontTheme.causten.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
