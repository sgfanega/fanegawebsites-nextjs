import Image from "next/image";
import content from "./content.json";

interface Service {
  title: string;
  content: string;
  imageUrl: string;
}

interface ServicesContent {
  mobileFirstDesign: Service;
  responsive: Service;
  optimized: Service;
}

export default function Services() {
  const servicesContent: ServicesContent = content.home.services.content;

  return (
    <section className="home-services container d-flex flex-column justify-content-center py-5 my-5">
      <h2 className="display-5 fw-medium text-center mb-md-5"><span className="text-accent-secondary">What</span> I Do</h2>
      <div className="row justify-content-evenly justify-content-lg-center">
        {Object.keys(servicesContent).map((serviceTitle) => (
          <div className="col-10 col-md-6 col-lg-4 text-center" key={serviceTitle}>
            <Image 
              src={servicesContent[serviceTitle as keyof ServicesContent].imageUrl} 
              alt={servicesContent[serviceTitle as keyof ServicesContent].title + " Image"}
              width={75}
              height={75}
            />
            <h3 className="fs-3 fw-medium text-text-primary">{servicesContent[serviceTitle as keyof ServicesContent].title}</h3>
            <p className="fs-5 text-text-secondary">{servicesContent[serviceTitle as keyof ServicesContent].content}</p>
          </div>
          ))
        }
      </div>
    </section>
  )
}