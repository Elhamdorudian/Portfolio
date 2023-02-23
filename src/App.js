import { BrowserRouter as Router} from "react-router-dom"
import Navbar from "./layout/Navbar";
import Main from "./layout/Main";
import Loading from "./layout/Loading";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


//--------socials imports--------//
import Github from "../src/assets/icons/github.svg";
import Linkedin from "../src/assets/icons/linkedin.svg";
// import Instagram from "../src/assets/icons/instagram.svg";
import Link from "../src/assets/icons/link.svg";

//--------Projects imports--------//
// import Todo from "../src/assets/images/Todo.jpeg";
import MyBlog from "../src/assets/images/MyBlog.jpeg";
import Dashboard from "../src/assets/images/Dashboard.png";
import WeatherApp from "../src/assets/images/WeatherApp.jpeg";
import RepoList from "../src/assets/images/RepoList.png";
import Footer from "./layout/Footer";


//--------AOS library for animation on scroll--------//
import AOS from "aos";
import "aos/dist/aos.css";

const navbarMenu = [
  { path: "#about", id: 0, name: "about", number: "01", title: "About" },
  {
    path: "#experiences",
    id: 1,
    name: "experiences",
    number: "02",
    title: "Experiences",
  },
  {
    path: "#projects",
    id: 2,
    name: "projects",
    number: "03",
    title: "Projects",
  },
  { path: "#contact", id: 3, name: "contact", number: "04", title: "Contact" },
];

const socials = [
  {
    id: 0,
    name: "github",
    link: "https://github.com/Elhamdorudian",
    icon: Github,
    path: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z",
  },
  {
    id: 1,
    name: "linkedin",
    link: "https://www.linkedin.com/in/elham-doroodian/",
    icon: Linkedin,
    path: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z",
  },
  // {
  //   id: 2,
  //   name: "instagram",
  //   link: "",
  //   icon: Instagram,
  //   path: "M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z",
  // },
];

const links =[
  {
    id: 0,
    icon: Github,
    path: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z",
  },
  {
    id: 1,
    icon: Link,
    path: "M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
  }
];

const projects = [
  {
    id:0,
    title:"Filtering Dashboard",
    img: Dashboard,
    content: "A dashboard to get and filter data plans based on several criterias like OfferID,Service,Type of customers,Duration",
    // link:"https://github.com/Elhamdorudian/filtering-dashboard",
    github:"https://github.com/Elhamdorudian/filtering-dashboard"
  }
  ,
  {
    id:1,
    title:"Personal Blog",
    img: MyBlog,
    content: "This is a Personal sample blog written in React.js where I talk about my interests and daily life.",
    link:"https://elhamdorudian.github.io/eli-blog/",
    github:"https://github.com/Elhamdorudian/eli-blog"
  },
  {
    id:2,
    title:"Weather Wizard",
    img: WeatherApp,
    content: "Here you can find a weather forcast for cities around the world. It uses an API from Accuweather and is written with vanilla Javascript. The app also shows you the weather image and Icon and has an acceptable visualization same as well known ones.",
    // link:"https://github.com/Elhamdorudian/my-weather-app",
    github:"https://github.com/Elhamdorudian/my-weather-app"
  },
  {
    id:3,
    title:"Repo Explorer",
    img: RepoList,
    content: "This Project uses Node/express and TypeScript/React to aggregate Github repos using several APIs, and an internal src, showing them in a grid list, with details pages",
    // link:"https://github.com/Elhamdorudian/repository-explorer",
    github:"https://github.com/Elhamdorudian/repository-explorer"
  },
  // {
  //   id:3,
  //   title:"Todo List",
  //   img: Todo,
  //   content: "Use Todo List app to add your tasks and manage them easily. You can both add tasks and delete them if needed. It has also a search bar where you can easily search the tasks.",
  //   link:"https://elhamdorudian.github.io/Todo_List/",
  //   github:"https://github.com/Elhamdorudian/Todo_List"
  // },
  
    ];

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoading,setIsLoading] = useState(true);


  //---------------- Experiences -----------------//
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Front-End Developer",
      isSelected: true,
      company: "Mobile Telecommunication Company of Iran",
      location: "Tehran, Iran",
      date: "Dec. 2019 - Sep. 2022",
      content: "I have been working as a front-end developer for almost two years. some of my skills are: JS, React, TS, SASS, React Native, MUI,...",
    },
    {
      id: 2,
      title: "Digital Services Analyst",
      isSelected: false,
      company: "Mobile Telecommunication Company of Iran",
      location: "Tehran, Iran",
      date: "Jun. 2016 - Nov. 2019",
      content: "I was a Digital Services Analyist in a Telecomunication company acting as a facilitator between technical and business teams for more than 4 years, familiar with Jira, PowerBI, Agile, Scrum, ...",
    },
    {
      id: 3,
      title: "MBA",
      isSelected: false,
      company: "Sharif University of Technology",
      location: "Tehran, Iran",
      date: "Sep 2013 - Feb 2016",
      content: "I have studied MSc. in Business Administration with specialization in marketing and fincance.",
    },
    {
      id: 4,
      title: "Engineering",
      isSelected: false,
      company: "Sharif University of Technology",
      location: "Tehran, Iran",
      date: "Sep 2008 - Aug 2013",
      content: "As I have always been interested in math, analytical thinking, and modeling... So I had decided to study Engineering in my BSc.",
    },
]);

  useEffect(() => {

   setTimeout(() => {
      setIsLoading(false)
      }, 800);
      AOS.init({duration:500,
        delay:0,
        easing: "ease-in-out",
      });
  },[]);

  return (
      <Router>

        {isLoading && <Loading/>}
        {!isLoading && <Navbar navbarMenu={navbarMenu} openMenu={openMenu} setOpenMenu={setOpenMenu} />}
        {!isLoading && <Main socials={socials} links={links} projects={projects} openMenu={openMenu} experiences={experiences} setExperiences={setExperiences} />}
        {!isLoading && <Footer/>}

      </Router>  
  );
}

export default App;

