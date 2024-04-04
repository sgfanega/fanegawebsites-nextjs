"use client";

import Image from "next/image";
import wordpressLogo from "@/public/icons/wordpress.svg";
import cloudFlareLogo from "@/public/icons/cloudflare-original.svg";
import css3Logo from "@/public/icons/css3-original.svg";
import figmaLogo from "@/public/icons/figma-original.svg";
import html5Logo from "@/public/icons/html5-original.svg";
import javascriptLogo from "@/public/icons/javascript-original.svg";
import nextLogo from "@/public/icons/nextjs-original.svg";
import reactLogo from "@/public/icons/react-original.svg";
import sassLogo from "@/public/icons/sass-original.svg";
import { useEffect } from "react";

export default function BannerTechology() {

  // Kevin Powell's Approach 
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  
    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");
  
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner?.children ?? []);
  
        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as Element;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner?.appendChild(duplicatedItem);
        });
      });
    }
  },[])
  
  const size = 50;
  return (
    <section className="bg-accent-secondary my-5">
      <div className="container">
        <div className="row justify-content-evenly justify-content-md-center">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <p className="fs-4 text-light mb-0">Technologies:</p>
          </div>
          <div className="col-6 col-md-8 col-lg-7">
            <div className="scroller" data-direction="right" data-speed="fast">
              <div className="scroller__inner">
                <Image className="img-fluid" src={nextLogo} alt="Next.js Logo" height={size} width={size}/>
                <Image className="img-fluid" src={reactLogo} alt="React.js Logo" height={size} width={size}/>
                <Image className="img-fluid" src={html5Logo} alt="HTML5 Logo" height={size} width={size}/>
                <Image className="img-fluid" src={javascriptLogo} alt="JavaScript Logo" height={size} width={size}/>
                <Image className="img-fluid" src={wordpressLogo} alt="WordPress Logo" height={size} width={size}/>
                <Image className="img-fluid" src={css3Logo} alt="CSS Logo" height={size} width={size}/>
                <Image className="img-fluid" src={sassLogo} alt="Sass Logo" height={size} width={size}/>
                <Image className="img-fluid" src={cloudFlareLogo} alt="Cloudflare Logo" height={size} width={size}/>
                <Image className="img-fluid" src={figmaLogo} alt="Figma Logo" height={size} width={size}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}