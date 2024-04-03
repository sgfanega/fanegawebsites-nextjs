import { Metadata } from "next";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import content from "./content.json";

export const metadata: Metadata = {
  title: 'About'
}

export default function Page() {
  const data = content.about.content;

  return (
    <main className="about my-5" style={{minHeight: "60dvh"}}>
      <h1 className="display-1 fw-bold text-center"><span className="text-accent-secondary">About</span> Me</h1>
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-11 col-lg-6">
            <div className="border-start border-accent-secondary border-10">
              <p className="fs-5 fw-medium text-decoration-none ps-3" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description)}}/>
            </div>
          </div>
          <div className="col-11 col-lg-6">
            <Image
              className="img-fluid"
              src={data.imageUrl}
              alt="About Us Image of a work table with individuals around it"
              height={500}
              width={700}
              unoptimized
            />
          </div>
        </div>
      </section>
      <section className="container about-profile my-5">
        <div className="row justify-content-evenly g-5 g-md-0">
          <div className="col-11 col-md-5 col-lg-4 text-center">
            <h2 className="display-6 fw-medium"><span className="text-accent-secondary">Meet</span> the Founder</h2>
            <Image 
              className="img-fluid rounded-circle"
              src={data.profilePictureUrl}
              alt=""
              height={250}
              width={250}
            />
          </div>
          <div className="col-11 col-md-7 col-lg-8 align-self-center">
            <h3 className="fs-2 text-accent-secondary mb-0" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.name)}}/>
            <em dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.title)}}/>
            <p className="fs-5" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.background)}}/>
          </div>
        </div>
      </section>
    </main>
  )
}