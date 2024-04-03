"use client";

import { usePathname  } from "next/navigation";
import Image from "next/image";
import logo from "@/public/services/services-hosting.svg";

export default function Navbar() {
  const activeLink = usePathname();

  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image
            src={logo}
            width={100}
            height={30}
            alt="Fanega Web Development Logo"
          />
        </a>
        <button className="navbar-toggler border-cricle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "/about" ? "active" : ""}`} href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "/services" ? "active" : ""}`} href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "/pricing" ? "active" : ""}`} href="/pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "/#contact" ? "active" : ""}`} href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}