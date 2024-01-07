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
    <div className="card bg-base-100 shadow-xl lg:card-side lg:h-64">
      {imgConfig && (imgConfig.side === "left" || window.innerWidth < 1024) && (
        <CardImage src={imgConfig.src} alt={imgConfig.alt} />
      )}

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-3">{description[0]}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary text-white" to={buttonLink}>
            {buttonText}
          </Link>
        </div>
      </div>

      {imgConfig && imgConfig.side === "right" && window.innerWidth > 1024 && (
        <CardImage src={imgConfig.src} alt={imgConfig.alt} />
      )}
    </div>
  );
}

const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="max-h-64 max-w-full lg:max-h-full lg:max-w-xs">
    <img className="h-full w-full object-cover" src={src} alt={alt} />
  </figure>
);
