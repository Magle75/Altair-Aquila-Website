import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Altair-Aquila",
    template: "%s-Altair-Aquila",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <Head>
      <link rel="icon" href="/akii.png" sizes="32x32" />
    </Head>
    <body className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/BG-STAR.jpg')" }}>
      {children}
      <header>
        <NavBar />
      </header>
      <footer>
        <Footer />
      </footer>
    </body>
  </html>
);

export default RootLayout;
