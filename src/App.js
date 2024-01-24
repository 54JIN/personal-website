import './App.css';
import Projects from './Projects';
import Noteworthy from './Noteworthy';
import Carousel from "./Carousel";
import AboutMe from './AboutMe';
import Experience from './Experience';
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
      image: todo,
      title: "1"
    },
    {
      image: todo,
      title: "2"
    },
    {
      image: todo,
      title: "3"
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
      <div className="Home">
        <div className="Home-Header">
          <img src={logo} alt="logo" onClick={() => refreshPage()}/>
          <div className="Home-Header-Links">
            <button onClick={() => scrollToSection(caseStudies)}>Case Studies</button>
            <button onClick={() => scrollToSection(experience)}>Experience</button>
            <button onClick={() => scrollToSection(contact)}>Contact</button>
          </div>
        </div>
        <div className="Home-Content">
          <h1>Sajin Saju</h1>
          <ul>
            <li>Software Engineer</li>
            <li>Data Analyst</li>
            <li>Rutgers New Brunswick</li>
          </ul>
          <button onClick={() => scrollToSection(aboutMe)}>About Me</button>
        </div>
      </div>
      <div className="Featured" ref={caseStudies}>
        <h2>Featured Projects</h2>
        <div className="Featured-Projects">
            <Projects image={pallets} link="https://54jin.github.io/color-project/"/>
            {/* <Projects image={pallets}/>
            <Projects image={pallets}/>
            <Projects image={pallets}/>
            <Projects image={pallets}/> */}
        </div>
      </div>
      <div className="Other_Projects">
        <h2>Other Noteworthy Projects</h2>
        <Carousel images={NoteworthyProjects}/>
        <div className="Other_Projects-Noteworthy">
          <Noteworthy image={todo}/>
          <Noteworthy image={todo}/>
          <Noteworthy image={todo}/>
          <Noteworthy image={todo}/>
          <Noteworthy image={todo}/>
          <Noteworthy image={todo}/>
        </div>
      </div>
      <div ref={experience}><Experience /></div>
      <div ref={aboutMe}><AboutMe image={profile}/></div>
      <div className="Contact" ref={contact}>
        <img src={logo} alt="logo" />
        <p>sajin.saju2022@gmail.com</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/sajin-saju-917117200/" target="_blank" rel="noreferrer">Linkedin</a></li>
          <li><a href="https://github.com/54JIN" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
