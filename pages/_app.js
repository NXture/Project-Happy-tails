import "@styles/globals.css";
import { UserContext } from "@lib/context";
import { useUserData } from "@lib/hooks";
import { Toaster } from "react-hot-toast";
import { Header } from "@components/Navbar/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.local.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <UserContext.Provider value={userData}>
      <Header />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
