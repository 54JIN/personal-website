import { Link } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home';
import Carousel2 from "./Pages/Home/Carousel2";
import AboutMe from './Pages/Home/AboutMe';
import Experience from './Pages/Home/Experience';
import Footer from './Assets/Components/Footer';

import pallets from './Assets/Images/pallets.png';
import afrImg from './Assets/Images/afrImg.png';
import todo from './Assets/Images/todo.png';

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
      link: "https://54jin.github.io/color-project/"
    },
    {
      image: afrImg,
      title: "AFR",
      description: "Anonymous Food Review Blog dedicated to Rutgers Resteraunts",
      link: "https://54jin.github.io/afr/"
    },
    {
      image: todo,
      title: "Task Manager API",
      description: "Application dedicated to help users keep track of activities and tasks",
      link: "https://github.com/54JIN/task-manager-api"
    },
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
      {/* <Link key={Temp} to={'/personal-website/temp'} ><button>Test</button></Link> */}
      {/* <Carousel images={NoteworthyProjects}/> */}
      <Carousel2 images={NoteworthyProjects}/>
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
