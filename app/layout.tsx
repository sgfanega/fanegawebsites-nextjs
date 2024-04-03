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
  metadataBase: new URL('https://fanegawebsites.com'),
  title: {
    template: '%s | FWD',
    default: 'Fanega Web Development'
  },
  description: "A Simple Web Development Company",
  generator: 'Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', 'Cloudflare'],
  authors: [{ name: 'Steve Fanega', url: 'fanegawebsites.com'}],
  creator: 'Steve Fanega',
  openGraph: {
    title: 'FWD',
    description: 'A Simple Web Development Company',
    url: 'https://fanegawebsites.com',
    siteName: 'Fanega Web Development',
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 600
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precompressed',
      url: '/apple-icon.png'
    }
  }
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
