import { useState } from "react";
import { ModalProvider } from "binar/contexts/ModalsContext";
import { TabProvider } from "binar/contexts/TabContext";
import Layouts from "binar/layouts";
import "binar/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";
import { AuthProvider } from "binar/contexts/AuthContext";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TabProvider>
          <ModalProvider>
            <Layouts>
              <Component {...pageProps} />
              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </Layouts>
          </ModalProvider>
        </TabProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
