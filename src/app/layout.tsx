import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "F1 25 세팅 가이드",
  description: "F1 25 세팅 가이드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
