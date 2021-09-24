import "@styles/globals.css";
import { UserContext } from "@lib/context";
import { useUserData } from "@lib/hooks";
import { Toaster } from "react-hot-toast";
import { Header } from "@components/Navbar/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import * as ga from "../lib/ga";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <UserContext.Provider value={userData}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
