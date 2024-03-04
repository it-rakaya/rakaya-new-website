const homepage = "https://www.rakaya.sa/";

function generateSiteMap() {
  const pages = [
    "",
    "rakaya",
    "rakaya/our-pillars",
    "rakaya/Our-work",
    "rakaya/our-services",
    "rakaya-studio",
    "jobs",
    "our-way",
    "contact-us",
  ];

  const urls = pages.map((slug) => {
    return {
      url: `${homepage}/${slug}`,
    };
  });

  const sitemapContent = urls
    .map((item) => {
      return `
        <url>
          <loc>${item.url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapContent}
</urlset>
  `;
}

const sitemap = generateSiteMap();
console.log(sitemap);
