import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function Card({ title, description, imageUrl, url} : CardProps) {
  return (
    <div className="card mx-2 my-3 mb-lg-5 mt-lg-0 border-2 border-accent-secondary" style={{width: "20rem" }}>
      <Image 
        src={imageUrl}
        // style={{borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}
        className="card-img-top border-bottom-2 border-accent-secondary" 
        alt={title + " Website Image"}
        width={100}
        height={150}
        unoptimized
        />
      <div className="card-body">
        <h5 className="card-title text-text-primary">{title}</h5>
        <p className="card-text text-text-secondary">{description}</p>
        <a href={url} className="text-decoration-none text-accent-secondary">See Website</a>
      </div>
    </div>
  )
}