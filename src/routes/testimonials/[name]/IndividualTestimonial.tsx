import Card from "@/lib/components/Card";
import { testimonials } from "@/lib/data/testimonials";
import { useParams } from "react-router-dom";

export default () => {
  const { name } = useParams();

  if (!name)
    return (
      <>
        <h1>There was an error finding that testimonial</h1>
      </>
    );

  const testimonial = testimonials[name];

  return (
    <div className="gap-4 lg:grid lg:grid-cols-3">
      <aside className="lg:col-span-1">
        <Card>
          {testimonial.imgSrc && (
            <img
              className="w-96"
              src={testimonial.imgSrc}
              alt={testimonial.name}
            />
          )}

          <h1 className="text-4xl">{testimonial.name}</h1>

          {testimonial.credentials && (
            <>
              {testimonial.credentials.jobTitle && (
                <p className="text-2xl">{testimonial.credentials.jobTitle}</p>
              )}
              {testimonial.credentials.degree && (
                <p className="text-xl">{testimonial.credentials.degree}</p>
              )}
              {testimonial.credentials.year && (
                <p className="text-xl">
                  Class of {testimonial.credentials.year}
                </p>
              )}
            </>
          )}
        </Card>
      </aside>
      <section className="my-4 flex flex-col justify-center lg:col-span-2">
        {testimonial.description.map((paragraph) => (
          <p className="mb-2">{paragraph}</p>
        ))}
      </section>
    </div>
  );
};
