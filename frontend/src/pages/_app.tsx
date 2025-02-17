import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Globalstyle from "@/src/styles/GlobalStyle";
import { useState } from "react";
import localFont from "next/font/local";

const ownglyph = localFont({
  src: "../../public/fonts/Ownglyph.ttf",
  display: "swap", // ✅ swap으로 설정하면 깜빡임 방지
  variable: "--font-ownglyph",
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Globalstyle />
      <div className={ownglyph.variable}>
        <Component {...pageProps} />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
