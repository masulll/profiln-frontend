import { ModalProvider } from "binar/contexts/ModalsContext";
import { TabProvider } from "binar/contexts/TabContext";
import Layouts from "binar/layouts";
import "binar/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <TabProvider>
        <ModalProvider>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </ModalProvider>
      </TabProvider>
    </SessionProvider>
  );
}
