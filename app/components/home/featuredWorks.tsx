import Card from "./featured-works/card";
import content from "./content.json";

interface FeaturedWork {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

interface FeaturedWorks {
  futureConnect: FeaturedWork;
  leePorterFitness: FeaturedWork;
  deanllc: FeaturedWork;
  talaTherapy: FeaturedWork;
}

export default function FeaturedWorks() {
  const data = content.home.featuredWorks.content;

  return (
    <section className="home-featured-works my-5 mt-lg-0" style={{minHeight: "50dvh"}}>
      <h2 className="display-5 fw-medium text-center mb-lg-5"><span className="text-accent-secondary">Featured</span> Works</h2>
      <div className="container d-flex flex-column flex-md-row flex-wrap justify-content-evenly justify-content-lg-between align-items-center">
      {Object.keys(data).map((featuredWorkTitle) => (
        <Card 
        title={data[featuredWorkTitle as keyof FeaturedWorks].title}
        description={data[featuredWorkTitle as keyof FeaturedWorks].description}
        imageUrl={data[featuredWorkTitle as keyof FeaturedWorks].imageUrl}
        url={data[featuredWorkTitle as keyof FeaturedWorks].url}
        key={featuredWorkTitle}
        />
        ))
      }
      </div>
    </section>
  )
}