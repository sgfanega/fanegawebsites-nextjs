import { Metadata } from "next";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import introImage from "@/public/services/services-img-intro.svg";
import hostingImage from "@/public/services/services-img-hosting.svg";
import seoImage from "@/public/services/services-img-seo.svg";
import pagesImageService from "@/public/services/service-pages.svg";
import designMockupImageService from "@/public/services/services-design-mockup.svg";
import hostingImageService from "@/public/services/services-hosting.svg";
import contactFormImageService from "@/public/services/services-contact-form.svg";
import seoImageService from "@/public/services/services-seo.svg";
import content from "./content.json";

export const metadata: Metadata = {
  title: 'Services'
}

export default function Services() {
  const data = content.services.content;

  return (
    <main className="services container my-5">
      <h1 className="display-1 fw-medium text-acgray text-center">Services</h1>
      <section>
        <div className="row justify-content-evenly py-5 introduction">
          <div className="col-11 col-md-6 align-self-center">
            <h2 className="display-2 fw-medium">Web Development Made Easier</h2>
            <div className="fs-5 text-gray" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.introductionParagraph)}}/>
          </div>
          <div className="col-11 col-md-6 align-self-center">
            <Image 
              className="img-fluid"
              src={introImage}
              alt=""
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className="row justify-content-evenly my-5 py-5 hosting">
          <div className="col-11 col-md-6 order-2 order-md-1 align-self-center">
            <Image
              className="img-fluid"
              src={hostingImage}
              alt=""
              height={500}
              width={500}
            />
          </div>
          <div className="col-11 col-md-6 align-self-center order-1 order-md-2">
            <h2 className="display-2 text-primary fw-medium">Hosting</h2>
            <div className="fs-5 text-gray" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.hostingParagraph)}}/>
          </div>
        </div>
        <div className="row justify-content-evenly my-5 py-5 seo">
          <div className="col-11 col-md-6">
          <h2 className="display-2 text-primary fw-medium">SEO Optimization</h2>
            <div className="fs-5 text-gray" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.seoOptimizationParagraph)}}/>
          </div>
          <div className="col-11 col-md-6 align-self-center">
            <Image 
              className="img-fluid"
              src={seoImage}
              alt=""
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>
      <section className="py-5 my-5">
        <div className="row justify-content-evenly">
          <h2 className="display-6 text-text-primary fw-medium text-center mb-5">Ok great, but what will my website actually have?</h2>
          <div className="col-11 col-md-4 col-lg-2 align-self-center text-center">
            <Image 
              className="img-fluid"
              src={pagesImageService}
              alt=""
              height={150}
              width={150}
            />
            <h5 className="fs-4">Five Pages</h5>
            <p className="fs-6 text-gray">The standard Home, About, Services, Contact, and Privacy Policy pages.</p>
          </div>
          <div className="col-11 col-md-4 col-lg-2 align-self-center text-center">
            <Image 
              className="img-fluid"
              src={designMockupImageService}
              alt=""
              height={150}
              width={150}
            />
            <h5 className="fs-4">Design Mockup</h5>
            <p className="fs-6 text-gray">
              A mockup design before any coding is done to ensure what you want.
            </p>
          </div> 
          <div className="col-11 col-md-4 col-lg-2 align-self-center text-center">
            <Image 
              className="img-fluid"
              src={hostingImageService}
              alt=""
              height={150}
              width={150}
            />
            <h5 className="fs-4">Hosting Services</h5>
            <p className="fs-6 text-gray">
              Though I do not host any websites, but I will assist in hosting it for you.
            </p>
          </div> 
          <div className="col-11 col-md-4 col-lg-2 align-self-center text-center">
            <Image 
              className="img-fluid"
              src={contactFormImageService}
              alt=""
              height={150}
              width={150}
            />
            <h5 className="fs-4">Contact Form</h5>
            <p className="fs-6 text-gray">
              One standard contact form created using Formspree or any other form services.
            </p>
          </div>
          <div className="col-11 col-md-4 col-lg-2 align-self-center text-center">
            <Image 
              className="img-fluid"
              src={seoImageService}
              alt=""
              height={150}
              width={150}
            />
            <h5 className="fs-4">SEO</h5>
            <p className="fs-6 text-gray">
              The standard SEO service to ensure your website is ranked well on Google.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
