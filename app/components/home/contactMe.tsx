import Image from "next/image";
import ContactForm from "./contact-form/contactForm";
import contactImage from "@/public/home/contact-form.svg";

export default function ContactMe() {
  return (
  <section className="home-contact-me d-flex flex-column justify-content-center py-5" id="contact" style={{minHeight: "80dvh"}}>
    <h2 className="display-4 fw-medium text-center"><span className="text-accent-secondary">Contact</span> Me</h2>
    <div className="row justify-content-evenly my-3">
      <div className="col-10 col-md-4">
        <div className="py-5 px-3 p-lg-5 bg-light shadow-lg rounded-3">
          <p className="fs-5 text-center text-primary">Get in contact with us!</p>
          <ContactForm/>
        </div>
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
