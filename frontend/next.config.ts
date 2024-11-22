const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = withPWA({
  pwa: {
    dest: "public", // Service worker and PWA files will be placed here
    register: true,
    skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable SW in dev mode
  },
});

export default nextConfig;
