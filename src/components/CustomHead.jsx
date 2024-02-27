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
    alternateName: "اسم بديل للموقع إن وجد",
    image: imageUrl,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      {/* الخصائص الثابتة */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Language" content="ar" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="اسم موقعك أو تطبيقك" />{" "}
      {/* اجعل هذا ثابتًا إذا كان اسم الموقع لا يتغير */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {/* fonts */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      /> */}
    </Head>
  );
}
