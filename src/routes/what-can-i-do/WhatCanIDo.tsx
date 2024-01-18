import AnchorLink from "@/lib/components/AnchorLink";
import Paragraph from "@/lib/components/Paragraph";
import { useLayoutEffect } from "react";

export default function WhatCanIDo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const administration = [
    {
      name: "Interim Provost Jennifer Pintar",
      email: "japintar@ysu.edu",
      phone: "330-941-4628",
    },
    {
      name: "Acting University President Neal McNally",
      email: "npmcnally@ysu.edu",
      phone: "330-941-2719",
    },
    {
      name: "Incoming University President Bill Johnson",
      email: "wljohnson02@ysu.edu",
    },
    {
      name: 'Vice President of "Institutional Effectiveness" Mike Sherman',
      email: "msherman02@ysu.edu",
      phone: "330-941-7281",
    },
    {
      name: "Cliffe College of Creative Arts Dean Phyllis Paul",
      email: "pmpaul@ysu.edu",
      phone: "330-941-3625",
    },
    {
      name: "YSU Foundation President Paul McFadden",
      phone: "330-941-3211",
    },
  ];

  const boardOfTrustees = [
    { name: "Sergul Erzurum", email: "saerzurum@ysu.edu" },
    { name: "Charles George", email: "ctgeorge@ysu.edu" },
    { name: "Anita Hackstedde", email: "ahackstedde@ysu.edu" },
    { name: "Richard Fryda", email: "rcfryda@ysu.edu" },
    { name: "Joseph Kerola", email: "jjkerola@ysu.edu" },
    { name: "Laura Lyden", email: "lalyden@ysu.edu" },
    { name: "Michael Peterson", email: "mapeterson03@ysu.edu" },
    { name: "Allen Ryan", email: "alryan@ysu.edu" },
    { name: "Molly Seals", email: "msseals@ysu.edu" },
    { name: "Jocelyne Linsalata", email: "jklinsalata@ysu.edu" },
    { name: "Eric Spiegel", email: "easpiegel@ysu.edu" },
  ];

  return (
    <>
      <h1>What Can I Do?</h1>
      <section>
        <h2>Sign The Petition</h2>
        <Paragraph>
          <AnchorLink href="https://chng.it/z6KnYcwDTk">
            Sign the Petition
          </AnchorLink>{" "}
          and then share the petition on social media!
        </Paragraph>
      </section>

      <section>
        <h2>Spread The Word!</h2>
        <Paragraph>
          Do you know any alumni? Particularly <strong>donors</strong> to YSU?
          Make certain they know about this!
        </Paragraph>
      </section>

      <section>
        <h2>Send a Testimonial</h2>
        <Paragraph>Are you an alumnus of the Dana School of Music?</Paragraph>
        <Paragraph>
          <AnchorLink href="mailto:save.the.dana.school.of.music@gmail.com">
            Send us a testimonial
          </AnchorLink>{" "}
          about how the Dana School of Music impacted your life!
        </Paragraph>
      </section>

      <section>
        <h2>Write To The Administration</h2>
        <Paragraph>
          Click on any of the links below to open your email client with that
          individual's email in the "To:" field:
        </Paragraph>
        <ListWithMargin>
          {administration.map(
            (person) =>
              person.email && (
                <li key={person.email}>
                  <AnchorLink href={`mailto:${person.email}`}>
                    {person.name}
                  </AnchorLink>
                </li>
              ),
          )}
        </ListWithMargin>
      </section>

      <section>
        <h2>Call the administration</h2>
        <Paragraph>
          Call the administration and tell them how you feel!
        </Paragraph>
        <ListWithMargin>
          {administration.map(
            (person) =>
              person.phone && (
                <li key={person.name}>
                  <span>{person.name} - </span>
                  <AnchorLink href={`tel:${person.phone}`}>
                    {person.phone}
                  </AnchorLink>
                </li>
              ),
          )}
        </ListWithMargin>
      </section>

      <section>
        <h2>Write To The Board of Trustees</h2>
        <h3>Send an email to the entire Board of Trustees</h3>
        <Paragraph>
          <AnchorLink
            href={`mailto:${boardOfTrustees
              .map((trust) => trust.email)
              .join(",")}`}
          >
            Click Here
          </AnchorLink>{" "}
          to open your email client with all of the Board of Trustees' emails in
          the "To:" field.
        </Paragraph>
        <h3>Send an email to individual members of the Board of Trustees</h3>
        <Paragraph>
          Click on any of the links below to open your email client with that
          individual's email in the "To:" field:
        </Paragraph>
        <ListWithMargin>
          {boardOfTrustees.map((person) => (
            <li key={person.name}>
              <AnchorLink href={`mailto:${person.email}`}>
                {person.name}
              </AnchorLink>
            </li>
          ))}
        </ListWithMargin>
      </section>
    </>
  );
}

const ListWithMargin = ({ children }: { children: React.ReactNode }) => (
  <ul className="mx-3">{children}</ul>
);
