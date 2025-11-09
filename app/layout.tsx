import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Portfolio | Mubarek Jemal",
  description:
    "Personal portfolio website showcasing modern web development projects and skills.",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div id="cursor-dot" className="cursor-dot" />
        <div id="cursor-ring" className="cursor-ring" />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
