import { motion } from "framer-motion";

// import "./Welcome.css";
import "../../Assets/Styles/global.css"

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
        <h1 className="text-4xl text-gradient">Experience</h1>
        <p className="text-md text-secondary">My work experience</p>
      </div>
    </motion.div>
  );
}

export default Welcome;
