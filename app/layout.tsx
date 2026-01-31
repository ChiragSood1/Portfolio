import "./styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chirag | Software Developer",
  description: "Personal portfolio of Chirag",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
