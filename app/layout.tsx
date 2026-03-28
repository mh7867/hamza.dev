import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamza — MERN Stack Developer",
  description:
    "Full-stack MERN developer crafting performant, scalable web applications with React, Node.js, Express, and MongoDB.",
  keywords: ["MERN", "Full Stack", "React", "Node.js", "MongoDB", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
