/** @type {import('next').NextConfig} */
const nextConfig = {
  // The markdown lives outside web/ (in ../md). Reading it on the server is
  // fine in dev and in a standard `next build` + `next start` deploy.
  reactStrictMode: true,
  experimental: {
    // Next 15.5.x ships a dev-overlay "Segment Explorer" whose internal module
    // (segment-explorer-node.js#SegmentViewNode) is missing from the RSC client
    // manifest, throwing a 500 on every page in `next dev`. Turn it off.
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
