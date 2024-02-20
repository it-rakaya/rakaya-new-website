/* eslint-disable @next/next/no-sync-scripts */
import Layout from "@/components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useLayoutEffect } from "react";
import { useIsRTL } from "@/hooks/useIsRTL";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const isRTL = useIsRTL();
  useLayoutEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, [isRTL]);

  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}
