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
            YSU Administration is further cutting the Dana School of Music,
            shuttering the complete Composition program, the MM in Jazz Studies,
            and the BA in Music.
          </Paragraph>
          <Paragraph>
            A significant number of Dana faculty positions have been eliminated,
            and many full-time tenured faculty will soon be replaced with
            adjunct faculty.
          </Paragraph>
          <Paragraph>
            Based on the anticipated drop in student enrollment and retention
            which these cuts will cause, we believe that the Dana School of
            Music will not be able to survive.
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
