import "./styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Chirag | Software Developer",
  description: "Personal portfolio of Chirag",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main
  style={{
    maxWidth: "960px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
  }}
>
  {children}
</main>
        <Footer />
      </body>
    </html>
  );
}