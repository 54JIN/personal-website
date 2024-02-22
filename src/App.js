import './App.css';
import Home from './Home';
import Projects from './Projects';
import Noteworthy from './Noteworthy';
import Carousel from "./Carousel";
import AboutMe from './AboutMe';
import Experience from './Experience';
import Footer from './Footer';

import logo from './logo.png';
import pallets from './pallets.png';
import todo from './todo.png';
import profile from './profile.jpg';

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
      image: pallets,
      title: "Pallets",
      description: "Frontend developer tool to create color themes",
      link: "https://54jin.github.io/color-project/"
    },
    {
      image: pallets,
      title: "Pallets",
      description: "Frontend developer tool to create color themes",
      link: "https://54jin.github.io/color-project/"
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
      <Carousel images={NoteworthyProjects}/>
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
