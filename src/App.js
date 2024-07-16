import './App.css';

import Home from './Pages/Home/Home';
import Carousel from "./Pages/Home/Carousel";
import AboutMe from './Pages/Home/AboutMe';
import Experience from './Pages/Home/Experience';
import Footer from './Assets/Components/Footer';

import Pallets from './Pages/Projects/Pallets/Pallets';
import Afr from './Pages/Projects/Afr/Afr';
import TaskManager from './Pages/Projects/TaskManager/TaskManager';

import pallets from './Assets/Images/pallets.png';
import afrImg from './Assets/Images/afrImg.png';
import todo from './Assets/Images/TaskManagerImg1.jpg';

//React Scroll ref
import {useRef} from "react";

function App() {
  //React Scroll Ref
  const caseStudies = useRef(null);
  const experience = useRef(null);
  const aboutMe = useRef(null);
  const contact = useRef(null);
  
  const NoteworthyProjects = [
    {
      image: pallets,
      title: "Pallets",
      description: "Frontend developer tool to create color themes",
      link: "/personal-website/projects/pallets",
      key: Pallets,
    },
    {
      image: todo,
      title: "Task Manager",
      description: "Full-stack application dedicated to help users keep track of activities and tasks",
      link: "/personal-website/projects/task-manager",
      key: TaskManager,
    },
    {
      image: afrImg,
      title: "AFR",
      description: "Anonymous Food Review Blog dedicated to Rutgers Resteraunts",
      link: "/personal-website/projects/afr",
      key: Afr,
    }
  ]

  //React Scroll Function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  //React Refresh Page Button Function
  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Home />
      <Carousel Contents={NoteworthyProjects}/>
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
