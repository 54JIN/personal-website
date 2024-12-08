import { motion } from "framer-motion";

import "../../Assets/Styles/global.css";

//Images
import GithubLogo from "../../Assets/Images/GithubLogo.svg";
import LinkedlnLogo from "../../Assets/Images/LinkedlnLogo.svg";
import EmailLogo from "../../Assets/Images/EmailLogo.svg";

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
        <h1 className="text-4xl text-gradient">Get In Touch</h1>
        <p className="text-md text-secondary">
          Looking forward to hearing from you!
        </p>
        <div className="Footer-Images Welcome-Images-Container">
          <a href="https://github.com/54JIN" target="_blank" rel="noreferrer">
            <img src={GithubLogo} className="BG4" alt="Github Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/sajin-saju-917117200/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedlnLogo} className="BG4" alt="Linkdeln Logo" />
          </a>
          <img
            src={EmailLogo}
            className="BG4 emailClick"
            alt="Email Logo"
            onClick={() => {
              navigator.clipboard.writeText("sajin.saju2022@gmail.com");
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Welcome;
