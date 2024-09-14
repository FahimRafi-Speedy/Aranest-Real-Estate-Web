import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import GoogleLogo from "./components/Body/GoogleLogo";
import Button from "./components/Body/Button";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'], // Choose desired weights
  subsets: ['latin'], // Choose language subsets
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aranest",
  description: "Your Trusted Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >

        {children}
      </body>
    </html>
  );
}
