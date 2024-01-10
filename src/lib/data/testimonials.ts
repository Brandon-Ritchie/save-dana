import anthonyTaddeo from "@/assets/testimonial-images/anthony-taddeo.jpg";
import jaredPeters from "@/assets/testimonial-images/jared-peters.jpg";
import brittanyBaglia from "@/assets/testimonial-images/brittany-baglia.jpg";
import jamesVasconi from "@/assets/testimonial-images/james-vasconi.jpeg";
import stephenWest from "@/assets/testimonial-images/stephen-west.jpeg";
import seanBaran from "@/assets/testimonial-images/sean-baran.jpg";
import emileeRogers from "@/assets/testimonial-images/emilee-rogers.jpeg";
import bryanKennard from "@/assets/testimonial-images/bryan-kennard.png";
import jordanGrantonic from "@/assets/testimonial-images/jordan-grantonic.png";
import jasonVolovar from "@/assets/testimonial-images/jason-volovar.jpg";
import francescaMolinaroHeath from "@/assets/testimonial-images/francesca-molinaro-heath.jpg";
import herbieHunkele from "@/assets/testimonial-images/herbie-hunkele.jpeg";
import stephenPhilipHarvey from "@/assets/testimonial-images/stephen-philip-harvey.jpeg";
import brendanMcEvoy from "@/assets/testimonial-images/brendan-mcevoy.png";
import michaelBarkett from "@/assets/testimonial-images/michael-barkett.jpeg";
import ericFinkelstein from "@/assets/testimonial-images/eric-finkelstein.jpg";
import billKirkwood from "@/assets/testimonial-images/bill-kirkwood.png";
import ejDonkin from "@/assets/testimonial-images/ej-donkin.jpg";
import laurieSampsel from "@/assets/testimonial-images/laurie-sampsel.webp";
import jadenKarr from "@/assets/testimonial-images/jaden-karr.jpg";
import carrieAnnRoddewigGary from "@/assets/testimonial-images/carrie-ann-roddewig-gary.png";
import ianKinnaman from "@/assets/testimonial-images/ian-kinnaman.jpg";
import trumanLittler from "@/assets/testimonial-images/truman-littler.jpg";
import andrewMorro from "@/assets/testimonial-images/andrew-morro.jpg";
import georgeWallaceMiklas from "@/assets/testimonial-images/george-wallace-miklas.png";
import amandaBeagleBossio from "@/assets/testimonial-images/amanda-beagle-bossio.jpg";
import brendanGage from "@/assets/testimonial-images/brendan-gage.jpg";

interface Testimonial {
  imgSrc?: string;
  name: string;
  description: string[];
  credentials?: Credentials;
}

interface Credentials {
  degree?: string;
  year?: string;
  jobTitle?: string;
}

export const testimonials: { [p: string]: Testimonial } = {
  "brendan-gage": {
    name: "Brendan Gage",
    description: [
      `As the son of Dr. Stephen Gage, who taught at the Dana School of Music for nearly thirty years, my experience with the school began much earlier in life than the fall of my freshman year in 2016. From my very early childhood I have memories of listening to the YSU Wind Ensemble in Stambaugh Auditorium, visiting campus, and meeting many of the students embarking on the journey that is music school. Each of them had different reasons for being there, but all had come to the conclusion that Youngstown was the place that could meet their needs and assist them in reaching their goals. Every single one of them helped to inspire me and countless others to go into music as well. What YSU’s administration plans to do to Dana would make that no longer true for many past, present, and future musicians.`,
      `Every individual program in a music school attracts talented musicians that make the whole school a better place. Some of my very close friends while in school were composition majors, a program being specifically targeted for “sunsetting” at the current time. They did far more than just composing while in school however, participating in social events, group classroom work, and performing ensembles. In every situation their unique perspective and skills brought value to the experience, and many were among the strongest students and performers in their respective groups. Having composers at YSU allowed my brass quintet to perform originally composed works of music, which can be challenging as you have no prior recordings to reference for musical interpretation. This is an extremely valuable experience for any musician seeking to enter the field as a performer, and would be impossible without those whose primary focus is composition. The same can be said about the jazz program; coming into school my primary focus had been as a classical musician, but being surrounded by students who were incredibly passionate about jazz allowed me to broaden my horizons and become a much more versatile player. This directly led to a significant amount of work for me in commercial music styles since graduating. The programs being targeted by the university at this time are considered standard and essential parts of any healthy music school, as one can see very easily examining any top tier musical institution in the nation.`,
      `The stature and breadth of offerings of the Dana School of Music have also attracted world-class visiting artists over the years. Numerous composers, performers, and educators have visited the school to share knowledge and experience with its current students, some of which I was fortunate enough to be present for. This is largely possible because of the reputation of Dana as a high-quality and full-offering musical institution. Richard King, Lorna McGhee, Allen Vizzutti, Carter Pann, Frank Ticheli, Chad Lefkowitz-Brown, Sean Jones, Derek Dixie, and so many more are nationally and globally recognized artists that might not have been interested in visiting YSU at all if Dana were not meeting what is simply the standard for music schools in this country. Among these visiting artists are a multitude of alumni who have seen great success since graduating, proving that concern over “marketability” is foolish and unnecessary.`,
      `Lastly, I want to touch on the Dana School of Music’s influence on the world around it. So far I’ve talked largely about about the experience of those in the school, but it ultimately exists to serve the rest of the community around and even the country. Last spring my family put on a concert to honor the legacy of my dad’s time at Dana; we had nearly one hundred participants that were all Dana alumni from his tenure, and well over one thousand audience members who came to experience music in the tradition that had been built up by him over almost thirty years. Those alumni are a mixture of performers, educators, and composers, with music being the primary career of most all of them. The audience members were people from the community that have personally felt the impact created by Dana and the people in it, and would hate to see it harmed. Visit any school system in the Mahoning Valley and you’ll nearly always find a music educator that is a product of YSU and the Dana School of Music. Even many of the music teachers in the area from before my dad’s time are YSU alumni, proving that the school’s success and influence is time-tested. A recording of Eric Whitacre’s “October” by the YSU Wind Ensemble in 2008 has more than ONE MILLION listens on Spotify, an otherworldly feat for a music school that doesn’t have the name recognition of a Juilliard, Curtis, or Rice. None of these achievements would’ve been possible without every single student and faculty member involved, across all programs of the music school.`,
      `What my father always set out to accomplish was in a way quite simple: teach people to love music. He and his colleagues at the Dana School of Music have done this in droves over many years of hard work, the fruits of which are readily visible all across the nation. Dana has produced musicians of all varieties that have been incredibly successful in their areas, proving that the school needs nourishment and support for growth rather than cuts and reductions in offerings. To all who have the influence to do so, I ask you to Save Dana, and to #LoveMusic.`,
      `Brendan Gage`,
      `B.M. in Horn Performance, class of 2020`,
    ],
    credentials: {
      degree: "B.M. in Horn Performance",
      year: "2020",
    },
    imgSrc: brendanGage,
  },
  "anthony-taddeo": {
    name: "Anthony Taddeo",
    description: [
      "The Graduate Jazz program at Dana School of Music changed my career forever. In 2018 after being a professional sideman for over a decade I realized that I had hit a wall in some areas of my musicianship and that to get where I needed to go in my career I needed to, not only better myself in those areas, but also further my higher education. I talked with a dear friend and mentor, Dr. Dave Morgan, and he invited me to come visit Dana School of Music. My very first visit I was welcomed warmly and made to feel like this place would be the perfect environment to push myself, meet new peers, and have a dynamic learning experience. Not only did the Dana School of Music provide all of those things, but the mentorship of the teachers helped me to create a project (Alla Boara) that has now become the driving force behind my entire career. I can definitively say that because of this program and the mentorship I received from professors, my career and life have changed for the better. I am eternally grateful for this opportunity and transformative experience. I believe that it is imperative that this school and these programs continue to be supported so that student’s lives and futures can continue to be positively influenced by one of the main things that makes us human, the ability to express ourselves through the arts.",
    ],
    imgSrc: anthonyTaddeo,
    credentials: {
      jobTitle: "Alla Boara",
      degree: "M.M. in Jazz Composition",
      year: "2020",
    },
  },
  "jason-volovar": {
    name: "Jason Volovar",
    description: [
      `My name is Jason Volovar and I am the Music director for St. Joseph’s Parish in Austintown, and the organist for St. Mark’s Victory Lutheran church in Boardman. I am also the keyboard player for two local bands, 3ThreeYo and AC and the Heat. Plus I teach over 15 kids piano lessons and sing with the St.
        Columba Cathedral choir, Stambaugh chorus and Men of Independence barbershop chorus. Last but not
        least, accompany various schools in the area.
        The Dana school of music has been a monumental part of my life for the past 12 years! Without Dr.
        Caroline Oltmanns, the head of the piano department, I would not be the musician I am today, as well as
        the rest of the magnificent faculty who worked so hard with me in every class I took in my 7 years of
        going to school at Dana. Dana helped me go from being a average piano player coming in as a freshman,
        to becoming a professional musician who is whole livelihood is revolved around music! Every day I get
        to experience something different! A variety that I am grateful for everyday!`,
      `Everyone who has went through the Dana school of Music and graduated has received a positive impact
        from the institution. If you close down Dana, you lose the entire music foundation to the area.
        There will be no more future band and choir directors that teach in the public schools in the area. More
        than 30 music directors in the public schools in the valley are Dana school of music grads. These school
        districts include to name a few.`,
      `- Springfield Local – 5 teachers`,
      `- Poland Schools – 3 teachers`,
      `- Lowellville Schools – 4 teachers`,
      `- Struthers schools – 3 teachers`,
      `- Austintown schools – 6 teachers`,
      `- lBoardman Schools – 6 teachers`,
      `- Canfield schools – 5 teachers`,
      `- Warren G Harding – 4 teachers`,
      `- Kennedy Catholic – 2 teachers`,
      `- Cardinal Mooney – 2 teachers`,
      `- Ursuline – 2 teachers`,
      `- Beaver Local – 3 teachers`,
      `- McDonald – 3 teachers`,
      `Dana school of music grads encompass many parishes in the area that are music directors. Churches
      include some of the following.`,
      `- Boardman United Methodist church`,
      `- Trinity United Methodist church`,
      `- St. Joseph’s Parish in Austintown`,
      `- Immaculate Heart of Mary`,
      `- Westminster Presbyterian in Boardman`,
      `- First Christian church in North Lima`,
      `St. Brendan’s Catholic church in Youngstown`,
      `- The Basilica of Mount Carmel`,
      `- St. Columba Cathedral`,
      `- St. Patrick’s in Hubbard`,
      `- St. Patrick’s in Youngstown`,
      `- Lord of Life Lutheran`,
      `- Cornersburg Baptist church`,
      `- Vienna Methodist church`,
      `- Coalburg United Methodist church`,
      `- St. Luke’s in Boardman`,
      `- Holy Family church in Poland`,
      `- St. Dominic’s`,
      `Many of the local bands in the area are majority, if not all, Dana school of Music grads or current
    students.`,
      `- 3ThreeYo`,
      `- AC and the Heat`,
      `- No Funk No Justice`,
      `- RDNA`,
      `- Here Comes Tuesday`,
      `- The House Band`,
      `- Acoustics`,
      `- Piano Maniacs`,
      `- Black Wolf and the Thief`,
      `- The First Class Big Band`,
      `- Danjo Jazz Orchestra`,
      `- Youngstown Area Community Concert Band`,
      `So in conclusion, if you take away the Dana school of Music, you not only take away a major part of the
    entertainment for the area, but you also take away music ministries for our beloved parishes and affect
    our youth in the schools. Youngstown is not an area that attracts people from outside too often. So for
    more than 150 years, the Dana School of Music has produced more than 100,000 musicians who have
    developed successful careers. Dana provides a rich education that is very affordable compared to other
    conservatories around the country. Many of us including myself would not have been able to afford
    going to music school if it wasn’t for Dana.`,
      `The fact that this is in a major discussion of shutting down is appalling and heartbreaking! The music
    community will be destroyed in Youngstown and instead of the area building back up, it will go down.
    Music is a huge part of everyone’s life regardless if it is your calling or if you play an instrument. Music
    is an outlet that save millions of children, teens, and adults every year. It is therapy, a way to let loose
    and increases brain function, not to mention, brings communities together worldwide. Music also
    enhances other subjects in schools. So please do not close down the Dana school of Music, a system
    that has had a positive impact on the Youngstown Area for more than 150 years. Dana is still receiving
    accolades for all of their faculty and student body, bringing much needed recognition to the university
    as a whole. If schools like Oberlin, Mount Union, Grove City, Stubenville College, Slippery and others
    who are half the size of Dana are not being threatened to close, why should Dana that way.`,
      `Jason Volovar`,
      `Graduating class of 2016 and 2018`,
      `Bachelor’s and Master’s in Piano Performance`,
      `Music Director at St. Joseph’s Parish`,
    ],
    credentials: {
      jobTitle: "Music Director at St. Joseph’s Parish",
      degree: "Bachelor’s and Master’s in Piano Performance",
      year: "2016 and 2018",
    },
    imgSrc: jasonVolovar,
  },
  "jordan-grantonic": {
    name: "Jordan Grantonic",
    description: [
      "My name is Jordan Grantonic, I was born in Youngstown, OH and I am a 2019 graduate of YSU’s Dana School of Music with my B.M. in violin performance. When I started at YSU, I was an English major with a full athletic scholarship for track and cross country and only decided to take an audition at Dana so I could continue to take lessons and play in the orchestra as a music minor. Shortly after the start of my first semester, I suffered a series of running-related injuries that effectively took me out of competition and training for much of my first two years at YSU. With a lot of new free time in my schedule, I started spending most of it in the practice rooms at Bliss Hall, rediscovering my love and passion for music alongside some of the most caring, talented, and dedicated teachers I have ever met. My sophomore year, I decided to leave athletics and changed my major to music performance and never once looked back.",
      "I was a late bloomer compared to most other violinists at the collegiate level, and would have surely been left behind had I chosen to attend any university other than YSU. At other, larger schools, a student with my abilities as a freshman would have been placed in the lowest level orchestra (if allowed in any ensembles at all), and would have been relegated to half hour lessons with graduate students. Dr. Joseph Kromholz, Dr. Stephen Gage, Dr. Kivie Cahn-Lipman, Mr. Michael Strauss, Dr. Cecilia Yudha, Dr. Jena Root, Dr. Randall Goldberg, Dr. Dave Morgan, Dr. Kent Engelhardt, Dr. Ewelina Boczkowska, Dr. John Umble, and Dr. Steven Reale are just a few of the professors at the Dana School of Music who recognized my potential and refused to let me fall through the cracks.",
      "This past spring, I graduated from the University of Colorado Boulder with my masters degree in violin performance and am currently pursuing an Artist Diploma, also at CU Boulder. In addition to regularly performing with several professional ensembles in Colorado and actively taking auditions for others, I am a Teaching Artist with El Sistema Colorado, an after-school music program for historically marginalized youth ages 5-18 that provides instruments, chamber and orchestra ensemble opportunities, and private lessons completely free of charge. I also teach outreach string sectionals in local public schools and teach private lessons and coach chamber groups through the Parlando School for Musical Arts, and teach private violin and viola lessons to students in underserved communities in Denver through Musical Mentors Collaborative. Additionally, I freelance around the Denver/Boulder area and perform in private event gigs for several contractors throughout the year, as well as contract many of my own.",
      "The analytics firm used by the university to determine its programs’ “marketability” solely drew information from free online job boards such as Indeed and Glassdoor. Not a single one of the positions I currently hold or have held in the past, nor auditions I have taken, were ever posted on sites like these. We find employment through orchestra audition announcements, arts administration job websites, other independent job boards that are often behind paywalls, and word of mouth/recommendations. This still does not account for the wide variety of freelance work many musicians regularly engage in, or for any independently founded organizations. The data used to prove the College of Music’s so-called lack of marketability clearly did not consider a single one of these possibilities in their research and,",
      "judging by the way this study was conducted, it is clear (and concerning) that YSU knows nothing about the inner workings of the music industry and is wholly unfit to make any decisions regarding Dana’s ability to prepare its students for it.",
      "The Dana School of Music has been one of the most important cultural institutions in Mahoning County for over 150 years and has been the catalyst for nearly all musical activity in Youngstown since its inception. Take a look at any arts organization in Youngstown and you will find that a majority of its musicians, performers, audio engineers and administration received their education from the Dana School of Music at YSU and decided to stick around to continue to use their talents to help the city flourish. In destroying the school of music, you consequently destroy nearly all musical activity in Mahoning Valley. While I no longer reside in Youngstown, it will always be my home and seeing the Dana School of Music be dismantled so callously and without cause is more heartbreaking than I can express through words. Without the faculty and programs at Dana, there is no way I or thousands of others like myself would be where we are today, doing what we love and inspiring the next generation to do the same.",
    ],
    credentials: {
      jobTitle: "Teaching Artist",
      degree: "B.M. in violin performance",
      year: "2019",
    },
    imgSrc: jordanGrantonic,
  },
  "francesca-molinaro-heath": {
    name: "Francesca (Molinaro) Heath",
    description: [
      "I would not be where I am today without the education I received from the Dana School of Music. I attended Youngstown State University from 2016-2018 and graduated with a Master of Music in Vocal Performance. My education from YSU has awarded me many successes such as a Young Artist with Pittsburgh Festival Opera, a Young Artist with Opera Western Reserve, an Adjunct Voice Lecturer at Frostburg State University, an Elementary Music Teacher, an Assistant Middle School Choir Director, and a soprano finalist with the US Army Chorus. I urge you to please reconsider discontinuing any undergraduate and graduate music programs as well as discharging any members of the music faculty. I have friends and colleagues from Dana who have went on to perform with the Youngstown Symphony Orchestra and Opera Western Reserve as professional artists. The musical performances at YSU serve as music education, culture, and appreciation for the arts in the community. Taking these degrees away will dramatically affect the high level of these performances. Again, I urge you to please reconsider these decisions for the sake of Youngstown and the surrounding communities.",
    ],
    credentials: {
      jobTitle: "Adjunct Voice Lecturer at Frostburg State University",
      degree: "M.M. in Vocal Performance",
      year: "2018",
    },
    imgSrc: francescaMolinaroHeath,
  },
  "jared-peters": {
    name: "Jared Peters",
    description: [
      `I write on behalf of the recent changes proposed at Youngstown State University regarding The Dana
School of Music. When I began to study trumpet performance at The Dana School of Music, one of the
oldest music institutions in our nation, I knew very little regarding the incredible history and impact our
school and faculty has had on the world. In the four years I studied at our school, I would learn, both
inside and outside the classroom (with the guidance of our esteemed faculty), the skills I would need to
have a career as a performer, the career I have today.`,
      `In one year, The Dana School of Music prepared me for the first step in my career as a musician, my job
performing at Cedar Point. I would work there in the summers and it wasn’t long until I was employed as
well at Western Reserve High School as an assistant jazz band instructor and brass instructor. After
graduation in 2019, even with the pandemic, my performance degree had provided me with the
education necessary to teach for two years in public schools in Arizona. Now I live outside of Seville
Spain where I am regularly performing as a freelance performer, both in Spain and Portugal, with some
of the greatest musicians I have met in my life.`,
      `I have performed in churches, restaurants, bars, casinos, and huge theaters. I have performed for the
LeBron James foundation with LeBron himself present. I have even performed with a Semana Santa
band, a band that performs processions during Holy Week in Andalucia. Sometimes these processions
are as long as 14 hours and I am one of the only Americans in the history of these ancient bands to have
had this experience. And among all these experiences, I don’t even consider myself to be among the
greatest success stories of students who graduated in the four years I spent at The Dana School of
Music.`,
      `It is important to remember when considering careers like music performance or composition, much like
a neurosurgeon has responsibilities beyond surgery (such as paperwork, study, meetings, trainings, etc.)
the same is true for performers and composers. They don’t spend their entire day performing and
composing. Sometimes they study, they network, they apply for grants, or they teach lessons or take on
part time jobs to raise funding for projects. In the end this doesn’t mean they have failed. Only that they
are doing what is necessary for their job. An engineer in any branch of the military is certain to have
many responsibilities that a civilian engineer would consider to have nothing to do with engineering.`,
      `Coming from a family of two parents who worked in the medical industry, I can say that a doctor with a
private practice who is working overtime may likely send his secretary home early while he treats the
last remaining patients. Would he be a failure when he has to clean the bathroom before he goes, or
clean up a mess in the office? His medical degree certainly didn’t train him for that, yet he does it
because it is the job.`,
      `I can’t see why music performers or composers or even recording technicians are any different. If the
statistics show that employment is down among them, perhaps it is because they are self-employed, or
temporarily using their degree in a different way while they apply for work in their field, or perhaps they
changed their mind about wanting to be a professional musician or composer, which happens in every
career path. It doesn’t mean they can’t use their degree in other areas of employment. These days, a
bachelors degree in anything can get you a variety of different jobs, so why is getting a music degree and
becoming an administrator such a terrible thing. My brother went to school to be an airplane mechanic,
and he has had steady work ever since, none of which has ever been fixing airplanes. My other brother
started school on a premedical track and become a chemist (a research assistant working with heat
resistant materials). Have their educations failed them? Or perhaps this is part of the job of an
education, to teach people skills and help them find what they can do.`,
      `Dr. Christopher Krummel, my trumpet professor at The Dana School of Music taught me that the music
industry is a multi-trillion dollar industry, you just have to know how to be on the right end of it. This is
exactly true. If employment truly is low among alumni, perhaps it is because the curriculum is not
preparing them for the modern market. I implore you to consider modernizing before extinguishing the
future and tarnishing the legacy of one of Youngstown’s greatest assets and truly one of our national
institutional treasures.`,
      `Before writing this, I finished applying for a grant in Spanish, a language I did not even speak a year ago.
After this I will return to working on some video editing I have to complete for promotions of my music
and I will finish editing a website as well. Tomorrow I will go to work arranging my original compositions
for an upcoming concert I have. Although I learned most of these skills at The Dana School of Music
through the extracurricular guidance of my professors, why did I not learn them in classes for a modern
working musician? These are the skills I use every day. These are the skills that earn money.`,
      `If we remove public music education from our schools, we will be the only “developed” nation doing so.
When I tell my European friends about the proposed changes at my university, they roll their eyes and
say, “of course, only in America”. When did the American educational system cease to be admired and
become a joke to the rest of the world? Clearly this work has value. Value anyone can recognize
whenever they turn on the television and hear a marketing jingle, or watch a show or movie.`,
      `It's also important that we remember the value of our faculty. They have worked with the greatest
performers and ensembles in the world, composed for equally important individuals and ensembles and
their works are even performed in other schools across the country. They are sought after by other
universities, and commended by the greatest professionals in the industry today. They have connections
in places I can’t even imagine, connections that they willingly share with their students. And perhaps
most importantly of all for an educational institution, they have taught some of the most esteemed
professors, performers, artists, and professionals in the industry. The kinds of people who are on famous
recordings, on television, in magazines. And this only brings more money to our university. These
professors work at Dana because they are dedicated to our institution and its students. You cannot find
replacements for this level of experience and dedication. And for their years of dedication, they deserve
recognition and appreciation.`,
      `To conclude, my studies of music performance at Dana have made me the person I am today. Every cent
I have made as an adult is because of my performance degree. I have healthcare, food, and I pay my bills
without worry. I know many others who can say the same. I am not certain I understand the evidence
against a music degree when I know so many more people using their degrees for employment or
furthering their education than those who aren’t. Some of the greatest minds in history have valued
music education, from Plato, to Aristotle, to Thomas Jefferson. Professional performers and composers
of music have existed, to some extent, in practically every civilization for as long as humanity. This alone
is a clear indication of their value. Surely now we aren’t considering eliminating music from curriculums.
Especially now when there are growing fields in music, such as music therapy. Eliminating programs or
faculty or even downsizing our programs would likely be a huge mistake as we would certainly be giving
up a hard-earned reputation and bright future to an institutional competitor simply because they are
thinking more ambitiously.`,
    ],
    imgSrc: jaredPeters,
    credentials: {
      jobTitle: "Freelance Performer",
      degree: "B.M. in Trumpet Performance",
      year: "2019",
    },
  },
  "brittany-baglia": {
    name: "Brittany Baglia",
    description: [
      "YSU gave me the opportunity to complete my master’s degree with a graduate assistantship. At the time I was resigned to not being able to complete a master’s program because of my financial situation. This opportunity changed the course of my life. At YSU I received excellent personalized instruction from accredited and accomplished professional musicians every day. I was given constant opportunities to challenge myself in technique, academics, and leadership. I have been confidently working in my field since graduating from YSU, to this day building on the skills I learned in the music program. Several years ago I recommended the Dana School to one of my own violin students and was thrilled when she was accepted and joined the Dana School of Music.",
      "In recent years there has been continuous upheaval over cuts to staff and degree programming in many departments at YSU. Students, faculty, and alumni have been expressing their sincere concerns with each other, to board members, and on social media platforms. I share their concern. A successful university music program is an absolutely essential link from the local school systems to the professional arts. Overall, cutting arts and language programs does not reflect well on a university or its associated community.",
      "The leadership of YSU know the value of the arts in a community, particularly in education, where it has a long-proven effect of raising test scores and academic success in all fields. College level music develops student confidence, critical thinking, problem solving, collaboration, and the ability to remain effective under pressure. I have attended four university music schools in four different states, earning degrees from three of them. I have seen this university and community advantage play out in every one of them. I have consistently seen this in the high school students I work with who participate seriously in music. They take on hard work eagerly, hopeful about their futures and their higher education in many fields, not solely music. Obviously, this value and advantage of music education does not exist spontaneously. Where it succeeds it is intentionally supported and funded.",
      "The professional musicians I have associated with in my life, very much including my professors at YSU, are some of the most hard working, generous, and civic minded people I have encountered. Their strength and skill have shaped my life for the better. The loss of their presence would be palpable to any community. Please do not allow YSU to weaken its academics and community by forcing incredible teachers, community members, current students, and potential students to relocate. They will surely find another community outside of Youngstown to engage with and contribute to. But I hope they will have solid reasons to stay at YSU. I would like to continue saying that I am proud to be a YSU Dana School of Music alum, and to continue to promote the program to future students.",
    ],
    credentials: {
      degree: "M.M. in Violin Performance",
      year: "2018",
    },
    imgSrc: brittanyBaglia,
  },
  "sean-baran": {
    name: "Sean Baran",
    description: [
      `The Dana School of Music was founded over 150 years ago to create an institution of intensive music
instruction within the Youngstown/Warren area. This institution has benefited the community with
access to world class faculty and training, rivaling many of the biggest music conservatories at a fraction
of the price.`,
      `When I applied to both of my current jobs, I was interviewed alongside numerous candidates with
doctoral degrees in music for both positions. Upon being hired, both institutions were quick to tell me
that I was by far the most qualified candidate regardless of the other applicants' doctoral degrees. To
me, this speaks volumes about the Dana School of Music’s commitment to its historical endeavor: to
offer competitive, conservatory style music training so that musicians from the Youngstown/Warren
area can compete on the national and international stage.`,
      `The Board of Trustees and other administrative professionals at Youngstown State University clearly
have no regard for the community’s past or future. The way they are hacking the Dana School of Music
back to a shadow of itself demonstrates ignorance towards the history of the Dana School of Music,
which predates the existence of any university in Youngstown. They also show no foresight for the
wellbeing of Youngstown’s future, which hinges in part upon a robust economy of cultural programming
to draw people into the downtown area and to study at the university.`,
      `Who will play in the pit for the local opera and musical productions? What will happen to the
Youngstown Symphony Orchestra as local musicians are no longer filling the seats? Who will play live
music at the local bars and breweries? Who will provide music for local church services? Who will teach
the future children of Youngstown/Warren about music?`,
      `Surely, there is an intricate connection between the Dana School of Music and the impressive amount of
culture and entertainment the city is able to offer its residents. Investing in the Dana School of Music is
an investment in the future of Youngstown.`,
    ],
    credentials: {
      jobTitle:
        "Music Director and Organist, First Presbyterian Church of Pittsburgh and Piano Instructor and Choral Accompanist, Lincoln Park Performing Arts Charter School",
      degree: "B.M. and M.M. in Piano Performance",
      year: "2011 and 2014",
    },
    imgSrc: seanBaran,
  },
  "james-vasconi": {
    name: "James Vasconi",
    description: [
      "The decision of the administration of Youngstown State University to lay waste to the Dana School of Music may save a few pennies in the short term, but the long-term costs will be incalculable. These costs will be borne most acutely by a struggling local arts community, for which Dana serves as an institutional and recruitment hub; by local schools, which will now have to recruit teachers from out of the area and who will be less likely to stay long-term; and by future generations of local and regional musicians, who will be forced to pursue their dreams elsewhere—if a higher education in music is even still within reach for them. There will also be a cost to the university itself, as it will now be without one of its most-visible (and audible!) magnets for student recruitment and community outreach.",
      "I urge the administration and Board of Trustees of YSU not to fall prey to the same myopic thought processes that have stunted the post-industrial growth of this region for decades, and to think twice before bringing an end to an institution whose history long predates that of the university itself—and one which can never be rebuilt or replaced.",
    ],
    imgSrc: jamesVasconi,
    credentials: {
      jobTitle:
        "Former adjunct faculty, Youngstown State University and Thiel College. Director of Music, Holy Trinity Lutheran Church (Hermitage, PA)",
      degree: "M.M. in Piano Performance",
      year: "2010",
    },
  },
  "stephen-west": {
    name: "Stephen West",
    description: [
      `It recently came to my attention that the Dana School of Music has come under pressure due to the
        budgeting needs of Youngstown State University. I have heard there is a possibility of cutting graduate
        and even undergraduate music programs. I want to take this opportunity to voice my support for the
        quality of education I received at YSU while obtaining my master’s degree in music in conducting from
        2015 to 2017.`,
      `Prior to attending the YSU Dana School of Music, I taught middle and high school chorus for a little over
      ten years. I was at a place in my career where I felt I needed to further my learning and give myself an
      opportunity for advancement. After teaching for ten years in something I was passionate about, I was
      aware of areas in my skills and knowledge that I would like to expand. I was living in Virginia at the time,
      and I was originally from Georgia. Ohio was not close to home for me and my family. However, doors
      opened leading us to the area, and after contacting Dr. Hae-Jong Lee in the music department, I was
      warmly received and granted the chance to come and pursue my studies as a graduate assistant.`,
      `The staff and faculty at the Dana School of Music was intent on helping me improve my skills. Those who
      contributed included professors Dr. Lee, Dr. Mosher, Dr. Reale, Dr. Yun, Dr. Gage, and many others who
      all did their best to help me strengthen and broaden my experience as a musician and conductor. It was
      truly an amazing two years from 2015 to 2017 that has now allowed me to continue working on a higher
      and more effective level in my field.`,
      `Since graduating from YSU, I have been teaching music at the secondary level with several students
      achieving high honors including all-state chorus and my groups receiving superior scores at
      competitions. Every year I get the privilege of exposing a new generation of students to the joys of
      singing and the community of ensemble music that embodies our history and points to our future. I
      credit the passionate and dedicated teaching of the distinguished faculty of the Dana School of Music for
      enhancing my career.`,
      `Please consider the generations you will continue to impact if you strive to keep the doors open in the
      Dana School of Music. Your efforts will possibly change the course of some young person’s life by giving
      them an outlet to create through someone’s training at the Dana School of Music.`,
    ],
    imgSrc: stephenWest,
    credentials: {
      jobTitle: "K-12 Music Teacher",
      degree: "M.M. in Conducting",
      year: "2017",
    },
  },
  "herbie-hunkele": {
    name: "Herbie Hunkele",
    description: [
      "The lessons that I have learned from The Dana School of Music has shaped the quality of musician and person that I have become. They also have given me a competitive advantage to being a musician in the real world. From Dr. Krummel teaching me to think critically about everything that I play, to Dr. Engelhardt teaching me how to write and play with style, and to Dr. Gage instilling his passion for music not only into me but everybody else who walked through the band room doors. My education there has led to my successful career. I have had the opportunity to work with Grammy award winning musicians, travel the continent, and get my personal music heard across the globe.",
      "This next level education that I have received is part of a tradition of excellence that is 155 years in the making. Losing that will be a devastating blow to YSU, the greater Youngstown community, as well as a musical community that stretches across the globe.",
    ],
    credentials: {
      jobTitle: "Freelance Musician",
      degree: "B.A. in Music",
      year: "2018",
    },
    imgSrc: herbieHunkele,
  },
  "stephen-philip-harvey": {
    name: "Stephen Philip Harvey",
    description: [
      "I’m at 2016 graduate of the Dana School of Music. Without the tutelage of professors at the Dana School of Music, I would’ve never began to actualize my potential as a composer, performer, scholar, and educator. Professors like Dave Morgan and Kent Engelhardt are invaluable to the university’s history as a phenomenal music school and artistic destination for future students. Its vibrant and diverse programs create an environment of musical opportunity and collaboration. Without the diversity in offerings, this culture will wither as quickly as a malnourished rose. When the Dana School of Music is reduced to financial figures it devalues the culture and history of the program and the musical impact of its faculty and graduates. This music school is a rose and should be nurtured. The concerning potential cuts to the music program uproot the culture, the school, and its impact on current and future students.",
    ],
    credentials: {
      jobTitle: "Adjunct Professor of Music",
      degree: "M.M. in Jazz Studies",
      year: "2016",
    },
    imgSrc: stephenPhilipHarvey,
  },
  "emilee-rogers": {
    name: "Emilee Rogers",
    description: [
      `I am a 2020 alum, my major was Chemistry and my minor was music. I represent contribution to both sides of the academic profit spectrum: one with high financial gain and one with low in comparison. Both of which are extremely important. I will be a pharmacist in 5 months and I have plans to use my minor to either give lessons or join a local orchestra.`,
      `My time with the Dana Symphony Orchestra allowed me to continue my music education from high school, giving me the opportunity to do everything I enjoyed at one educational establishment. I have been playing violin for almost 20 years, viola for around 10 years. My participation in music started much before my interest in STEM. I represent a population of students who want to continue to learn and improve their musical skills, while also getting a degree that “makes money.”`,
      `I understand that our music department is small, but most music departments at non-performing arts schools are. The ability to have excellent trained faculty at a smaller state school gives students who may not be able to afford to move or attend larger performing arts schools like Juilliard or Oberlin a shot to continue their career in their area. Many music departments are small in order to spend more money on students who are going to succeed. The Mahoning Valley had numerous small towns, most with music education and band. There will always students who will be positively impacted by their music teachers and will want to follow in their footsteps. When I think of towns in Mahoning County, I see my friends attending their small town football games with a marching band.`,
      `I have seen first hand the impact of the Dana School of Music. The late Dr. Stephen Gage, former conductor of the DSO, drew HUNDREDS of people to his memorial at Stambaugh auditorium this spring. People flew in to honor his memory.`,
      `Music and art consistently gets overlooked in all levels of education. I’ve written papers in my writing classes at YSU about why music and art education positively benefits students, especially in lower income areas. Yes, STEM makes the most money, but not everyone can excel in STEM. The community of Dana saved my life. I was incredibly depressed and overall unwell during my time at YSU, and the friends I made in orchestra and violin studio are my closest friends to this day.`,
      `I could sit here and write all day about why music is so important to YSU, and why music is important to every educational program on the planet. To keep it to the point of making money - who wants a football team without a marching band? Marching band is made of music students.`,
      `Please reconsider. Keep the faculty. Keep the programs. Give these students a chance. They will be the next generation of music educators.`,
      `In the words of Dr. Gage,`,
      `Love music 🎶🎻❤️`,
    ],
    credentials: {
      jobTitle: "Pharmacy Student",
      degree: "B.S. in Chemistry",
      year: "2020",
    },
    imgSrc: emileeRogers,
  },
  "bryan-kennard": {
    name: "Bryan Kennard",
    description: [
      `Youngstown State University’s Dana School of Music is facing an existential crisis. I am
      dismayed to hear that the YSU administration has apparently presented the Board of Trustees a
      case for “sunsetting” more program offerings from across the university, which again includes
      the slashing of degree programs in music (and potential retrenchment of faculty tied to those
      programs). In 2021, the administration announced the “sunsetting” of programs in Music History
      and Music Theory. In this go-around, it seems as if the chopping block may now include
      undergraduate programs in Music Composition and Music Performance, as well as Dana’s entire
      graduate program in music. The administration has scheduled a special session of YSU’s
      Academic Senate to propose their cases for retrenchment on January 10.`,
      `I attended Dana from 2006-2008 for my master’s degree in Flute Performance. After 10 years of
      living outside of Ohio, I returned and was excited to begin teaching at Dana as adjunct faculty
      from 2020-2022. As a Dana alumnus and contributor to its educational mission, I am
      disappointed that the degree program I completed may not long exist, but I am hardly surprised.
      It is almost cliché now to discuss the cutting of arts-related programs when institutions face
      budget crises.`,
      `In a time when so many colleges and universities are still dealing with lower enrollment
      following the pandemic, and Northeast Ohio’s population continues to shrink, YSU’s plight is
      not unique. Area institutions of higher learning are all experiencing belt-tightening. Lakeland
      Community College cut 10% of its workforce, and Baldwin Wallace University’s budget woes
      have been widely reported in recent months. At times like this, however, it is rarely the bloated
      university administrations that take the largest hit to help lower university spending. It is most
      often the program offerings and faculty that face cuts, layoffs, retirement buyouts, and
      retrenchment. University music programs, which are inherently expensive to operate due to the
      number of specialized faculty needed to provide students with a quality education, are easy
      targets for cut-mongering administrations and boards.`,
      `The Dana School of Music has a proud 150-year history in the Youngstown area (older than
      YSU itself). It is a cultural fixture in an economically depressed region. While it has seen many
      changes, challenges, and shrinking enrollment since its heyday in the 1970s and 1980s, Dana still
      provides students and Youngstown audiences an important opportunity to engage in the arts and
      music. While this may not, at first, be fully affected by the YSU administration’s proposals, it
      will be initially hampered. Any sense of potential growth within the School of Music will surely
      be stifled.`,
      `Programs in Music Education and Music Recording, while currently safe from the
      administration’s Sauron-like gaze, will certainly see the student experience cheapened if enough
      faculty exit as a result of this current round of retrenchment. It is easy to imagine that students
      looking for a college education in music will overlook YSU as an option if and when it can no
      longer offer everything its competitors can, thus shrinking attendance at a more rapid rate.
      Maybe the administration is aware of this and is actively engaged in overseeing Dana’s slow
      death, or at the very least its crippling.`,
      `As someone with degrees in Music Composition, Education, and Performance (not all from
      Dana), and as someone who is actively involved in Northeast Ohio as a composer, performer,
      music promoter, and arts administrator, I see the phasing-out of programs in the arts as
      misguided and a great loss to the community. While it is certainly the partial responsibility of
      Dana’s faculty and staff to promote its growth and reinvent itself when it begins dealing with
      declines in enrollment, they cannot entirely address the underlying issues if the YSU
      administration does not share or fully support the vision of the School of Music.`,
      `Cutting programs is an easy way to deal with a university’s shrinking bottom line. Choosing to
      support programs to promote the future of an institution is understandably tough, and I can’t
      entirely understand all the challenges or agree with all the decisions the administration and Board
      of Trustees make for YSU. I will argue that the arts are an important part of our culture, and the
      number of Dana alumni engaged in all areas of the music industry who have graduated over the
      decades is a testament to a legacy the past and present faculty of Dana School of Music have
      built. A legacy that may see its end sooner than we think.`,
      "Sincerely,",
      "Bryan Kennard",
      "Director, BOP STOP at The Music Settlement",
      "Composer and Flutist",
    ],
    credentials: {
      jobTitle: "Director, BOP STOP at The Music Settlement",
      degree: "M.M. in Flute Performance",
      year: "2008",
    },
    imgSrc: bryanKennard,
  },
  "brendan-mcevoy": {
    name: "Brendan McEvoy",
    description: [
      `I graduated from Youngstown State in 2022. Over the course of my degree in Music
Composition, I honed my skills in writing music, performing on multiple instruments,
academic research and writing, and pedagogy of violin and music theory (to name a
few). With this background, I was able to gain acceptance into several prestigious
graduate programs, and am on track to complete a Master’s degree in music theory with
plans to continue my education further and teach at the university level. My research
has been accepted to conferences, I’ve been given opportunities to help develop
curriculum, and I have taught several classes at the undergraduate level. The skills I
learned while at the Dana School of Music undoubtedly prepared me well for my
academic, musical, and professional success. However, this growth and development
didn’t just magically happen in the isolation of the practice rooms in Bliss Hall.`,
      `From colleagues and fellow students to professors and TAs, a music school creates a
community that fosters creative, academic, and personal growth that lasts far beyond
one’s time at an institution. The most important part of the music school experience
(and truthfully, any university experience) is the people. Even before I enrolled as a
student at YSU, I performed under the baton of Stephen Gage while in the Youngstown
Symphony Youth Orchestra, and he encouraged me to further my education at the
Dana School of Music. While I was there, I had so many professors, including Dr. Gage,
who guided and inspired me in my development as a composer, as an educator, as a
performer, and as an academic: Dave Morgan, Wendy Case, Jena Root, Joseph
Kromholz, Michael Strauss, Caroline Oltmanns, Steven Reale, Kivie Cahn-Lipman,
Caitlin Hedge, James Vasconi, Ewelina Boczkowska, Jessica Chisholm, among others.
The list is long, and I include it to highlight the extensive network of people that come
together within an academic institution to enable students’ growth and learning in the
singularly unique way that only a music school can. Every one of these faculty members
contributed to the success I’ve been fortunate to have, both while at YSU and after.
Very few places outside of a university allow growing musicians to, in such a short time,
work with people who possess a simply staggering amount of talent and experience. A
knowledgeable, successful, and supportive faculty is the greatest asset that a university
has to offer its students. Despite this, it seems like the administration of Youngstown
State has consistently ignored its faculty.`,
      `As a university, the primary focus of leadership should be to support a mission of
education. Despite this, YSU has repeatedly prioritized non-educational efforts in its
administrative decisions, its spending, and its policies. I understand that sometimes
difficult decisions must be made in the interest of keeping an institution running.
However, when these decisions actively increase the salaries of an ever-growing coterie
of administrators and athletic directors, and attempt to terminate employee contracts
against union bargaining agreements, it makes clear that education is no longer the
priority of those running what is supposed to be an educational institution. As someone
who is pursuing a career in higher education, I find this entire situation to be extremely
concerning. The university should be a place where the pursuit of knowledge and study
is held to the highest standard, not plunged below a bottom line. When the faculty of a
university are treated with this level of contempt and disregard, it not only negatively
impacts how the faculty view their teaching and research, but it signals to the students
(and alumni) that they, and their education, are not the priority. It shows that student
tuition and alumni donations are not being directed towards the professors that invest so
much of their time and personal resources into the academic and emotional success of
their students. Instead, they’re being funneled into administrative initiatives that see little
(if any) widespread impact amongst the general student population, and serve primarily
as busy-bodying trend-following in order to virtue signal to prospective students, who
are viewed as little more than clientele to lure in the door. My time as a representative in
the YSU Academic Senate has shown me that not only are student perspectives not
often listened to or actively sought out within many administrative conversations, but the
views of faculty are also ignored or not even sought out in critical policy discussions.
Decisions made by the Senate or by collective Union bargaining are consistently left
unheeded or outright flaunted for the sake of the unknown, confidential aims of the
Board. The fact that all of this is happening in Youngstown, a city made famous by its
history of worker’s rights, is outrageously ironic, and shows an astonishing contempt not
only for the faculty and staff of the university, but for the history and legacy of the
community out of which the University grew.`,
      `In addition to being a vital part of the university community, the Dana School of Music is
a historical institution within the Mahoning Valley. The Dana School has been a vibrant
cultural touchstone for over 150 years, upholding a high standard of musical education
and concert performances for the Warren and Youngstown communities. Eliminating
music degrees would not only deprive the Valley of a thriving annual array of concerts,
plays, musicals, guest artist residencies, and other performances, but would cause the
University to lose academic programs that have furnished the high schools of Trumbull
and Mahoning Counties (and beyond) with fantastic music teachers for decades, jump-
started the success of Grammy-winning performers, and encouraged the careers of
future pedagogues and researchers (including myself). Few other schools can boast
such a storied history with a continuing record of alumni success.`,
      `I believe a hallmark of the Dana School of Music experience is the unique educational
blend of faculty engagement and a broad array of experiential learning opportunities,
and the devaluation of faculty at Youngstown State not only detracts from the School of
Music, but the university as a whole. If the Board of Trustees moves towards defunding
the School of Music, they will be digging themselves a deeper hole in their long-running
trend of degrading the educational standing of YSU at the expense of their students,
employees, and constituents. Cutting funding to Dana is not only an insult to the
devoted faculty who spend countless hours teaching, preparing, caring for and nurturing
the success and development of their students, it is equivalent to cutting off a cultural
limb of Northeast Ohio’s history. The guitarist Charlie Byrd once said, “Music's not like
becoming a doctor, who can walk into a community and find people who need him.”
Musicians are not always immediately recognized for the value they bring to a
community, but every community needs musicians, just like every community needs
doctors, artists, engineers, athletes, historians, writers, nurses, and scientists. A
university is a training ground for all of these people, providing an essential service to
the community. The Board of Trustees must recognize the role that Youngstown State
has in the Mahoning Valley as a center for education, the arts, the sciences, athletics,
and history. The Dana School of Music has been instrumental in providing this essential
service to Youngstown, to Ohio, and beyond during its 150+ years of existence.
Defunding it, especially in such a time of social and emotional turmoil, is a disservice to
faculty, students, and the community at large.`,
    ],
    credentials: {
      jobTitle:
        "Graduate Teaching Assistant at Michignan State University, College of Music",
      degree: "B.M. Music Composition, minor in English Studies",
      year: "2022",
    },
    imgSrc: brendanMcEvoy,
  },
  "michael-barkett": {
    name: "Michael Barkett",
    description: [
      `The Dana School of Music equipped me with the tools to enjoy a diverse and exciting musical career. Since graduating in 2017, I have had the privilege of performing with numerous professional ensembles including the Detroit Symphony Orchestra, been a semi-finalist in solo competitions, co-founded a group with multiple albums on Spotify, and won a job U.S. Navy Fleet Bands. Since joining the Navy in 2021, I’ve had the privilege of performing in over fifteen countries for millions of people. Without the quality education I received from the instructors at the Dana School of Music, I would not have had so many incredible experiences in such a short time. Being able to study multiple styles of music including jazz, pop, and classical music was a critical piece of my education that gave me the skills to stand out amongst my peers and competitors in the job market. I also had the opportunity to learn from graduate students who came to the university with their own experiences which further enriched my educational environment. With the university taking aim at the program and looking to strip the music school of these critical attributes, they are effectively crippling the music faculty’s ability to provide the quality education that has stood the test of time since the Dana School of Music’s conception in 1869.`,
    ],
    credentials: {
      jobTitle: "Musician, U.S. Navy Fleet Bands",
      degree: "B.M. in Trumpet Performance",
      year: "2017",
    },
    imgSrc: michaelBarkett,
  },
  "eric-finkelstein": {
    name: "Eric Finkelstein",
    description: [
      "My name is Eric Finkelstein, and I graduated from the Dana School of Music in 2018. Throughout my time at Dana, I had the greatest privilege of studying with some of the most experienced and knowledgeable professors in the country. This includes but isn’t limited to: David Morgan, Stephen Gage, Kent Englehardt, Joseph Kromholz, Theron Brown, etc. I had countless performance opportunities that shaped me as a young musician. To say that my experience at Dana was great would be an understatement. Because of my musical preparation from Dana, I went on to perform professionally post-grad. Notably, I played at two amusement parks: Carowinds and Cedar Point, and I played on one cruise ship: Pride of America. As of right now, I’ve been a musician in the Army for almost three years, and I’ve chosen to make this my career. I know that I’m just one of a million success stories to come out of Dana; the administration needs to give a second thought before making cuts.",
      "Very Respectfully,",
      "Eric D. Finkelstein",
      "SGT, USA",
      "HR NCO",
      `“Fort Sam’s Own” 323d Army Band`,
    ],
    credentials: {
      jobTitle: `Musician, “Fort Sam’s Own” 323d Army Band`,
      degree: "B.M. in Music Education",
      year: "2018",
    },
    imgSrc: ericFinkelstein,
  },
  "bill-kirkwood": {
    name: "Bill Kirkwood",
    description: [
      `I have been the piano technician for the Dana School of Music for 20 years from 2004 until now. In this 20 years I have watched thousands of students come through Bliss Hall. I’ve heard them as they spend hours in the practice rooms honing their craft, and as they perform together in various ensembles. What many people do not realize is the incredible discipline it takes to become a good musician. Music is not just a course, or a curriculum, or a degree.  The study of music affects not just a person’s career but their whole way of life.`,
      `Music forms individuals into better people who learn not just for themselves, but who learn so they can collaborate and perform with other musicians. Plus they perform with others so that still others in the audience can derive enjoyment and fulfilment through their craft. This makes musicians major contributors to any culture or society. Musicians who play or sing in our churches serve an even bigger purpose as they help people to worship God, the very Creator of music.`,
      `I’ve also watched as many faculty members have come through these halls, some for much longer than I have been here. I’ve watched them teach and interact with their students. I daresay their passion for teaching music and love for their students is unmatched in any other college curriculum. These instructors are not just here to collect a check. They are here to make a difference in the lives of their students, to instill the discipline required to excel, to treat others with respect, and encourage others in their craft.`,
      `The Dana School of Music is (and has been) one of the most influential music schools in Northeast Ohio for over 150 years. I urge the YSU administrators to consider the impact Dana has had on the culture of our surrounding area and allow it to continue turning out the next generation of musicians.`,
      `Respectfully,`,
      `Bill Kirkwood`,
      `Piano Technician, Dana School of Music`,
    ],
    credentials: {
      jobTitle: `Piano Technician, Dana School of Music`,
    },
    imgSrc: billKirkwood,
  },
  "ej-donkin": {
    name: "EJ Donkin",
    description: [
      `My name is Emma Donkin, and I am a 2018 graduate of the music composition program at the Dana School of Music. I’m am currently gainfully employed full-time as a worship director for Portage Community Chapel (Ravenna, OH), and teach music theory as an adjunct at YSU. I also am a composer and gigging pianist with 2 jazz bands in the Northeast OH region, and have received international recognition for my compositions (2-time attendee of the International Trombone Festival, Alba Music Festvial in Italy, and more).`,
      `My voice is just one of thousands imploring the administration to reconsider the retrenchment of faculty and cutting the performance and composition degrees offered by the Dana School of Music. I humbly ask the administration to consider the scope of this decision and implications for the future of music, arts, and community in the valley. I also ask you to consider the reach and influence the school has had not just upon this region, but on the nation as Dana’s graduates launch out into the world.`,
      `If it is about calculating the number of viable careers Dana’s students have gone into, these numbers will look different than simply calculating which graduates are employed by a company. The vast diversity of careers that Dana’s graduates have gone on to have is staggering. To name a few recent (-20 years) graduates:`,
      `Sean Jones: Chair of Jazz Studies at Peabody Conservatory, and well-renowned jazz composer and arranger`,
      `Dr. Lauren (Eisenreich) Rudzinskas: Senior Lecturer, Trombone, at the University of Akron, General Manager at the International Women’s Brass Conference, and graduate of the Eastman School of Music`,
      `Sam Blakeslee: NYC-Based jazz composer, band leader, and arranger, and lecturer at the Hartt School`,
      `Sean Baran: Music Director and Organist at First Presbyterian Church of Pittsburgh, and Piano Instructor and Choral Accompanist at Lincoln Park Performing Arts Charter School`,
      `This is not to mention all the educators, freelancers, recording engineers, and conductors who’ve built careers in Nashville, NYC, Cleveland, Seville, and many more vibrant, artistic cities. The Dana School of Music attracts people like these who have an awe-inspiring amount of tenacity, grit, and work ethic that I’ve found unique to the culture of Youngstown and the Dana community. This grit also attracts self-starters, academically-minded people, and innovators, which in turn creates very unique career paths for these people. Many of the graduates are self-employed, gigging musicians, composers, arrangers, songwriters, freelancers, and wildly creative artists who stitch together a beautiful career based on their projects, gigs, and interests. I would argue that these pathways are just as valid, financially viable, and valuable as a salaried job with a company that is easy to track on an Excel sheet. Many of these disciplined artists own a home, have a family, and make a sustainable living using their skill set, just as any other degree-bearing person would in any other field. Again, I believe it is that innovative grit and tenacity that Dana attracts and cultivates that creates a strong outflow of artists from the school.`,
      `Without the programs that are potentially going to be cut, YSU fails to attract musicians with these qualities. Thereafter, Dana fails, Bliss Hall becomes silent, and the community suffers an obvious void in the music sector of its culture. Faculty will leave the area, students will enroll elsewhere, and many talented musicians will take their talents to other areas, leaving Youngstown and YSU scrambling to recreate the local, budding artistic sphere, while surrounding cities like Akron, Canton, and Cleveland are already well on their way to blooming.  Without these programs training and cultivating the next generation of local musicians, the implications for the theatre community, youth orchestra, churches, schools, and Youngstown symphony orchestra are devastating.`,
      `I chose Dana because the late Dr. Stephen Gage challenged me and asked me if I was ready to work hard. That challenge is a call to the cultivate the absolute best in the students that desire a career in music, and I’ve been hard pressed to find another institution in this area that nurtures that ethic that is not also a classical conservatory. I’m sure Dr. Gage would be horrified to see the arts in the valley take this hit, after his (and many others) decades of fierce support and service to the school. To have a school in this area that produces not only educators for the schools in the valley, but also such a broad spectrum of musicians who are spread throughout the country, is a massive boon to the culture and spirit of the Mahoning valley. To have the blessing taken away deals a painful blow to the community that will sting for decades to come.`,
      `As a composer and musician with  international premieres, awards, commissions, and a person with a fulfilling life and livelihood that all began at (and would not be possible without) The Dana School of Music and the many accomplished, wonderful faculty there (Dave Morgan, Caroline Oltmanns, Kent Engelhardtt, Steven Reale, Jena Root, Dave Kana, Randall Goldberg, Stephen Gage, Hae-Jong Lee, and many more): please re-consider this decision. Thank you for your time.`,
      `Sincerely,`,
      `EJ Donkin`,
      `Composer, Arranger`,
      `Worship Arts Director`,
      `Pianist at Danjo Jazz Orchestra`,
      `Pianist at the NEO Jazz Orchestra`,
    ],
    credentials: {
      jobTitle: `Worship Arts Director, Composer, Arranger, Pianist`,
      degree: "B.M. in Music Composition",
      year: "2018",
    },
    imgSrc: ejDonkin,
  },
  "laurie-sampsel": {
    name: "Laurie Sampsel",
    description: [
      "I attended the Dana School of Music in the 1980s. I graduated with a bachelor’s degree in music education (1986) and a master’s in flute performance (1988). Without this school and its faculty I would not have pursued a career as a music librarian and musicologist. I was a first generation student from Ohio. The opportunities I enjoyed from this school made all the difference for me. I went on to get a second master’s in library science at Kent State University and a PhD in musicology from the University of Pittsburgh. Today I am a full professor in musicology at the University of Colorado Boulder.",
    ],
    credentials: {
      jobTitle: "Professor of Musicology",
      degree: "B.M. in Music Education, M.M. in Flute Performance",
      year: "1986 and 1988",
    },
    imgSrc: laurieSampsel,
  },
  "jaden-karr": {
    name: "Jaden Karr",
    description: [
      `As soon as I graduated high school I knew that I wanted to do something with a career in music. I enrolled at YSU for a degree in Music Education. While I did not finish my degree due to personal circumstances, I learned so much from my professors there about music theory, vocal performance and piano performance, as well as how to be a better musician and teacher, but many of them have unfortunately left YSU due to retirement or a better opportunity.`,
      `Youngstown State University has a great school of music- if YSU allows these programs to be cut, many things at YSU Will also be impacted. This includes the marching and pep bands, the free “music at noon” events offered at the Butler Art Museum almost every week during the school year, and will also create a ripple effect of lack of music throughout the Mahoning and Shenango Valleys. Many YSU students perform in area churches, give lessons to school-aged students, and do so much more for this area. I truly hope that the YSU administration continues to maintain the tradition of excellence that Dana has had for so many years.`,
      `Respectfully,`,
      `Jaden Karr`,
      `Director of Music, Our Lady of The Lakes Parish`,
    ],
    credentials: {
      jobTitle: "Director of Music, Our Lady of The Lakes Parish",
    },
    imgSrc: jadenKarr,
  },
  "carrie-ann-roddewig-gary": {
    name: "Carrie Ann Roddewig Gary",
    description: [
      `This is devastating news. I LOVE my Dana education. The education and opportunities afforded me there as an undergrad were beyond compare (and don't get me started about the memories and friendships made). Such great choral and opera experiences, top-notch theory and history professors, mentoring opportunities to help local high schools, community events like the Carols and Cocoa, Board Head Festival and Opera Guild events.....Dana is a Youngstown Cultural Institution.`,
      `Even my high school education as a student at Lakeview was influenced by the opportunities presented by the Dana School....District Chamber Choir Festival....Madrigalfest...voice lessons with Doc Raridon.... the experience to hear amazing musicians perform in operas and concerts and know that's what I wanted to do....they gave a struggling (lazy) high school student direction and purpose.....`,
      `Without the education and experiences I garnered there, I can guarantee I would not be where I am today......professional performer, church music director and in my 23rd year of public high school choral education...passing on to new generations the knowledge, work ethic, and love of music that was instilled in me at YSU`,
      `Craig Raymaley, Jim Piccirilli and I loved Dana so much we created the Dana Vocal Performance Clinic, a recruitment tool and opportunity for high school students to have the Dana experience before getting there! I hope this can be turned around!!`,
    ],
    credentials: {
      jobTitle: "Choral Director",
      degree: "B.M. in Music Education",
      year: "1999",
    },
    imgSrc: carrieAnnRoddewigGary,
  },
  "ian-kinnaman": {
    name: "Ian Kinnaman",
    description: [
      `The education, experience, and mentorship I received at the Dana School of Music are directly responsible for the success of my career as a teacher and musician. I chose to attend YSU to study with Dr. Dave Morgan, professor of bass and composition. The school's environment encouraged a multifaceted approach to learning - taking classes in education, composition, multiple instruments, and all areas of performance. This provided me with the adaptability to succeed as a freelance musician.`,
      `Though I was a music education major, my education was exponentially enriched by the composition, performance, and graduate programs. The most successful project I have been a part of, Alla Boara, only happened because the graduate program brought Anthony Taddeo to the school. The connection I made with him has allowed me to play with the region's best musicians and add my voice to the arts and culture of Ohio. The value of the Dana School of Music cannot be measured. Gutting this program is a short-sighted solution to an issue facing universities across the country and doing so would be the end of a cultural institution that has bettered our community for the last 150 years. Gutting this program will permanently diminish the quality of the school, the college, the university, and the culture of NE Ohio.`,
      `Ian Kinnaman`,
      `Adjunct Instructor at the College of Wooster`,
      `B.M. in Music Education`,
      `Class of 2020`,
    ],
    credentials: {
      jobTitle: "Adjunct Instructor at the College of Wooster",
      degree: "B.M. in Music Education",
      year: "2020",
    },
    imgSrc: ianKinnaman,
  },
  "truman-littler": {
    name: "Truman Littler",
    description: [
      `My name is Truman Littler. I am a native of Oil City, Pennsylvania and am a 2022 Bachelor of Music Education graduate of Youngstown State University. I am proud to be the Middle School Choir Director at the Elida Local School District in Lima, Ohio and am a member of the Lima Symphony Orchestra Chorus, Lima Beane Barbershop Chorus, and the Trinity United Methodist Chancel Choir of Lima. The Dana School of Music is well known as a very successful school for instrumental music majors, but I studied vocal music, opera and was given the opportunity to privately study conducting, and piano at Dana. Some of the amazing professors who mentored and taught me include, Dr. Allan Mosher, Dr. Hae-Jong Lee, Dr. Jena Root, Dr. Daniel Keown, Dr. Misook Yun, Dr. Caroline Oltmanns and Dr. J. Paul Louth. The care and effort of these professors ensured my success in the program. The opportunities afforded to me at Dana allowed me to to serve as Assistant Director of the Stambaugh Chorus for three years, direct the Choir at Ohltown United Methodist Church in Mineral Ridge, be a Staff Singer at Christ Episcopal of Warren and be a singing Scholar for the Warren Civic Chorus. The diverse population of musicians with whom I had the opportunity to collaborate with at Dana has developed me into a well rounded musician and Teacher. When I went to student teach at Hickory High School in Hermitage, Pennsylvania, the fact that I attended the Dana School of Music was a respected fact to the music faculty at the school, and helped me secure my student teaching spot.`,
      `Truman F. Littler`,
      `Bachelor of Music in Music Education 2022`,
      `Employed as Middle School Choir Director at Elida Local School District (Lima, Ohio)`,
    ],
    credentials: {
      jobTitle: "Middle School Choir Director, Elida Local School District",
      degree: "B.M. in Music Education",
      year: "2022",
    },
    imgSrc: trumanLittler,
  },
  "andrew-morro": {
    name: "Andrew Morro",
    description: [
      `I do not believe that the thoughts and perspectives that I have on art could have been built anywhere other than in the halls of Bliss. The community and faculty at Dana School of Music were unendingly supportive with my pursuit of music and the learning of art. I started school in 2016 and immediately found myself in a place where I could explore music in anyway that I wanted. I pursued avenues against the grain and instead of resistance (sans some administrative hurdles), I was met with support to find ways that I could make music outside of the conservatory box and I thoroughly believe that opportunity should be available to anyone.`,

      `I learned about avant-garde music through Music History classes and eventually founded the small ensemble Spoonbeams where we were able to learn, think, and create thought music. My interest in didgeridoo was supported by my instrumental professors and we explored various extended techniques together. I was encouraged to explore technology through music and it became my senior thesis as well.`,

      `After school, I completed my Masters Degree in Audio Arts at Syracuse University and moved to Los Angeles to pursue the music industry and the base knowledge on artistry and musicality that was instilled in me at Youngstown has been instrumental to my success.`,

      `I've tried to keep up with watching what has happened at Dana since I've left and I'm really disappointed with the place that it seems to have become. There is a massive untapped potential within the valley for amazing music to be created and Dana School of Music stands as one of the pillars of where that should be coming out of, but it stands crumbling. I do not support any of the administrative decisions that are proposed.`,
      `Andrew Morro`,
    ],
    credentials: {
      jobTitle: "Day-to-Day Manager, ATC Management",
      degree: "B.M. in Music Recording and Technology",
      year: "2020",
    },
    imgSrc: andrewMorro,
  },
  "george-wallace-miklas": {
    name: "Dr. George Wallace Miklas",
    description: [
      `I am an alumnus of the Dana School of Music (DSM). I understand that the Youngstown State University (YSU) Board Of Trustees (BOT) is systematically dismantling and destroying the 150-year-old Dana School of Music, also known as Dana’s Musical Institute, founded in 1869 in Warren, Ohio.`,
      `As a young high school musician, I was focused on practicing multiple musical instruments, studying music theory, and singing. Consequently, I had no time left to study for my academic core classes that are used to measure and predict a person’s success in higher education. Based on standardized test scores, my HS guidance counselor denied my application for early admission to YSU. However, my HS principal, who better understood my musical aptitude, approved the application. YSU granted me early admission to study at the DSM during my senior year of high school.`,
      `My undergraduate studies at the DSM emphasized tuba performance, wind symphony, symphony orchestra, and music education; it also allowed me to study composition, orchestration, arranging, performing jazz, and singing in an opera.`,
      `I gained many learning experiences through the nurturing and mentorship of my music professors at the DSM. I understood that I was not alone in my struggle between the arts and academics and that my life's success depended on my perseverance and dedication to the music I love.  After many years of domestic and international performances, my life has come full circle. I have earned a Master Teacher degree, Master of Arts degree, and Doctor of Music Education degree. I am a music instructor at the University of Lynchburg in Virginia, where I nurture and mentor my students with genuine empathy.`,
      `The Every Student Succeeds Act (P.L. 114-95) does not legally impact higher education. Still, it does provide a very important message regarding educating the whole person: “Music educators have celebrated the law for its specification of music as part of a “well-rounded education.”[1] The YSU BOT needs to consider its role as a regional, accessible, and inclusive institution of higher education, operating fundamentally upon taxpayer dollars provided by state and federal governments’ budgets. As an institution of higher learning serving a diverse region and a diverse cross-section of the population, rich in musical heritage and having graduated many generations of professional performing musicians and music teachers, the YSU BOT must be stopped from unveiling its plan, which will inevitably destroy the DSM by removing one cornerstone at a time, until the entire institution is rubble.`,
      `Therefore, I implore the YSU BOT to consider its mission statement and how destroying the DSM is tantamount to destroying curiosity, lifelong learning, student futures, and the region:`,
      `“As a student-centered university, Youngstown State University’s mission is to provide innovative lifelong learning opportunities that will inspire individuals, enhance futures and enrich lives. YSU inspires individuals by cultivating a curiosity for life-long learning; enhances the futures of our students by empowering them to discover, disseminate and apply their knowledge; and enriches the region by fostering collaboration and the advancement of civic, scientific, and technological development. YSU’s culture of enrichment flourishes in our diverse, accessible, and quality education."[2]`,
      `Consider the YSU Vision statement and how the board of trustees is destroying the “cornerstone of collaboration” that is found in music and at the DSM:`,
      `“Youngstown State University is where students thrive in their educational and career pursuits, where scholarship creates innovative solutions, and where community engagement is a cornerstone of collaboration that collectively contribute to the sustainable prosperity of the region and beyond.”[3]`,
      `Lastly, consider the YSU values statements and how the board of trustees is destroying individual students’ strengths, holistic and lifelong success, and without mutual respect and inclusion, to the detriment of the university community and culture, and region:`,
      `“We—the faculty, staff, administrators, and students of Youngstown State University—hold the following values essential to achieving the mission and realizing the vision.`,
      `Centrality of Students – We put students first, fostering their holistic and lifelong success.`,
      `Excellence and Innovation – We bring academic excellence and innovation to learning and life for all stakeholders.`,
      `Integrity and Human Dignity – We root all behaviors, decisions and actions in the achievement of integrity, mutual respect, collegiality, equity and inclusion.`,
      `Collaboration and Public Engagement – We embrace collaboration and create innovative partnerships to foster sustainability and enrich our university, our culture, and region.”[4]`,
      `Respectfully submitted,`,
      `Dr. George Wallace Miklas`,
      `BM in Ed, 1991, Dana School of Music`,
      " ",
      " ",
      `[1] Alice-Ann Darrow. “The Every Student Succeeds Act (ESSA): What It Means for Students With Disabilities and Music Educators.” General Music Today 30, no. 1 (October 2016): 41–44. https://doi.org/10.1177/1048371316658327.`,
      `[2] YSU. “Youngstown State University Mission Statement,” December 16, 2016. https://ysu.edu/mission.`,
      `[3] Ibid.`,
      `[4] Ibid.`,
    ],
    credentials: {
      jobTitle:
        "Music Instructor, University of Lynchburg and Harmonica Gallery Sales, Repair & Studio ",
      degree: "B.M. in Music Education",
      year: "1991",
    },
    imgSrc: georgeWallaceMiklas,
  },
  "amanda-beagle-bossio": {
    name: "Amanda Beagle Bossio",
    description: [
      `The Dana School of Music has been a point of pride for our community for decades and has ensured the vital existence of arts education throughout our region. Countless students have enjoyed elite music education in their schools and have had access to community arts experiences and private instruction all thanks to leading educators, performers and teaching artists who have walked the halls of Dana. The ripple affect the dismantling and potential closing of the Dana School of Music would be felt in multiple areas of our community, would affect the economy of our region and diminish the cultural offerings that make Youngstown a unique and special place to live as an artist, a music educator and patron of our thriving arts organizations.`,
      `A 2003 graduate, I myself was afforded a wonderful foundation earning my Bachelors in Vocal Performance from the Dana School of Music. As a student at Dana, I studied opera abroad and performed leading roles at the undergraduate level, an opportunity not often extended at other universities. This university celebrated and supported me as Miss Ohio 2004 and my run for Miss America 2005.`,
      `Upon graduating, I went on to experience a wealth of opportunities from earning a Masters in Entertainment Business, performing professionally in Actors Equity music theatre productions, operetta at Lincoln Center in NYC, cruise ship showrooms on luxury cruise liners as well as being featured with area symphonies, working as a church chorister and soloist and producing my own recordings and musical events that have allowed me to have a unique and fulfilling career as working singer.`,
      `Additionally, YSU welcomed me as an adjunct member of the Musical Theatre faculty when I returned to the area in 2019. This experience provided another avenue of growth to combine my professional experience and continued elite private study with experts in my field to work as a college voice instructor. My focus now is a thriving private voice studio serving 40+ clients of varying ages from our local area as well as other cities, states and countries thanks to Zoom. Unfortunately, grooming students to attend the Dana School of Music seems less and less a viable option for the talented young singers I work with in my private studio.`,
      `The economic impact of a thriving arts community is vital to the success of any city. I can only imagine the talent drain this will have on our Youngstown Symphony, choruses, and churches let alone the access to quality music education in our region. The decision to make cuts is a short sighted solution if the argument is that the Dana School of Music is not currently profitable. The answer lies in community engagement, building relationships with local schools and community arts organizations that can help the institution become the emblem of the community it once was. This approach of making cuts to help with profitability will only continue to extend to other departments resulting in a shell of a university that no longer serves the needs of those seeking higher education, regardless of their field.`,
      `It breaks my heart to think this is where our beloved university’s priorities lie, dishonoring the memory of so many distinguished members of our community who built this institution over 150+ years with their resources, talents, outreach and vision. To build something takes great forethought and an altruistic spirit that values the greater good of one’s community. I implore the current administration to rise to the occasion and set the standard for preserving music education in a world that is often so quick to cut the arts rather than find a way to foster them. There is always a way.`,
    ],
    credentials: {
      jobTitle: "Private Voice Instructor",
      degree: "B.M. in Vocal Performance",
      year: "2003",
    },
    imgSrc: amandaBeagleBossio,
  },
};
