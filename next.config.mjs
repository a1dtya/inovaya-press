/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/press',
        permanent: true,
      },
    ]
  }, 
};

export default nextConfig;
