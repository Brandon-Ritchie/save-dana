import Card from "@/lib/components/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export default () => {
  return (
    <>
      <h1>Testimonials</h1>
      <section className="p-4">
        <p>
          Below are alumni success stories and statements about the upcoming
          closure of the Dana School of Music.
        </p>
        <p>
          If you are an alumnus of the Dana School of Music and wish to submit
          your own, please email a headshot, statement, degree, graduation year,
          and current employment to{" "}
          <a
            className="underline"
            href="mailto:save.the.dana.school.of.music@gmail.com"
          >
            this email address
          </a>
        </p>
      </section>
      <section>
        {Object.keys(testimonials).map((key, index) => (
          <div className="my-4">
            <Card
              key={key}
              imgConfig={
                testimonials[key].imgSrc
                  ? {
                      side: index % 2 === 0 ? "left" : "right",
                      src: testimonials[key].imgSrc as string,
                      alt: testimonials[key].name,
                    }
                  : undefined
              }
              title={testimonials[key].name}
              description={testimonials[key].description}
              buttonText="Read More"
              buttonLink={`./${key}`}
            />
          </div>
        ))}
      </section>
    </>
  );
};
