import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import BootstrapClient from "./components/bootstrapClient";
import "@/app/main.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const robotoCondensed = Roboto_Condensed({ 
  weight: ["300", "500", "700"],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Fanega Web Development",
  description: "A Simple Web Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <Navbar/>
        {children}
        <Footer/>
        <BootstrapClient/>
      </body>
    </html>
  );
}
