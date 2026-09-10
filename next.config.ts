import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Gera arquivos isolados para o container Docker
};

export default nextConfig;