// pages/404.tsx

import Head from "next/head";
import theme from "binar/constants";
import { OutlineButton } from "binar/components/atoms/Buttons";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Page Not Found - Profiln</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo/Icon Binar.svg" />
      </Head>

      <main
        css={{
          background: theme.neutral_colors.grayscale_20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <div>
          <h1>404 - Konten Tidak Ditemukan</h1>
          <p>Halaman yang anda cari tidak dapat ditemukan</p>
        </div>
        <OutlineButton buttonText="Kembali" onClick={() => router.push("/")} />
      </main>
    </>
  );
};

export default Custom404;
