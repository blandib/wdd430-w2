import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NO experimental.serverActions here
};

export default nextConfig;
export const config = {
  matcher: ["/dashboard/:path*"],
};
