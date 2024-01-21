/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en", // Set your default locale
    locales: ["en", "ar"], // Add other supported languages here
  },
}

module.exports = nextConfig
