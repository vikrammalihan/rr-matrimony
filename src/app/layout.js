

import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import InstallButton from "@components/InstallButton";
import MobileWrapper from "@components/MobileWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rawa Rajput Maroimony Website",
  description: "Rawa Rajput Maroimony Website",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#e31818" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileWrapper>{children}</MobileWrapper>
        <InstallButton />
      </body>
    </html>
  );
}
