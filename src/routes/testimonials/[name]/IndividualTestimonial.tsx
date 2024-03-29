import Card from "@/lib/components/Card";
import Paragraph from "@/lib/components/Paragraph";
import { testimonials } from "@/lib/data/testimonials";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { name } = useParams();

  if (!name)
    return (
      <>
        <h1>There was an error finding that testimonial!</h1>
      </>
    );

  const testimonial = testimonials[name];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="mt-4 gap-20 lg:grid lg:grid-cols-3">
      <aside className="lg:col-span-1">
        <div className="flex w-full justify-center">
          <Card>
            {testimonial.imgSrc && (
              <img
                className="mx-auto w-96"
                src={testimonial.imgSrc}
                alt={testimonial.name}
              />
            )}

            <h1>{testimonial.name}</h1>

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
        </div>
      </aside>
      <section className="my-4 flex flex-col justify-center lg:col-span-2">
        {testimonial.description.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </section>
    </div>
  );
};
