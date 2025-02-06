import type {Metadata} from "next";
import "./globals.css";
import {Roboto} from 'next/font/google';
import GoogleMapsLoader from "../components/GoogleMapsLoader";
import React from "react";

const roboto = Roboto({
    weight: ['400', '500', '700'], // Choose desired weights
    subsets: ['latin'], // Choose language subsets
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Aranest",
    description: "Your Trusted Real Estate",
};


export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={roboto.className}>
        <GoogleMapsLoader/>
        {children}
        </body>
        </html>
    );
}
