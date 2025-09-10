/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dunebuggy', // URL shown in the browser
        destination: '/',     // Actual page to render
      },
    ];
  },
};

export default nextConfig;
