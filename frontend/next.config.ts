import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Next.js의 styled-components 지원 활성화
  },
  reactStrictMode: true,
  webpack: (config) => {
    // 기존 Webpack 설정
    config.module.rules.push(
      {
        test: /\.ttf$/, // .ttf 파일 처리
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/fonts/[name].[hash].[ext]",
              publicPath: "/_next/",
            },
          },
        ],
      },
      {
        test: /\.svg$/, // .svg 파일 처리
        use: [
          {
            loader: "@svgr/webpack", // SVG 파일을 React 컴포넌트로 변환
            options: {
              prettier: false, // Prettier 포맷 비활성화
              svgo: true, // SVGO 활성화
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox", // viewBox 속성 제거 방지
                    active: false,
                  },
                ],
              },
              titleProp: true, // title 속성 지원
            },
          },
        ],
      }
    );

    return config; // Webpack 설정 반환
  },
};

export default nextConfig;
