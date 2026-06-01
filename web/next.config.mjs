/** @type {import('next').NextConfig} */
const nextConfig = {
  // The markdown lives outside web/ (in ../md). Reading it on the server is
  // fine in dev and in a standard `next build` + `next start` deploy.
  reactStrictMode: true,
};

export default nextConfig;
