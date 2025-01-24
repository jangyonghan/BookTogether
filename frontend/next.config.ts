import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Next.js의 styled-components 지원 활성화
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ttf$/, // .ttf 파일 처리
      use: [
        {
          loader: "file-loader", // file-loader 사용
          options: {
            name: "static/fonts/[name].[hash].[ext]", // 폰트 파일 저장 경로 및 이름
            publicPath: "/_next/", // Next.js에서 파일 경로
          },
        },
      ],
    });
    return config; // Webpack 설정 반환
  },
};

export default nextConfig;
