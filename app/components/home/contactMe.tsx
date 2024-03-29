import Image from "next/image";
import ContactForm from "./contact-form/contactForm";
import contactImage from "@/public/home/contact-form.svg";

export default function ContactMe() {
  return (
  <section className="home-contact-me container mb-5">
    <h2 className="display-4 fw-medium text-center"><span className="text-accent-secondary">Contact</span> Me</h2>
    <div className="row justify-content-center">
      <div className="col-10 col-md-6 col-lg-4">
        <ContactForm/>
      </div>
      <div className="col-10 col-md-5 col-lg-4 d-flex mt-5 mt-md-0">
        <Image
          className="img-fluid"
          src={contactImage}
          alt="Contact Me Image of an open envelope titled to the right"
          height={450}
          width={450}
        />
      </div>
    </div>

  </section>
  );
}
