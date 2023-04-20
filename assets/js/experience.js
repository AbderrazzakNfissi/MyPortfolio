AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Stagiaire en développement de logiciels.",
    cardImage: "data:image/jpeg;base64,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",
    place: "DIGENCY, Rabat",
    time: "(août, 2022)",
    desp: "<li>Automatisation de la génération des articles CPS et RC, deux documents essentiels pour la gestion des appels d'offres</li>"+
    "<li> Correction de bugs dans l'application afin d'améliorer sa stabilité et sa fiabilité  </li>"+
    "<li>Ajout de rôles aux utilisateurs de l'application pour une meilleure organisation des tâches et un contrôle d'accès plus efficace.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards
/*
const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
*/
// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
