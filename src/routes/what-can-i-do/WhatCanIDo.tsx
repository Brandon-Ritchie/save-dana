export default function WhatCanIDo() {
  const h2className = "text-3xl font-bold mt-8 mb-4";
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
    <div className="mx-16 my-8">
      <h1 className="my-8 text-center text-5xl">What Can I Do?</h1>
      <section>
        <h2 className={h2className}>Sign The Petition</h2>
        <p>
          <a className="underline" href="https://chng.it/z6KnYcwDTk">
            Sign the Petition
          </a>{" "}
          and then share the petition on social media!
        </p>
      </section>
      <section>
        <h2 className={h2className}>Spread The Word!</h2>
        <p>
          Do you know any alumni? Particularly <strong>donors</strong> to YSU?
          Make certain they know about this!
        </p>
      </section>
      <section>
        <h2 className={h2className}>Write To The Administration</h2>
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
        <h2 className={h2className}>Write To The Board of Trustees</h2>
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
    </div>
  );
}
