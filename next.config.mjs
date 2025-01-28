/**
 * @type {import('next').NextConfig}
 */

import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  //disable: process.env.NODE_ENV === "development",
  disable: false, // Ensures PWA is enabled in all environments
  dynamicStartUrl: true, // Ensures start URL caching works dynamically
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/rr-matrimony\.vercel\.app\/.*$/,
      handler: "CacheFirst",
      options: {
        cacheName: "pages-cache",
        expiration: {
          maxEntries: 50, // Cache up to 50 pages
          maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /^\/_next\/.*\.(js|css|json|html|ico|png|jpg|jpeg|svg|gif)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "next-static-resources",
        expiration: {
          maxEntries: 100,
        },
      },
    },
  ],
})({
  reactStrictMode: true,
  experimental: {
    turbo: {
      enabled: false, // Correct way to disable Turbopack
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
  
  
});

export default nextConfig;
