import { useState } from "react";
import { motion } from "framer-motion";

import "./Experience.css";

//Components
import Header from "../../Assets/Components/Header";
import Footer from "../../Assets/Components/Footer";

//Data
import resume from "../../Assets/Data/Resume";

function Experience() {
  return (
    <div className="Experience">
      <Header page={2} />
      <motion.div
        className="Experience-Header"
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
        <h1>Experience</h1>
        <p>A display of where I gained my skill sets.</p>
      </motion.div>
      <div className="Experience-Content-Wrapper">
        {resume.map((experience, idx) => (
          <div key={idx} className={`Experience-Content ${idx % 2 !== 0 ? "Experience-Content-Right" : null}`}>
            <h3>
              {experience.Company} - {experience.startDate}
            </h3>
            <p>{experience.Position}</p>
            <div className="Experience-Content-Description">
              {experience.details.map((description) => (
                <p>{description}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
