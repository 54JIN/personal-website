import { motion } from "framer-motion";
import "./Projects.css";

import "../Styles/global.css";

//Components
import Header from "./Header";
import Footer from "./Footer";

function Projects({ Content }) {
  const {
    Title,
    Sub_Title,
    img1,
    skills,
    Intro_Title,
    Description,
    Link,
    Video,
  } = Content;
  return (
    <div className="Projects">
      <Header />
      <motion.div
        className="Projects-Welcome"
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
        }}
      >
        <div className="Projects-Welcome-Container">
          <h1 className="text-4xl text-gradient">{Title}</h1>
          <p className="text-md text-secondary">{Sub_Title}</p>
        </div>
      </motion.div>
      <div className="WorkExperience">
        <div className="WorkExperience-Container">
          <div className="WorkExperience-Container-Left">
            <div>
              <p className="text-lg text-primary font-weight-bold">
                {Intro_Title}
              </p>
              {Description.map((bulletPoint) => {
                return <p className="text-md text-primary">{bulletPoint}</p>;
              })}
            </div>
          </div>
          <div className="WorkExperience-Container-Right">
            <img src={img1} alt="Project" />
          </div>
        </div>
      </div>
      <div className="Projects-Video">
        <h3 className="text-3xl text-primary">Video</h3>
        <video src={Video} autoPlay loop muted disablePictureInPicture />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
