interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function Card({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  buttonLink,
}: CardProps) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={buttonLink}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
