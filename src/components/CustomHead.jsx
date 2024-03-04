/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

export default function CustomHead({
  title,
  description,
  url,
  imageUrl,
  keywords = "ركايا, شركة ركايا, ركايا البديعة, وظائف ركايا, ركايا استوديو, ركايا",
}) {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: url,
    name: title,
    alternateName: "Rakaya",
    image: "/rakaya.png",
  };

  return (
    <Head>
      <title>{`ركايا - ${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={"/rakaya.png"} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="/favicon.ico" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={"/rakaya.png"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Language" content="ar" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rakaya" />{" "}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={"https://www.rakaya.sa/"} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WK6D3JZL9S"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WK6D3JZL9S');
        `}
      </script>
    </Head>
  );
}

// sitemap.xml
