import { Link } from "react-router-dom";

export interface CardProps {
  imgConfig?: {
    src: string;
    alt: string;
    side: "left" | "right";
  };
  title: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
}

export default function Card({
  imgConfig,
  title,
  description,
  buttonText,
  buttonLink,
}: CardProps) {
  return (
    <div className="card card-side h-64 bg-base-100 shadow-xl">
      {imgConfig && imgConfig.side === "left" && (
        <CardImage src={imgConfig.src} alt={imgConfig.alt} />
      )}

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-3">{description[0]}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={buttonLink}>
            {buttonText}
          </Link>
        </div>
      </div>

      {imgConfig && imgConfig.side === "right" && (
        <CardImage src={imgConfig.src} alt={imgConfig.alt} />
      )}
    </div>
  );
}

const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="max-w-xs">
    <img className="h-full object-cover" src={src} alt={alt} />
  </figure>
);
