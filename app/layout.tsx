import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Islamic Knowledge Platform",
  description: "A multi-language Islamic knowledge platform with comprehensive articles, search, and community features",
  keywords: "Islam, Islamic knowledge, Quran, Hadith, Islamic education",
};

export const viewport: Viewport = {
  themeColor: "#FF8C00",
  userScalable: true,
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
