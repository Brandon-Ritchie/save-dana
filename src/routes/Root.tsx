function Root() {
  const paragraphClassName = "my-4";

  return (
    <div className="mx-16 my-8">
      <h1 className="my-8 text-center text-5xl">
        Youngstown State University’s War on Music
      </h1>

      <p className={paragraphClassName}>
        On December 6, 2023, YSU Associate Provost Jennifer Pintar gave a
        presentation to the Board of Trustees on her “Academic Master Plan,”
        which could be considered the latest salvo in the Administration’s War
        on Music. The{" "}
        <a
          className="underline"
          href="https://businessjournaldaily.com/ysu-examines-resource-reallocation-for-programs/"
        >
          Business Journal reported
        </a>{" "}
        on this presentation the following day.
      </p>

      <p className={paragraphClassName}>
        Some of Pintar’s data was verifiably and blatantly false. For example,
        here was her slide regarding Graduate student enrollment at YSU:
      </p>

      <div>
        <span>PLACEHOLDER FOR GRADUATE ENROLLMENT IMAGE</span>
        <img
          className="mx-auto"
          src="https://picsum.photos/1920/1080"
          alt="TODO FIX THIS"
        />
      </div>

      <p className={paragraphClassName}>
        She claimed that there were “less than 5” Graduate students enrolled in
        a Graduate degree in Music Performance at Dana. The administration’s own
        enrollment figures (below) show that at that time there were 21 Graduate
        students enrolled in an MM in Music Performance.
      </p>

      <div>
        <span>PLACEHOLDER FOR PERFORMANCE ENROLLMENT IMAGE</span>
        <img
          className="mx-auto"
          src="https://picsum.photos/1920/1080"
          alt="TODO FIX THIS"
        />
      </div>

      <p className={paragraphClassName}>
        Pintar also subdivided Dana’s Graduate programs by major (i.e., with
        separate line items for Music Performance, Music Theory and Composition,
        and Music Education), whereas she combined majors in most other Graduate
        programs. Dana’s robust MM program with 27 total Graduate students in
        Music should have appeared “in the green,” in her second column from the
        left, and not “in the red” on the far right.
      </p>

      <p className={paragraphClassName}>
        Much of Pintar’s “data” on Dana’s undergraduate programs was imaginary.
        Here is a slide she presented to the Board of Trustees regarding two of
        Dana’s undergraduate programs:
      </p>

      <div className="mb-3">
        <span>PLACEHOLDER FOR PERFORMANCE ENROLLMENT IMAGE</span>
        <img
          className="mx-auto"
          src="https://picsum.photos/1920/1080"
          alt="TODO FIX THIS"
        />
        <span className="text-sm">
          (The typographical error on the bottom right was corrected on the BoT
          page weeks later. This demonstration of Pintar’s own ineptitude at
          Public and Professional Writing could be viewed as a case for the
          incorrect numbers for Graduate enrollment stemming from gross
          incompetence, rather than malicious intent.)
        </span>
      </div>

      <p className={paragraphClassName}>
        While the Administration claims that these analyses are data-driven, its
        hired analytics firm (Gray Associates) was spectacularly ill-equipped to
        scrutinize a music program. To give one example, Music Performance in
        the slide above received a 1% score in “Employment Demand.” When
        questioned in detail about this by Dana faculty at a meeting in 2021,
        Gray Associates’ representative admitted that its numbers were based on
        its findings from general job-search sites, and without having examining
        the highly specific sites (usually protected by a paywall) used by most
        employers in hiring musicians for orchestras, bands, and other salaried
        positions. This Employment Demand number also does not take into account
        the freelance work which makes up nearly all of the paid opportunities
        taken by nearly all professional musicians. All music faculty can recall
        that YSU’s Provost, Brien Smith, even acknowledged this problem at the
        meeting, and that he assured the music faculty that no action would be
        taken based on this flawed data.
      </p>

      <p className={paragraphClassName}>
        YSU shows years of decreased enrollment due to regional and national
        demographics, but enrollment at the Dana School of Music is rising!
        Compare the Fall 2021 enrollment report (below)—taken from when Dana
        enrollment had bottomed out due to the pandemic’s effects on the
        performing arts—to the 2023 report above. In two short years, Dana
        enrollment has risen 10%, from 174 students to 191 students. (Dana’s
        Graduate enrollment is up 63%, from 17 to 27 students!) Yet in that same
        time period, overall YSU student enrollment has declined by nearly 3%,
        from 11,298 to 10,993.
      </p>

      <div>
        <span>PLACEHOLDER FOR NEXT IMAGE</span>
        <img
          className="mx-auto"
          src="https://picsum.photos/1920/1080"
          alt="TODO FIX THIS"
        />
      </div>

      <p className={paragraphClassName}>
        YSU’s War on Music began several years ago, after Dana’s undergraduate
        degree programs in Music History and Music Theory were shut down. The
        Administration promptly “retrenched” (fired) faculty specialists in
        History and Theory, despite the fact that the classes needed in those
        areas were unchanged, since every music student is required to take
        History and Theory! After a lengthy arbitration (informal trial), a
        neutral judge{" "}
        <a
          href="https://www.dropbox.com/scl/fi/iy6m42egj3zbobqxwbs3v/YSU-OEA-arbitration-award.pdf?rlkey=kf8iw74vbjdg0gozhyqw092a5&dl=0"
          className="underline"
        >
          found
        </a>{" "}
        that the Administration had violated the faculty members’ contracts, and
        restored the jobs to those faculty members.
      </p>

      <p className={paragraphClassName}>
        Administration now plans to cut further positions from Dana, retrenching
        some number of additional professors. On January 10, the Administration
        will give a presentation to a special meeting of YSU’s Academic Senate.
        The Associate Provost has already informed the Faculty Union that some
        faculty designated as Music Performance faculty will be retrenched. The
        only question is who, and how many. All signs point to this being part
        of the “Academic Master Plan” to end undergraduate degree programs in
        Music Performance and Music Composition, as well as the entire Graduate
        music program. Cutting these majors and the complete Graduate music
        program will quickly result in the demise of the entire Dana School of
        Music. The only programs that are expected to survive this first cut are
        the BM in Music Education and the BM in Recording. Neither of these
        majors have the numbers to sustain Dana’s large ensembles and other
        essential programs. Without a functional orchestra, band, or choir, Dana
        will quickly enter a death spiral, unable to attract recruits (even in
        Music Education) in sufficient quantities to survive.
      </p>
    </div>
  );
}

export default Root;
