import Card from "@/lib/components/Card";
import Paragraph from "@/lib/components/Paragraph";

export default function Root() {
  return (
    <>
      <h1>Save the Dana School of Music</h1>
      <section className="mx-auto my-8 lg:w-3/4">
        <Card>
          <h2>What is happening?</h2>
          <Paragraph>
            The decisions and outcomes at YSU this semester have weighed heavily
            on the Dana School of Music. We have so much love and respect for
            our colleagues who will not be returning next year.
          </Paragraph>
          <Paragraph>
            Throughout this situation, the community and alumni support has been
            strong and inspiring. It has underscored the need for the arts and
            arts education in our region and beyond, and the deep dedication and
            love for those who have been touched by the Dana School of Music. We
            are all very grateful for this support.
          </Paragraph>
          <Paragraph>
            The twelve returning full-time Dana faculty, along with our adjunct
            faculty, have the expertise, innovative spirit, and flexibility to
            continue to make this a successful program for our students. We will
            continue to offer three rigorous and innovative undergraduate
            degrees (B.M. in Music Education, Performance, and Audio + Music
            Production) and two graduate degrees (M.M. in Music Education and
            Performance).
          </Paragraph>
          <Paragraph>
            As the Dana School of Music begins its next chapter, please remain
            confident that we will be able to continue serving you, our
            community, and most importantly, our students, well into the future.
          </Paragraph>
          <Paragraph>
            With gratitude,
            <br />
            <span className="font-bold">Dana Full-time Faculty and Staff</span>
            <br />
            Joe Carucci
            <br />
            Kent Engelhardt
            <br />
            Kate Ferguson
            <br />
            François Fowler
            <br />
            Bryan Helsel
            <br />
            Daniel Keown
            <br />
            Christopher Krummel
            <br />
            Paul Louth
            <br />
            Andrew Mitchell
            <br />
            Dave Morgan
            <br />
            Caroline Oltmanns
            <br />
            Stephanie Pavlovich
            <br />
            Glenn Schaft
            <br />
            Alice Wang
          </Paragraph>
        </Card>
      </section>
    </>
  );
}
