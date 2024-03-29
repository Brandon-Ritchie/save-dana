import AnchorLink from "@/lib/components/AnchorLink";
import Paragraph from "@/lib/components/Paragraph";
import TestimonialCard from "@/lib/components/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import { useLayoutEffect } from "react";

export default () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <h1>Testimonials</h1>
      <section className="lg:p-4">
        <Paragraph>
          Below are alumni success stories and statements about the upcoming
          closure of the Dana School of Music.
        </Paragraph>
        <Paragraph>
          If you are an alumnus of the Dana School of Music and wish to submit
          your own, please email a headshot, statement, degree, graduation year,
          and current employment to{" "}
          <AnchorLink href="mailto:save.the.dana.school.of.music@gmail.com">
            save.the.dana.school.of.music@gmail.com
          </AnchorLink>
        </Paragraph>
      </section>
      <section>
        {Object.keys(testimonials).map((key, index) => (
          <div className="my-4">
            <TestimonialCard
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
