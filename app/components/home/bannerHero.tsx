import Image from "next/image";
import bannerHeroImage from "@/public/home/banner-hero-image.svg";

export default function BannerHero() {
  return (
    <section className="home-banner-hero container d-flex align-items-center mt-5 mt-lg-0" style={{minHeight: "60dvh"}}>
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <Image
            className="img-fluid"
            src={bannerHeroImage}
            priority
            alt="A Laptop with 'https://www' text in the middle of the screen."
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="display-2 fw-bold text-primary text-center text-md-start">Your <span className="text-accent-primary">Company</span></h2>
          <h2 className="display-2 fw-bold text-primary text-center text-md-start">Your <span className="text-accent-secondary">Website</span></h2>
          <p className="fs-5 fw-medium text-center text-md-start">Helping you build your company&apos;s incredible website</p>
          <div className="text-center text-md-start">
            <a className="btn btn-accent-secondary fw-light shadow" href="/#contact">Contact Us</a>
            <a className="btn btn-accent-primary fw-light text-light ms-4 shadow /services">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}