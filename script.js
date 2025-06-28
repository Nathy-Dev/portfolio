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

 function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setViewportHeight();
  window.addEventListener('resize', setViewportHeight);

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
  "icon-skills/icon-tailwindcss.svg",
  // "icon-skills/icon-figma.svg",
  // "icon-skills/icon-cypress.svg",
  // "icon-skills/icon-storybook.svg",
  // "icon-skills/icon-git.svg",
];

let iconsTitle = [
  "JavaScript",
  "CSS",
  "HTML",
  "wordpress",
  "canva",
  // "express.js",
  // "nest.js",
  // "socket.io",
  // "postgreSQL",
  // "mongoDB",
  // "sass/scss",
  "Tailwind CSS",
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
    "icon-skills/icon-tailwindcss.svg",
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
function createProject({
  image,
  alt,
  title,
  description,
  github,
  skills,
  type = "image"
}) {
  let projectElement = document.querySelector(".projects");

  let createContentPrjct = document.createElement("article");
  createContentPrjct.className = "project";

  let createContentPrjctImg = document.createElement("figure");
  createContentPrjctImg.className = "project__img";

  // Create img or video
  let createPrjctMedia;
  if (type === "video") {
  createPrjctMedia = document.createElement("video");
  createPrjctMedia.src = image;
  createPrjctMedia.alt = alt;
  createPrjctMedia.loop = true;
  createPrjctMedia.autoplay = true;
  createPrjctMedia.muted = true;
  createPrjctMedia.playsInline = true; // For mobile support
  createPrjctMedia.className = "project__media";
} else {
  createPrjctMedia = document.createElement("img");
  createPrjctMedia.src = image;
  createPrjctMedia.alt = alt;
  createPrjctMedia.className = "project__media";
}

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
  createContentPrjctImg.appendChild(createPrjctMedia);
  createContentPrjct.appendChild(createContentPrjctInfo);
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
    image: "images/awp.jpg",
    alt: "church project",
    title: "AWP Church Website",
    description: "Designed and built a scalable sermon management system for Apostles of the Word and Prayer Worldwide. Created a single-template sermon page that fetches data dynamically for 100+ sermons. Developed a PHP proxy downloader to bypass Internet Archive’s preview and force direct downloads. Improved user experience with seamless, fast, and mobile-friendly sermon access.",
    github: "https://nathy-dev.github.io/awp-media/",
    skills: ["JavaScript", "CSS", "HTML", "Canva", "php"]
  },
  {
    image: "images/goh.png",
    alt: "GOH Graphix",
    title: "GOH Graphix Landing Page",
    description: "Designed and built a custom website for GOH Graphix, a creative design studio. Focused on clean visuals, responsive layout, and smooth user experience. Added dynamic features like a testimonial carousel and filterable portfolio. Built entirely with HTML, CSS, and JavaScript—no frameworks used.",
    github: "https://nathy-dev.github.io/GOH-Graphix/",
    skills: ["CSS", "HTML", "JavaScript", "Canva"]
  },
  {
    image: "images/chill-wave.png",
    alt: "Chill Wave Lounge",
    title: "ChillWave Lounge",
    description: "A fully responsive lounge website built with pure HTML, CSS3, and vanilla JavaScript. This personal project demonstrates my ability to design custom UIs, implement mobile-first layouts, and create an interactive navigation experience without frameworks. It reflects both creative design thinking and clean, maintainable code practices.",
    github: "https://nathy-dev.github.io/chill-wave/",
    skills: ["CSS", "JavaScript",  "HTML", "Canva"]
  },
  {
    image: "images/to-do.jpg",
    alt: "to-do list app",
    title: "To-Do List App",
    description: "A responsive, interactive to-do list application built with HTML, CSS, and JavaScript. It features a clean user interface with modal-based task input, time scheduling, real-time date display, task completion checkboxes with visual feedback, and swipe-left gesture for task deletion. Tasks are saved to local storage for persistent use across sessions.",
    github: "https://nathy-dev.github.io/to-doList/",
    skills: ["JavaScript", "CSS", "HTML", "Canva"]
  },
  {
    image: "images/Otp.jpg",
    alt: "otp gen project",
    title: "OTP Generator",
    description: "A secure OTP Generator app that sends 6-digit verification codes via email using EmailJS (no need for backend server), with built-in expiration timer (10 mins) and verification logic.",
    github: "https://codepen.io/Nathy-Dev/pen/NPPPXqj",
    skills: ["JavaScript", "EmailJS", "HTML", "CSS"]
  },
  {
  image: "videos/loginProject.mp4",
  alt: "Responsive Login/Sign-up Interface",
  title: "Responsive Login/Sign-up Interface",
  description: "A sleek and modern login/sign-up interface showcasing a smooth toggle animation that allows users to switch seamlessly between the login and registration forms. The layout is fully responsive across all screen sizes. I incorporated Boxicons and Google Fonts to give the UI a stylish, modern appearance. The form includes social login icons for future integration of external authentication platforms. Though currently front-end only, I plan to connect this project with a backend system in future updates. This will include: Form validation, User authentication, Secure database integration.",
  github: " ",
  skills: ["HTML", "CSS", "JavaScript"],
  type: "video"
}];

projects.forEach(project => createProject(project));



//.......................Testimonials section
// Array of testimonial data
const testimonials = [
  {
  name: "Daniel Usoroh",
  role: "CEO - ITZ DONE COMPANY",
  quote: `“Wow! Wow! Wow! This is so beautiful. The layout, colors, and attention to detail really stood out. You really put thought and care into every section. I'm so impressed. By the way, I'm extending an invitation for you to be one of the shareholders in my company.”`
},
  {
  name: "Bassey Anwan",
  role: "CEO - Bhee Unique Salon",
  quote: `“Nathaniel delivered exactly what I needed—a clean and classy website that matches my salon’s brand. He was patient, creative, and made everything simple to understand. Clients now book appointments more easily, and I’ve gotten compliments on how nice the site looks!”`
},
  {
  name: "Hope Iddy",
  role: "Videographer",
  quote: `“Omo I have been struggling with time management ehh... I sometimes forget some things I plan to do for the day. This To-Do List App will really help me a lot. Wow, it's really cool honestly!”`
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
