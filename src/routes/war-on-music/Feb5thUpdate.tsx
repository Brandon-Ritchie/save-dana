import AnchorLink from "@/lib/components/AnchorLink";
import Paragraph from "@/lib/components/Paragraph";
import Quote from "@/lib/components/Quote";

export default function Feb5thUpdate() {
  return (
    <section>
      <h2>Update - February 5th, 2024, 9:00am EST</h2>
      <Paragraph>
        The original deadline (January 31) for the Administration to notify
        faculty about their status has passed, but the date has been extended to
        February 21. For once, this is not the result of administrative
        malevolence; several faculty members had requested more time to speak
        with lawyers, financial advisers, etc., and this was granted.
      </Paragraph>
      <Paragraph>
        A number of Dana students spoke at the Student Government Association
        meeting last week. President Bill Johnson was in attendance, and he
        dodged and deflected student attempts to engage him with regard to the
        situation at Dana. He then left the meeting before any Dana students
        were allowed to give their (one-minute) speeches. A minimum of five Dana
        faculty have reached out politely to Johnson in the past several weeks
        in the spirit of the open conversation he claims to desire, and none
        have received any response. Should you wish to contact Johnson, his
        personal email is{" "}
        <AnchorLink href="mailto:billjohnson7623@gmail.com">
          billjohnson7623@gmail.com
        </AnchorLink>
        .
      </Paragraph>
      <Paragraph>
        The following day, Interim Provost Dr. Jennifer Pintar braved questions
        at a Dana faculty meeting. Alternately combative and weepy, Dr. Pintar
        expanded very little on her January 10 Academic Senate presentation.
        Faculty described her slights, for which she later seemed genuinely
        apologetic (such as majoring in music being "fun stuff"), but most
        seemed to regard her tears as even more offensive. To paraphrase what
        seemed to many to be the most memorable part of the conversation:
      </Paragraph>
      <Quote>
        <p>
          Pintar [weeping]: Doing this to you is just so hard for{" "}
          <strong>me</strong>.
        </p>
        <p>
          Faculty: You don't have to do it then. You could talk to the
          President, and the Board, and let them know that there have been a
          number of errors in your process, and we could take a year and work{" "}
          <strong>together</strong> to solve these problems.
        </p>
        <p>Pintar [dry-eyed]: Nope, I'm not going to do that.</p>
      </Quote>
    </section>
  );
}
