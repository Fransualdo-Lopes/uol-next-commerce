import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uol-Next-E-Commerce 14",
  description: "Next- E-Commerce utilizando a versao 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate 700')}>
        <Navbar />
        <main className='h-screen p-16'>
          {children}
        </main>
      </body>
    </html>
  );
}
