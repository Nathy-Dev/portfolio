let getBody = document.body;
let getTheme = document.querySelector(".theme");
let getThemeMode = getTheme.querySelectorAll("span");
let darkMode = localStorage.getItem("darkmode");

//.......................dark mode
if (darkMode === "enabled") {
  getBody.classList.add("dark-mode");
  getThemeMode.forEach((element) => {
    element.id === "disactive-mode" ? "active-mode": "active-mode";
  });
}

getTheme.addEventListener("click", () => {
  if (darkMode !== "enabled") {
    localStorage.setItem("darkmode", "enabled");
    getBody.classList.toggle("dark-mode");
  } else {
    localStorage.setItem("darkmode", null);
    getBody.classList.remove("dark-mode");
  }

  getThemeMode.forEach((element) => {
    element.id === "disactive-mode"
    ? (element.id = "active-mode"): (element.id = "disactive-mode");
  });
});

//....................... menu nav
let menuNavOpen = document.querySelector("#menu-nav-open");
let menuNavClose = document.querySelector("#menu-nav-close");
let conNav = document.querySelector("nav");
const mainContent = document.getElementById('main-content');
const navAnchors = document.querySelectorAll('.navLink');

menuNavOpen.addEventListener("click", () => {
  mainContent.classList.add('blur');
  document.body.classList.add("no-scroll");
  conNav.classList.add('active');
  menuNavOpen.style.display = "none";
  menuNavClose.style.display = "block";
  header.style.cssText =
  "position: fixed; top: 0; z-index: 10000000;  opacity:0.97";
});

menuNavClose.addEventListener("click", () => {
  mainContent.classList.remove('blur');
  document.body.classList.remove("no-scroll");
  conNav.classList.remove('active');
  menuNavOpen.style.display = "block";
  menuNavClose.style.display = "none";
});

//Close the menu if clicked outside
document.addEventListener("click", function (event) {
  const isClickInsideMenu = conNav.contains(event.target);
  const isClickOnToggle = menuNavOpen.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    mainContent.classList.remove('blur');
    document.body.classList.remove('no-scroll');
    conNav.classList.remove('active');
    menuNavOpen.style.display = "block";
    menuNavClose.style.display = "none";
  }
});

// Close menu when a nav link is clicked
navAnchors.forEach(link => {
  link.addEventListener('click', () => {
    mainContent.classList.remove('blur');
    document.body.classList.remove('no-scroll');
    conNav.classList.remove('active');
    menuNavOpen.style.display = "block";
    menuNavClose.style.display = "none";
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 767) {
    conNav.style.display = "flex";
    menuNavOpen.style.display = "none";
    menuNavClose.style.display = "none";
  } else {
    conNav.style.display = "none";
    menuNavOpen.style.display = "block";
    menuNavClose.style.display = "none";
  }
});

//............................Periodically change the role text
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    // Clear the static word so it doesn't overlap
    document.getElementById("typed").textContent = "";
    new Typed("#typed", {
      strings: ["Programmer", "Freelance Developer", "UI/UX Designer", "Junior Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true
    });
  }, 3000); // Delay of 3 seconds (3000 milliseconds)
});

//............................ for skills sections
let skillIcons = document.querySelector(".skill-icons");

let iconsLogo = [
  "icon-skills/icon-javscript.svg",
  "icon-skills/icon-css.svg",
  "icon-skills/icon-html.svg",
  "icon-skills/icon-wordpress.svg",
  "icon-skills/icon-canva.svg",
  // "icon-skills/icon-express.svg",
  // "icon-skills/icon-nest.svg",
  // "icon-skills/icon-socket.svg",
  // "icon-skills/icon-postgresql.svg",
  // "icon-skills/icon-mongodb.svg",
  // "icon-skills/icon-sass.svg",
  // "icon-skills/icon-tailwindcss.svg",
  // "icon-skills/icon-figma.svg",
  // "icon-skills/icon-cypress.svg",
  // "icon-skills/icon-storybook.svg",
  // "icon-skills/icon-git.svg",
];

let iconsTitle = [
  "javascript",
  "css",
  "html",
  "wordpress",
  "canva",
  // "express.js",
  // "nest.js",
  // "socket.io",
  // "postgreSQL",
  // "mongoDB",
  // "sass/scss",
  // "tailwindcss",
  // "figma",
  // "cypress",
  // "storybook",
  // "git",
];

if (!getBody.className) {
  iconsLogo = [
    "icon-skills/icon-javscript.svg",
    "icon-skills/icon-css.svg",
    "icon-skills/icon-html.svg",
    "icon-skills/icon-wordpress.svg",
    "icon-skills/icon-canva.svg",
    // "icon-skills/icon-expressdek.svg",
    // "icon-skills/icon-nest.svg",
    // "icon-skills/icon-socketdrk.svg",
    // "icon-skills/icon-postgresql.svg",
    // "icon-skills/icon-mongodb.svg",
    // "icon-skills/icon-sass.svg",
    // "icon-skills/icon-tailwindcss.svg",
    // "icon-skills/icon-figma.svg",
    // "icon-skills/icon-cypressdrk.svg",
    // "icon-skills/icon-storybook.svg",
    // "icon-skills/icon-git.svg",
  ];
}

for (let i = 0; i < iconsLogo.length; i++) {
  let createContentSkills = document.createElement("div");
  let createIcons = document.createElement("img");
  let createIconsTitle = document.createElement("span");

  // Set attributes
  createIcons.setAttribute("src", iconsLogo[i]);
  createIcons.setAttribute("alt", iconsTitle[i]);
  createContentSkills.className = iconsTitle[i];
  createIconsTitle.innerText = iconsTitle[i];

  // Append elements
  createContentSkills.appendChild(createIcons);
  createContentSkills.appendChild(createIconsTitle);
  skillIcons.appendChild(createContentSkills);
}

//...................Sticky header on scroll
let header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 15) {
    header.style.cssText =
    "position: fixed; top: 0; z-index: 10000000;  opacity: 0.9";
  } else {
    header.style.cssText =
    "position: relative; top: 0; z-index: 10000000000000;  opacity: 1";
  }
});


// //.......................work section
function createProject( {
  image,
  alt,
  title,
  description,
  github,
  skills
}) {
  let projectElement = document.querySelector(".projects");

  let createContentPrjct = document.createElement("article");
  createContentPrjct.className = "project";

  let createContentPrjctImg = document.createElement("figure");
  createContentPrjctImg.className = "project__img";

  let createPrjctImg = document.createElement("img");
  createPrjctImg.src = image;
  createPrjctImg.alt = alt;

  let createContentPrjctInfo = document.createElement("div");
  createContentPrjctInfo.className = "card__content";

  let createContentPrjctTitle = document.createElement("h1");
  createContentPrjctTitle.className = "card__title";
  createContentPrjctTitle.innerHTML = title;

  let createContentPrjctDesc = document.createElement("p");
  createContentPrjctDesc.className = "card__description";
  createContentPrjctDesc.innerHTML = description;

  let createLinktoGit = document.createElement("a");
  createLinktoGit.href = github;
  createLinktoGit.target = "_blank";
  createLinktoGit.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>';

  let createUlForSkills = document.createElement("ul");
  createUlForSkills.className = "card__skills";

  // Append structure
  projectElement.appendChild(createContentPrjct);
  createContentPrjct.appendChild(createContentPrjctImg);
  createContentPrjct.appendChild(createContentPrjctInfo);
  createContentPrjctImg.appendChild(createPrjctImg);
  createContentPrjctInfo.appendChild(createContentPrjctTitle);
  createContentPrjctInfo.appendChild(createContentPrjctDesc);
  createContentPrjctInfo.appendChild(createUlForSkills);
  createContentPrjctInfo.appendChild(createLinktoGit);

  // Add skills
  skills.forEach(skill => {
    let createLiForSkill = document.createElement("li");
    createLiForSkill.className = "skill";
    createLiForSkill.innerHTML = skill;
    createUlForSkills.appendChild(createLiForSkill);
  });
}

const projects = [{
  image: "images/Otp.jpg",
  alt: "otp gen project",
  title: "OTP Generator",
  description: "A secure OTP Generator app that sends 6-digit verification codes via email using EmailJS (no need for backend server), with built-in expiration timer (10 mins) and verification logic.",
  github: "https://codepen.io/Nathy-Dev/pen/NPPPXqj",
  skills: ["JavaScript", "EmailJS", "HTML", "CSS"]
},
  {
    image: "images/portfolio-project.jpg",
    alt: "portfolio project",
    title: "My First portfolio",
    description: "This is my very first personal portfolio website. It features a clean and simple design with four main sections: Home, About Me, Projects, and Contact. Here, I focused on a mobile-first approach before building a responsive layout using media queries to ensure a smooth experience across mobile, tablet, and desktop screens. I didn’t make use of it afterall.",
    github: "https://nathydev.tiiny.host",
    skills: ["JavaScript", "Typed.js", "CSS", "HTML", "Canva"]
  },
  {
    image: "images/awp.jpg",
    alt: "church project",
    title: "AWP Church Website",
    description: "I designed and developed a fully responsive website for Apostles of the Word and Prayer Worldwide using only HTML, CSS, and JavaScript. The site features sermon downloads, live service access via Telegram, dynamic sermon filtering, a mobile-friendly navigation menu with smooth slide-in animations, and clean metadata for SEO. It’s structured to support both individual messages and sermon series. The entire project was coded on mobile, showcasing my adaptability and front-end development skills without relying on frameworks or build tools.",
    github: " ",
    skills: ["JavaScript", "CSS", "HTML", "Canva"]
  }];

projects.forEach(project => createProject(project));


//.......................Testimonials section
// Array of testimonial data
const testimonials = [{
  name: "Bassey Anwan",
  role: "CEO - Bhee Unique Salon",
  quote: `“Nathaniel delivered exactly what I needed—a clean and classy website that matches my salon’s brand. He was patient, creative, and made everything simple to understand. Clients now book appointments more easily, and I’ve gotten compliments on how nice the site looks!”`
},
];

// Select the container for testimonials
const testimonialsContainer = document.querySelector(".Testimonials");

// Loop through each testimonial and create elements
testimonials.forEach(({
  name, role, quote
}) => {
  const card = document.createElement("div");
  card.className = "card__Testimonials";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "img__Testimonial";
  imgWrapper.innerHTML = '<i class="fa-solid fa-user"></i>';

  const description = document.createElement("p");
  description.className = "card__description";
  description.textContent = quote;

  const titleWrapper = document.createElement("div");
  titleWrapper.className = "card__title";

  const nameEl = document.createElement("h1");
  nameEl.className = "card__name";
  nameEl.textContent = name;

  const span = document.createElement("span");
  span.className = "card__span";
  span.textContent = role;

  titleWrapper.appendChild(nameEl);
  titleWrapper.appendChild(span);

  card.appendChild(imgWrapper);
  card.appendChild(description);
  card.appendChild(titleWrapper);

  testimonialsContainer.appendChild(card);
});
