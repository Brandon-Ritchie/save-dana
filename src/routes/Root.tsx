import Card from "@/lib/components/Card";
import { Link } from "react-router-dom";
import cancelled from "@/assets/cancelled.jpg";

export default function Root() {
  return (
    <>
      <h1>Save the Dana School of Music</h1>
      <section className="mx-auto my-8 flex flex-col-reverse justify-center lg:flex-row">
        <Card>
          <h2>What is happening?</h2>
          <p>
            On Dec. 6, YSU Admin presented to the Board of Trustees their plans
            to cut Dana’s undergraduate degrees in Music Performance, Music
            Composition, and the complete graduate program.
          </p>
          <p>
            On Jan. 10, YSU Admin will present these cuts to a special meeting
            of the Academic Senate, as a contractual requirement to be able to
            fire faculty in those areas.
          </p>
          <p>
            By Jan. 31, an unknown number of Dana faculty will have been fired
            without cause.
          </p>
          <Link to="/war-on-music" className="btn btn-primary mt-8 text-white">
            Learn more
          </Link>
        </Card>
        <img src={cancelled} alt="Cancelled" className="lg:ml-8 lg:w-1/2" />
      </section>
      <section className="mx-auto my-8">
        <h2>What Can I Do To Help?</h2>
        <p>
          <Link to="/what-can-i-do" className="underline">
            Click here
          </Link>{" "}
          to learn about the many ways you can help save the Dana School of
          Music.
        </p>
        <p className="mt-2">
          <Link to="/testimonials" className="underline">
            Click here
          </Link>{" "}
          to read testimonials from Dana School of Music alumni.
        </p>
      </section>
    </>
  );
}
