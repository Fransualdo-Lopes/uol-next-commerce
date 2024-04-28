import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Navbar from './components/Navbar';
import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";


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
        <body className={clsx(inter.className, 'bg-slate 700')}>
          <Navbar />
          <main className='h-screen p-16'>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
