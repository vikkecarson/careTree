declare module 'next-pwa' {
  import { NextConfig } from 'next';

  interface PWAOptions {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    fallbacks?: {
      document?: string;
      image?: string;
      font?: string;
      audio?: string;
      video?: string;
    };
  }

  function withPWA(nextConfig: NextConfig): NextConfig & { pwa: PWAOptions };

  export default withPWA;
}
