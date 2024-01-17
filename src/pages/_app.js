import Layout from "@/components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
   return (
      <Layout>
         <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossorigin="anonymous"></script>
         <Component {...pageProps} />
      </Layout>
   );
}
