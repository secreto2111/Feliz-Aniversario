import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Necessário para que os crawlers (WhatsApp, Discord, etc.) encontrem a imagem correta
// no GitHub Pages com basePath, usando um caminho estável do diretório public/
const BASE_PATH = "/Feliz-Aniversario";
const OG_IMAGE = `${BASE_PATH}/og.jpg`;
const ABS_OG_IMAGE = `https://secreto2111.github.io${OG_IMAGE}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feliz Aniversário",
  description: "Cartinha de feliz aniversario",
  icons: {
    icon: ABS_OG_IMAGE,
    shortcut: ABS_OG_IMAGE,
    apple: ABS_OG_IMAGE,
  },
  // Gera URLs absolutas corretas para GitHub Pages
  metadataBase: new URL("https://secreto2111.github.io"),
  openGraph: {
    title: "Feliz Aniversário",
    description: "Cartinha de feliz aniversario",
    url: "/Feliz-Aniversario",
    siteName: "Feliz Aniversário",
    images: [
      {
        url: ABS_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nosso Jardim de Memórias",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feliz Aniversário",
    description: "Cartinha de feliz aniversario",
    images: [ABS_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
