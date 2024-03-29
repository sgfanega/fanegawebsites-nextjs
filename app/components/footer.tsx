"use client";

import Image from "next/image";
import logo from "@/public/fwd-logo.png";

export default function Footer() {
  return (
    <footer className="py-5 bg-background-secondary">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-evenly">
          <div className="col-11 col-md-6">
            <Image
              src={logo}
              width={100}
              height={30}
              alt="Fanega Web Development Logo"
            />
            <p className="text-text-tertiary fs-5">A Simple Web Development Company</p>
          </div>
          <div className="col-4 col-md-2 site-map">
            <p className="text-accent-primary fs-4 mb-0">Links</p>
            <div className="d-flex flex-column flex-lg-row">
              <ul className="ps-0 mb-0" style={{ listStyle: "none" }}>
                <li><a href="" className="text-decoration-none">Home</a></li>
                <li><a href="" className="text-decoration-none">About</a></li>
                <li><a href="" className="text-decoration-none">Services</a></li>
                <li><a href="" className="text-decoration-none">Pricing</a></li>
              </ul>
              <ul className="ps-0 mb-0 ps-lg-2">
                <li><a href="" className="text-decoration-none">Technologies</a></li>
                <li><a href="" className="text-decoration-none">Contact</a></li>
                <li><a href="" className="text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-7 col-md-3">
            <p className="text-accent-primary fs-4 mb-0">Contact Info</p>
            <div className="d-flex lets-connect">
              <i className="bi bi-geo-alt-fill "></i>
              <a className="text-decoration-none ps-2">Chicago, IL</a>
            </div>
            <div className="d-flex lets-connect">
              <i className="bi bi-envelope-at-fill"></i>
              <a href="mailto:steve@fanegawebsites.com" className="text-decoration-none ps-2">steve@fanegawebsites.com</a>
            </div>
            <div className="d-flex lets-connect">
              <i className="bi bi-instagram"></i>
              <a href="https://www.instagram.com/fanegawebsites/" className="text-decoration-none ps-2">fanegawebsites</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footbar">

      </div>
    </footer>
  )
}