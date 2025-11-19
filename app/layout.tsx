import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Allura } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* -------------------------------------------
   🔥 Police cursive Allura (calligraphique)
-------------------------------------------- */
export const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

/* -------------------------------------------
   Metadata du site
-------------------------------------------- */
export const metadata: Metadata = {
  title: "Master 2 Droit des affaires 214",
  description: "Site de l'association Master 2 Droit des affaires - 214",
};

/* -------------------------------------------
   Layout principal (RootLayout)
-------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable}
          antialiased
        `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
