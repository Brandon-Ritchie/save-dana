import anthonyTaddeo from "../../assets/testiomial-images/anthony-taddeo.jpg";
import jaredPeters from "../../assets/testiomial-images/jared-peters.jpg";
import brittanyBaglia from "../../assets/testiomial-images/brittany-baglia.jpg";
import jamesVasconi from "../../assets/testiomial-images/james-vasconi.jpeg";
import stephenWest from "../../assets/testiomial-images/stephen-west.jpeg";
import seanBaran from "../../assets/testiomial-images/sean-baran.jpg";
import emileeRogers from "../../assets/testiomial-images/emilee-rogers.jpeg";

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
  "anthony-taddeo": {
    name: "Anthony Taddeo",
    description: [
      "The Graduate Jazz program at Dana School of Music changed my career forever. In 2018 after being a professional sideman for over a decade I realized that I had hit a wall in some areas of my musicianship and that to get where I needed to go in my career I needed to, not only better myself in those areas, but also further my higher education. I talked with a dear friend and mentor, Dr. Dave Morgan, and he invited me to come visit Dana School of Music. My very first visit I was welcomed warmly and made to feel like this place would be the perfect environment to push myself, meet new peers, and have a dynamic learning experience. Not only did the Dana School of Music provide all of those things, but the mentorship of the teachers helped me to create a project (Alla Boara) that has now become the driving force behind my entire career. I can definitively say that because of this program and the mentorship I received from professors, my career and life have changed for the better. I am eternally grateful for this opportunity and transformative experience. I believe that it is imperative that this school and these programs continue to be supported so that student’s lives and futures can continue to be positively influenced by one of the main things that makes us human, the ability to express ourselves through the arts.",
    ],
    imgSrc: anthonyTaddeo,
    credentials: {
      jobTitle: "Alla Boara",
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
  },
  "jordan-grantonic": {
    name: "Jordan Grantonic",
    description: [
      `My name is Jordan Grantonic, I was born in Youngstown, OH and I am a 2019 graduate of
      YSU’s Dana School of Music with my B.M. in violin performance. When I started at YSU, I was
      an English major with a full athletic scholarship for track and cross country and only decided to
      take an audition at Dana so I could continue to take lessons and play in the orchestra and a
      music minor. Shortly after the start of my first semester, I suffered a series of running-related
      injuries that effectively took me out of competition and training for much of my first two years at
      YSU. With a lot of new free time in my schedule, I started spending most of it in the practice
      rooms at Bliss Hall, rediscovering my love and passion for music alongside some of the most
      caring, talented, and dedicated teachers I have ever met. My sophomore year, I decided to
      leave athletics and changed my major to music performance and never once looked back.`,
      `I was a late bloomer compared to most other violinists at the collegiate level, and would have
      surely been left behind had I chosen to attend any university other than YSU. At other, larger
      schools, a student with my abilities as a freshman would have been placed in the lowest level
      orchestra (if allowed in any ensembles at all), and would have been relegated to half hour
      lessons with graduate students. Dr. Joseph Kromholz, Dr. Stephen Gage, Dr. Kivie
      Cahn-Lipman, Mr. Michael Strauss, Dr. Cecilia Yudha, Dr. Jena Root, Dr. Randall Goldberg, Dr.
      Dave Morgan, Dr. Kent Engelhardt, Dr. Ewelina Boczkowska, Dr. John Umble, and Dr. Steven
      Reale are just a few of the professors at the Dana School of Music who recognized my potential
      and refused to let me fall through the cracks.`,
      `
      This past spring, I graduated from the University of Colorado Boulder with my masters degree in
      violin performance and am currently pursuing an Artist Diploma, also at CU Boulder. In addition
      to regularly performing with several professional ensembles in Colorado and actively taking
      auditions for others, I am a Teaching Artist with El Sistema Colorado, an after-school music
      program for historically marginalized youth ages 5-18 that provides instruments, chamber and
      orchestra ensemble opportunities, and private lessons completely free of charge. I also teach
      outreach string sectionals in local public schools and teach private lessons and coach chamber
      groups through the Parlando School for Musical Arts, and teach private violin and viola lessons
      to students in underserved communities in Denver through Musical Mentors Collaborative.
      Additionally, I freelance around the Denver/Boulder area and perform in private event gigs for
      several contractors throughout the year, as well as contract many of my own.`,
      `The analytics firm used by the university to determine its programs’ “marketability” solely drew
      information from free online job boards such as Indeed and Glassdoor. Not a single one of the
      positions I currently hold or have held in the past, nor auditions I have taken, were ever posted
      on sites like these. We find employment through orchestra audition announcements, arts
      administration job websites, other independent job boards that are often behind paywalls, and
      word of mouth/recommendations. This still does not account for the wide variety of freelance
      work many musicians regularly engage in, or for any independently founded organizations. The
      data used to prove the College of Music’s so-called lack of marketability clearly did not consider
      a single one of these possibilities in their research and,
      judging by the way this study was conducted, it is clear (and concerning) that YSU knows
      nothing about the inner workings of the music industry and is wholly unfit to make any decisions
      regarding Dana’s ability to prepare its students for it.`,
      `The Dana School of Music has been one of the most important cultural institutions in Mahoning
      County for over 150 years and has been the catalyst for nearly all musical activity in
      Youngstown since its inception. Take a look at any arts organization in Youngstown and you will
      find that a majority of its musicians, performers, audio engineers and administration received
      their education from the Dana School of Music at YSU and decided to stick around to continue
      to use their talents to help the city flourish. In destroying the school of music, you consequently
      destroy nearly all musical activity in Mahoning Valley. While I no longer reside in Youngstown, it
      will always be my home and seeing the Dana School of Music be dismantled so callously and
      without cause is more heartbreaking than I can express through words. Without the faculty and
      programs at Dana, there is no way I or thousands of others like myself would be where we are
      today, doing what we love and inspiring the next generation to do the same.
      `,
    ],
    credentials: {
      jobTitle: "Teaching Artist",
      degree: "B.M. in violin performance",
      year: "2019",
    },
  },
  "francesca-molinaro-heath": {
    name: "Francesca (Molinaro) Heath",
    description: [
      "I would not be where I am today without the education I received from the Dana School of Music. I attended Youngstown State University from 2016-2018 and graduated with a Master of Music in Vocal Performance. My education from YSU has awarded me many successes such as a Young Artist with Pittsburgh Festival Opera, a Young Artist with Opera Western Reserve, an Adjunct Voice Lecturer at Frostburg State University, an Elementary Music Teacher, an Assistant Middle School Choir Director, and a soprano finalist with the US Army Chorus. I urge you to please reconsider discontinuing any undergraduate and graduate music programs as well as discharging any members of the music faculty. I have friends and colleagues from Dana who have went on to perform with the Youngstown Symphony Orchestra and Opera Western Reserve as professional artists. The musical performances at YSU serve as music education, culture, and appreciation for the arts in the community. Taking these degrees away will dramatically affect the high level of these performances. Again, I urge you to please reconsider these decisions for the sake of Youngstown and the surrounding communities.",
    ],
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
  },
  "stephen-philip-harvey": {
    name: "Stephen Philip Harvey",
    description: [
      "I’m at 2016 graduate of the Dana School of Music. Without the tutelage of professors at the Dana School of Music, I would’ve never began to actualize my potential as a composer, performer, scholar, and educator. Professors like Dave Morgan and Kent Engelhardt are invaluable to the university’s history as a phenomenal music school and artistic destination for future students. Its vibrant and diverse programs create an environment of musical opportunity and collaboration. Without the diversity in offerings, this culture will wither as quickly as a malnourished rose. When the Dana School of Music is reduced to financial figures it devalues the culture and history of the program and the musical impact of its faculty and graduates. This music school is a rose and should be nurtured. The concerning potential cuts to the music program uproot the culture, the school, and its impact on current and future students.",
    ],
    credentials: {
      jobTitle: "Adjust Professor of Music",
      degree: "M.M. in Jazz Studies",
      year: "2016",
    },
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
};