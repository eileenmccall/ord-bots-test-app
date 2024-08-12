import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Header />
        <Nav />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
