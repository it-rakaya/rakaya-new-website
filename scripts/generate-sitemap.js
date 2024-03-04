const fs = require("fs");
const { create } = require("xmlbuilder2");

const urls = [
  { loc: "https://www.rakaya.sa/", lastmod: "2024-03-04", priority: 1.0 },
  { loc: "https://www.rakaya.sa/rakaya", lastmod: "2024-03-04", priority: 0.8 },
];

const root = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
  xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
});

urls.forEach(({ loc, lastmod, priority }) => {
  const urlElement = root.ele("url");
  urlElement.ele("loc").txt(loc);
  urlElement.ele("lastmod").txt(lastmod);
  urlElement.ele("priority").txt(priority);
});

const xml = root.end({ prettyPrint: true });

fs.writeFileSync("public/sitemap.xml", xml);
