import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </Layout>
  );
}
