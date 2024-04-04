import Image from "next/image";
import content from "./content.json";
import DOMPurify from "isomorphic-dompurify";
import sideImage from "@/public/home/developer.svg";

interface Package {
  title: string;
  description: string;
  imageUrl: string;
}

interface Packages {
  simple: Package;
  wordpress: Package;
  wordpressHeadless: Package;
  pageBuilders: Package;
}

export default function ContractExample() {
  const data = content.home.packages.examples.content;

  return (
    <section className="container d-flex align-items-center" style={{minHeight: "60dvh"}}>
      <div className="row justify-content-center justify-content-lg-start">
        <div className="col-10 col-lg-7">
          <h2 className="fs-1 fw-bold">Starting at <span className="text-accent-primary">$500</span>, No Subscription</h2>
          <p className="fs-5"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.home.packages.examples.exerpt)}}/>
          <div className="row mt-5">
            {Object.keys(data).map((contentTitle) => (
              <div className="col-12 col-md-6 mb-3 " key={contentTitle}>
                <div className="d-flex">
                  <Image 
                    src={data[contentTitle as keyof Packages].imageUrl}
                    width={25}
                    height={25}
                    alt={data[contentTitle as keyof Packages].title + " Logo"}
                  />
                  <h3 className="fs-4 ms-3">{DOMPurify.sanitize(data[contentTitle as keyof Packages].title)}</h3>
                </div>
                <p className="fs-5 text-text-secondary pe-3">{DOMPurify.sanitize(data[contentTitle as keyof Packages].description)}</p>
              </div>
              ))
            }
          </div>
        </div>
        <div className="col-10 col-lg-5">
          <Image
            className="img-fluid"
            src={sideImage}
            alt="A man coding"
          />
        </div>
      </div>
    </section>
  )
}