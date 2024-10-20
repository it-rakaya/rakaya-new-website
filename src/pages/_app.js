import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import Script from "next/script";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { ToastContainer } from "react-toastify";
import FooterAuth from "../components/FooterAuth";
import i18n from "../i18n";
import Layout from "../components/layout/Layout";
import CustomLayout from "../components/layout/CustomLayout";
import { DarkModeProvider } from "../context/DarkModeContext";
import { useIsRTL } from "../hooks/useIsRTL";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/auth/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "../components/ContactUs";

export default function MyApp({ Component, pageProps }) {
  const isRTL = useIsRTL();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, [isRTL]);

  const route = useRouter();
  const renderComponent = () => (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WK6D3JZL9S"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WK6D3JZL9S');
      `}
      </Script>
      <Script id="clarity" strategy="afterInteractive">
        {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ollxmn2q1n");
  `}
      </Script>

      <Component {...pageProps} />
    </>
  );

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  // fetch('http://ip-api.com/json')
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log('IP Address: ' + data.query);
  //   console.log('Location: ' + data.city + ', ' + data.regionName + ', ' + data.country);
  //   console.log('Coordinates: ' + data.lat + ', ' + data.lon);

  //   if (data.countryCode === 'EG') {
  //     console.log('The user is in Egypt.');
  //   } else {
  //     console.log('The user is not in Egypt. Current location: ' + data.country);
  //   }
  // })
  // .catch((error) => {
  //   console.error('Error fetching the IP information:', error);
  // });

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {Component.noLayout ? (
            <DarkModeProvider>
              {renderComponent()}

              <FooterAuth />
            </DarkModeProvider>
          ) : route?.asPath.startsWith("/profile") ? (
            <DarkModeProvider>
              <CustomLayout>
                {renderComponent()}
                <FooterAuth />
              </CustomLayout>
            </DarkModeProvider>
          ) : (
            <DarkModeProvider>
              <Layout>{renderComponent()}</Layout>
            </DarkModeProvider>
          )}
          <div>
            <ContactUs />
          </div>
        </AuthProvider>
        <ToastContainer isRTL={true} />
      </QueryClientProvider>
    </I18nextProvider>
  );
}
