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
      degree: "B.M. in Music Performance",
      year: "2018",
    },
    imgSrc: ericFinkelstein,
  },
};
