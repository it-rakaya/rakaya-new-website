import Layout from "@/components/layout/Layout";
import { useIsRTL } from "@/hooks/useIsRTL";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
  const isRTL = useIsRTL();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, [isRTL]);

  // Wrap the component with the Layout if noLayout is not true
  const renderComponent = () => (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive" 
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );

  return (
    <I18nextProvider i18n={i18n}>
      {Component.noLayout ? (
        renderComponent()
      ) : (
        <Layout>
          {renderComponent()}
        </Layout>
      )}
    </I18nextProvider>
  );
}
