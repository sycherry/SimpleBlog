import type { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/global.css";
import { UserProvider } from "../lib/UserProvider";
import React from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
