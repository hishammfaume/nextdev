import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const Inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const Poppins = localFont({
  src: "./fonts/PoppinsReg.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 600 700 800 900",
});


export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with devs from around the world. Explore topics in web development, mobile development,algorithms, data structures and more.",
  icons:{
    icon: 'images/site-logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Inter.variable} ${Poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
