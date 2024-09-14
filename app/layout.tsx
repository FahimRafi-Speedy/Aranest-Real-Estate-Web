import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import FindProperty from "./components/Body/FindProperty";
import Button from "./components/Body/Button";
import { Roboto } from 'next/font/google';
import Head from "next/head";

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
      <Head>
        {/* Google Maps API Script */}
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&libraries=places`}
          async
        />
      </Head>
      <body
        className={roboto.className}
      >

        {children}
      </body>
    </html>
  );
}
