import Image from "next/image";
import introImage from "@/public/services/services-img-intro.svg";
import hostingImage from "@/public/services/services-img-hosting.svg";
import seoImage from "@/public/services/services-img-seo.svg";

export default function Services() {
  return (
    <main className="services container my-5">
      <h1 className="display-1 fw-medium text-center">Services</h1>
      <section>
        <div className="row justify-content-evenly py-5 introduction">
          <div className="col-11 col-md-6 align-self-center">
            <h2 className="display-6 fw-medium">Web Development Made Easier</h2>
            <p className="fs-5 text-text-secondary">As a Web Developer, I strive to create websites that my clients love. Not only through the design of the website, but the service we provide.
              My job is to make sure you have as much control as I do when developing your websites. I have my own biases towards certain types of frameworks
              and tools, but in the end, my goal is to create a website that we are both proud of.
            </p>
          </div>
          <div className="col-11 col-md-6">
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
          <div className="col-11 col-md-6 order-2 order-md-1">
            <Image
              className="img-fluid"
              src={hostingImage}
              alt=""
              height={500}
              width={500}
            />
          </div>
          <div className="col-11 col-md-6 align-self-center order-1 order-md-2">
            <h2 className="display-6 fw-medium">Hosting</h2>
            <p className="fs-5 text-text-secondary">
              When it comes to hosting, there are many options that we can use. I use Cloudflare for static websites, and Bluehost for WordPress websites, but if you already have a hosting provider, I
              am more than happy to use the service you already have. <br/> <br/>
              There is <span className="text-accent-secondary fw-bold">no extra fee</span> for configuring your website to your hosting provider, the only cost will be your domain registry and hosting cost. 
              <br/><br/>
              Most static websites have <span className="text-accent-secondary fw-bold">no hosting fee</span> cost due to Cloudflare&apos;s free hosting tier.
            </p>
          </div>
        </div>
        <div className="row justify-content-evenly my-5 py-5 seo">
          <div className="col-11 col-md-6">
          <h2 className="display-6 fw-medium">SEO Optimization</h2>
            <p className="fs-5 text-text-secondary">
              SEO plays a vital role in ensuring your website achieves favorable rankings on Google&apos;s search results. However, it&apos;s important to maintain a realistic perspective; anyone claiming they can guarantee your website&apos;s placement on 
              Google&apos;s front page is likely making <span className="text-accent-secondary fw-bold">exaggerated claims</span>.
              <br/><br/>
              While SEO offers numerous benefits for websites, achieving first-page rankings on Google typically requires more than organic optimization efforts. Without advertising on Google, new websites may struggle to secure top positions 
              unless users specifically search for their domain.
              <br/><br/>
              My services focus on maximizing SEO optimization to enhance your website&apos;s visibility on Google&apos;s search engine. I adhere to fundamental SEO principles, including:
              <ul>
                <li>Implementing HTML semantics effectively.</li>
                <li>Creating high-quality content enriched with relevant keywords.</li>
                <li>Optimizing loading speed for improved user experience.</li>
                <li>Ensuring page responsiveness across various screen sizes.</li>
              </ul>
            </p>
          </div>
          <div className="col-11 col-md-6">
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
      <section>
        <div className="row">
          <h2>What will your website contain?</h2>
          <div className="col-11 col-md-6">

          </div>
        </div>
      </section>
    </main>
  );
}
