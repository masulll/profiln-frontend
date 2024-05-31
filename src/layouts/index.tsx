import React from "react";
import { useRouter } from "next/router";
import { causten } from "binar/helpers/fontTheme";
import Head from "next/head";
import Navbars from "binar/components/organisms/HomepageComponents/Navbars";
type AppShellProps = {
  children: React.ReactNode;
};

const Layouts = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();

  const noLayoutPages = [
    "/auth/login",
    "/auth/register",
    "/auth/register/verification",
    "/auth/forget",
  ];

  if (noLayoutPages.includes(router.pathname)) {
    return <main className={`${causten.className} `}>{children}</main>;
  }
  return (
    <>
      <Head>
        <title>Profiln</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo/Icon Binar.svg" />
      </Head>

      <Navbars />
      <main className={`${causten.className} `}>{children}</main>
    </>
  );
};

export default Layouts;
