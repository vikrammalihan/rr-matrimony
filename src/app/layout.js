import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css"; 
import InstallButton from "@components/InstallButton";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <InstallButton />
      </body>
    </html>
  );
}
