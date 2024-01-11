import Paragraph from "@/lib/components/Paragraph";
import { useLayoutEffect } from "react";

export default function WhatCanIDo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const ulClassName = "mx-3";

  const administration = [
    {
      name: "Provost Brien Smith",
      email: "bnsmith06@ysu.edu",
    },
    {
      name: "Associate Provost Jennifer Pintar",
      email: "japintar@ysu.edu",
    },
    {
      name: "Acting University President Neal McNally",
      email: "npmcnally@ysu.edu",
    },
    {
      name: "Incoming University President Bill Johnson",
      email: "wljohnson02@ysu.edu",
    },
    {
      name: 'Vice President of "Institutional Effectiveness" Mike Sherman',
      email: "msherman02@ysu.edu",
    },
    {
      name: "CCAC Dean Phyllis Paul",
      email: "pmpaul@ysu.edu",
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
          <a className="underline" href="https://chng.it/z6KnYcwDTk">
            Sign the Petition
          </a>{" "}
          and then share the petition on social media!
        </Paragraph>
      </section>
      <section>
        <h2>Join The Next Protest</h2>
        <Paragraph>
          YSU will have a national audience on Friday night, January 12, at 9pm,
          when Men's Basketball plays a game which will be broadcast live on
          ESPN2. Tickets are free for current students with a YSU ID. Go to the
          game, cheer on Dana students in the pep band, and let your voice be
          heard in support of music!
        </Paragraph>
        <Paragraph>
          Please note the official Beeghly Center policy: "Fans are not
          permitted to bring and display banners at Beeghly Center, as they may
          interfere with the game and other guests' enjoyment of the game.
          Youngstown State University reserves the right to remove banners and
          signs. Poles and/or sticks are also prohibited."
        </Paragraph>
        <p>#savedana and #lovemusic</p>
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
          <a
            className="underline"
            href="mailto:save.the.dana.school.of.music@gmail.com"
          >
            Send us a testimonial
          </a>{" "}
          about how the Dana School of Music impacted your life!
        </Paragraph>
      </section>
      <section>
        <h2>Write To The Administration</h2>
        <Paragraph>
          Click on any of the links below to open your email client with that
          individual's email in the "To:" field:
        </Paragraph>
        <ul className={ulClassName}>
          {administration.map((person) => (
            <li key={person.email}>
              <a className="underline" href={`mailto:${person.email}`}>
                {person.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Write To The Board of Trustees</h2>
        <h3>Send an email to the entire Board of Trustees</h3>
        <Paragraph>
          <a
            className="underline"
            href={`mailto:${boardOfTrustees
              .map((trust) => trust.email)
              .join(",")}`}
          >
            Click Here
          </a>{" "}
          to open your email client with all of the Board of Trustees' emails in
          the "To:" field.
        </Paragraph>
        <h3>Send an email to individual members of the Board of Trustees</h3>
        <Paragraph>
          Click on any of the links below to open your email client with that
          individual's email in the "To:" field:
        </Paragraph>
        <ul className={ulClassName}>
          {boardOfTrustees.map((person) => (
            <li key={person.email}>
              <a className="underline" href={`mailto:${person.email}`}>
                {person.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
