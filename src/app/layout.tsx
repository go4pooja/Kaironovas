import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kaironovas | AI-Powered Solutions & Innovation",
  description: "Transform your business with cutting-edge AI technology. From smart websites to intelligent influencer matching, we create solutions that think ahead.",
  keywords: "AI, artificial intelligence, website creation, digital marketing, influencer marketing, sports analytics, home automation",
  authors: [{ name: "Kaironovas Team" }],
  openGraph: {
    title: "Kaironovas | AI-Powered Solutions & Innovation",
    description: "Transform your business with cutting-edge AI technology. From smart websites to intelligent influencer matching, we create solutions that think ahead.",
    type: "website",
    url: "https://kaironovas.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaironovas | AI-Powered Solutions & Innovation",
    description: "Transform your business with cutting-edge AI technology. From smart websites to intelligent influencer matching, we create solutions that think ahead.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
