import { Metadata } from "next";
import BannerHero from "./components/home/bannerHero";
import BannerTechology from "./components/home/bannerTechnology";
import About from "./components/home/about";
import Services from "./components/home/services";
import ContractExample from "./components/home/contractExample";
import FeaturedWorks from "./components/home/featuredWorks";
import ContactMe from "./components/home/contactMe";

export const metadata: Metadata = {
  title: 'Home | FWD'
}

export default function Home() {
  return (
    <main id="home">
      <BannerHero/>
      <BannerTechology/>
      <About/>
      <Services/>
      <ContractExample/>
      <FeaturedWorks/>
      <ContactMe/>
    </main>
  );
}
