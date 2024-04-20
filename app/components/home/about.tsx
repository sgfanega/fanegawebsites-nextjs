import content from "./content.json";
import DOMPurify from "isomorphic-dompurify";

export default function About() {
  return (
    <section className="home-about container d-flex justify-content-center align-items-center py-5 my-5">
      <div className="col-10 col-md-10 col-lg-8">
        <h2 className="display-6 fw-bold text-primary">
          A Web <span className="text-accent-primary">Design</span> and <span className="text-accent-secondary">Development</span> Company
        </h2>
        <p className="fs-5 text-primary" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.home.about.content)}}/>
      </div>
    </section>
  )  
}