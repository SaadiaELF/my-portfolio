import feedbackTrackerImg from "../public/projects/cyf-tracker.png";
import countriesImg from "../public/projects/countries.png";
import tvShowsImg from "../public/projects/tv-shows.png";
import cyfProducts from "../public/projects/cyf-products.png";
import simplyImg from "../public/projects/simply.png";

const projects = [
  {
    title: "Simply Fashion Store",
    github: "https://github.com/SaadiaELF/simply-store.git",
    url: "https://simply-store-five.vercel.app/",
    image: simplyImg,
    description:
      "E-commerce mock website using Shopify mock shop to build a product page where a customer can view the details of a product and add to basket/purchase.",
    tech_stack: ["Next.js", "React", "TypeScript", "JavaScript"],
  },
  {
    title: "CYF Products",
    github: "",
    url: "",
    image: cyfProducts,
    description:
      "Developed and maintained solutions for 4 software products : Dashboard (CRM to manage students and volunteers), CYF Forms (Students  and volunteers registration forms), Intro To Digital - ITD (Student Application Process), CYF API (API to connect ITD, Forms and Dashboard)",
    tech_stack: ["React", "Bootstrap", "Express", "MongoDB", "JavaScript"],
  },
  {
    title: "CYF_Feedback Tracker",
    github:
      "https://github.com/SaadiaELF/wm4-1-techieelites-feedbacktracker.git",
    url: "https://cyf-feedback-tracker.onrender.com/",
    image: feedbackTrackerImg,
    description:
      "The Feedback Tracker App is a powerful tool designed to help students and mentors alike to track progress and provide valuable feedback throughout a course. With this app, students can easily send feedback about their progress, while mentors can add their own feedback about how their students are doing.",
    tech_stack: ["React", "Material UI", "NodeJS", "ExpressJS", "Postgresql"],
  },
  {
    title: "Countries",
    github: "https://github.com/SaadiaELF/countries-react.git",
    url: "https://cyf-saadiaelf-countries-react.netlify.app/",
    image: countriesImg,
    description:
      "This is a React-based web application that provides information on countries around the world. With this app, you can search for a country, view its basic information, such as its population and capital city. You can also filter countries by region.",
    tech_stack: ["React"],
  },
  {
    title: "TV Shows",
    github: "https://github.com/SaadiaELF/tv-show-dom-project.git",
    url: "https://cyf-saadiaelf-tv.netlify.app/",
    image: tvShowsImg,
    description:
      "The TV show project that utilizes CSS, HTML, JavaScript, and DOM manipulation is a highly functional and impressive application. The application provides users with the ability to display TV shows, view lists of episodes, and search for shows and episodes based on the TV Maze API.",
    tech_stack: ["HTML", "CSS", "Javascript"],
  },
];

export default projects;
