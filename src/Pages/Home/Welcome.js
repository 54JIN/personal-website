import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import "./Welcome.css";
import "../../Assets/Styles/global.css"

//Images
import profilePic from "../../Assets/Images/profile.jpg";

//Components
import Experience from '../Experience/Experience';

function Welcome() {
  return (
    <motion.div
      className="Welcome"
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
      <div className="Welcome-Container">
        <img src={profilePic} alt="Profile" />
        <p className="text-md text-secondary">Hi I'm Sajin Saju</p>
        <h1 className="text-4xl text-gradient">Crafting Excellence Across Every Pixel</h1>
        <Link key={Experience} to={"/personal-website/experience"} ><button className="event-button">Experience</button></Link>
      </div>
    </motion.div>
  );
}

export default Welcome;
