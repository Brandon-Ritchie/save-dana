import Card from "@/lib/components/Card";
import { Link } from "react-router-dom";
import cancelled from "@/assets/images/cancelled.jpg";
import Paragraph from "@/lib/components/Paragraph";

export default function Root() {
  return (
    <>
      <h1>Save the Dana School of Music</h1>
      <section className="mx-auto my-8 lg:w-3/4">
        <Card>
          <h2>What is happening?</h2>
          <Paragraph>
            On December 6, YSU Admin presented to the Board of Trustees their
            plans to cut Dana’s undergraduate degrees in Music Performance,
            Music Composition, and the complete graduate program.
          </Paragraph>
          <Paragraph>
            On January 7, following an uproar from the community, YSU altered
            its plans, announcing that it would instead cut programs in Music
            Composition and Jazz Studies, as well as the BA in Music.
          </Paragraph>
          <Paragraph>
            On January 10, YSU Admin presented these cuts to a special meeting
            of the Academic Senate, as a contractual requirement to be able to
            fire faculty in those areas.
          </Paragraph>
          <Paragraph>
            On January 12, YSU Admin sent out two new documents to Dana faculty,
            preparing to eliminate their positions.
          </Paragraph>
          <Paragraph>
            By January 31, an unknown number of Dana faculty will have been
            fired without cause.
          </Paragraph>
          <Paragraph>
            The Dana School of Music will not be able to continue to exist with
            these cuts.
          </Paragraph>
          <Link to="/war-on-music" className="btn btn-primary text-white">
            Learn more
          </Link>
        </Card>
      </section>
      <section className="mx-auto my-8 flex flex-col-reverse justify-center lg:flex-row">
        <div>
          <h2>What Can I Do To Help?</h2>
          <Paragraph>
            <Link to="/what-can-i-do" className="underline">
              Click here
            </Link>{" "}
            to learn about the many ways you can help save the Dana School of
            Music.
          </Paragraph>
          <Paragraph>
            <Link to="/testimonials" className="underline">
              Click here
            </Link>{" "}
            to read testimonials from Dana School of Music alumni.
          </Paragraph>
        </div>
        <img src={cancelled} alt="Cancelled" className="lg:ml-8 lg:w-1/2" />
      </section>
    </>
  );
}
