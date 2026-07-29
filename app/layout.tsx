import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "合乎意林｜问意成文，释义还意",
  description:
    "输入一句寻常话，把它翻译成意林时代的白话翻译腔；也可粘贴意林体，释义翻回直接人话。",
  keywords: ["意林时代", "合乎意林", "释义", "AI翻译", "网络梗", "DeepSeek"],
  openGraph: {
    title: "合乎意林",
    description: "问意成文，释义还意。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="preload"
          href="/fonts/yilin-serif-ui-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/yilin-serif-ui-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/yilin-serif-ui-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
