"use client";

import Image from "next/image";
import logo from "../../public/fwd-logo-words-blue.png";

export default function Footer() {
  return (
    <footer className="pt-5 bg-secondary">
      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-6 col-md-8 mb-5 mb-md-0">
            <Image
              src={logo}
              width={135}
              height={50}
              alt="Fanega Web Development Logo"
            />
             <div className="d-flex mt-2">
              <i className="bi bi-envelope-at-fill text-accent-secondary"></i>
              <a href="mailto:steve@fanegawebsites.com" className="text-decoration-none custom-link-accent-secondary-text-primary ps-2">steve@fanegawebsites.com</a>
            </div>
            <div className="d-flex">
              <i className="bi bi-instagram text-accent-secondary"></i>
              <a href="https://www.instagram.com/fanegawebsites/" className="text-decoration-none custom-link-accent-secondary-text-primary ps-2">fanegawebsites</a>
            </div>
          </div>
          <div className="col-7 col-md-2 site-map">
            <p className="text-accent-primary fs-4 mb-0">Navigation</p>
            <hr className="text-accent-primary"/>
            <div className="d-flex flex-column flex-lg-row">
              <ul className="list-unstyled ps-0 mb-0" style={{ listStyle: "none" }}>
                <li><a href="/" className="text-decoration-none custom-link-accent-secondary-text-primary">Home</a></li>
                <li><a href="/about" className="text-decoration-none custom-link-accent-secondary-text-primary">About</a></li>
                <li><a href="/services" className="text-decoration-none custom-link-accent-secondary-text-primary">Services</a></li>
                <li><a href="/pricing" className="text-decoration-none custom-link-accent-secondary-text-primary">Pricing</a></li>
              </ul>
              <ul className="list-unstyled ps-0 mb-0 ps-lg-5">
                <li><a href="/#contact" className="text-decoration-none custom-link-accent-secondary-text-primary">Contact</a></li>
                <li><a href="/privacy-policy" className="text-decoration-none custom-link-accent-secondary-text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-4 col-md-2">
            <p className="text-accent-primary fs-4 mb-0">Services</p>
            <hr className="text-accent-primary"/>
            <div className="text-end">
              <ul className="list-unstyled ps-0 mb-0" style={{ listStyle: "none" }}>
                <li>HTML, JS, and CSS</li>
                <li>Page Builders</li>
                <li>WordPress</li>
                <li>Headless CMS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footbar bg-primary">
        <div className="container d-flex flex-column flex-md-row justify-content-md-between">
          <p className="text-center fw-light text-secondary mb-0">Copyright © 2024 Fanega Web Development</p>
          <p className="text-center fw-light text-secondary mb-0">Powered by Next.js and Cloudflare</p>
        </div>
      </div>
    </footer>
  )
}