import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaironovas.com'),
  title: "Kaironovas | AI-Powered Solutions & Innovation",
  description: "Transform your business with cutting-edge AI technology. From smart websites to intelligent influencer matching, we create solutions that think ahead.",
  keywords: "AI, artificial intelligence, website creation, digital marketing, influencer marketing, sports analytics, home automation",
  authors: [{ name: "Kaironovas Team" }],
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.png', sizes: '152x152', type: 'image/png' },
      { url: '/logo.png', sizes: '120x120', type: 'image/png' }
    ],
    shortcut: '/logo.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Kaironovas | AI-Powered Solutions & Innovation",
    description: "Transform your business with cutting-edge AI technology. From smart websites to intelligent influencer matching, we create solutions that think ahead.",
    type: "website",
    url: "https://kaironovas.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kaironovas - AI-Powered Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaironovas | AI-Powered Solutions & Innovation",
    description: "Transform your business with cutting-edge AI technology. From smart websites to intelligent influencer matching, we create solutions that think ahead.",
    images: ["/logo.png"]
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
