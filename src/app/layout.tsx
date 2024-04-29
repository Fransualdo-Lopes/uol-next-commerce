
import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Footer from "./components/Footer";
import Shop from "./components/Shop";


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
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(inter.className, 'bg-slate-blue 700')}>
          <Navbar />
          <main className='h-screen p-0.6'>
            <HomeContent />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

