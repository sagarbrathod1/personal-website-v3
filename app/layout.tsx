import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Rathod",
  description: "Sagar Rathod is a software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
