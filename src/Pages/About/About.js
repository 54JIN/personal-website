import { motion } from "framer-motion";

import "./About.css";

//Components
import Header from "../../Assets/Components/Header";
import Footer from "../../Assets/Components/Footer";
import Carousel from "./Carousel";

//Images
import profilePic from "../../Assets/Images/profile-removebg.png";

function About() {
  const blueprint = [
    {
      title: "Make it",
      description:
        "I sketch wireframes and make prototypes. Talking through tactile designs existing in the browser is worth its weight. Design tools only carry you so far; the rest should be realized with a link my team can rally around.",
    },
    {
      title: "Collaborate",
      description:
        "Good design is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team. I aim to include stakeholders in my design process and create a collaborative environment that welcomes and encourages feedback.",
    },
    {
      title: "Accessible FTW",
      description:
        "I aim to make everything I design accessible to all for one main reason - it's the right thing to do. Accessible products benefit the many, not the few.",
    },
    {
      title: "Keep experimenting",
      description:
        "Everything I create is subject to change and experimentation. Not everything will work, but it's worth trying - and learning from what doesn't.",
    },
  ];

  return (
    <div className="About">
      <Header page={1} />
      <div className="About-Wrapper">
        <motion.div
          className="About-Header"
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
          <h1>I'm Sajin.</h1>
        </motion.div>
        <div className="About-Content">
          <div className="About-Content-Image">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="About-Content-Details">
            <h3>
              I'm a Full Stack Software Developer open to work and new
              opportunities.
            </h3>
            <p>
              Over the past five years, I have invested my time and efforts into
              project based learning, participation in hackathons, internships,
              Udemy certifications, and a bachelors of science degree in
              computer science from Rutgers University - New Brunswick.
            </p>
          </div>
        </div>
      </div>
      <div className="About-Collaboration">
        <div className="About-Collaboration-Details">
          <h3>
            Let's work together if you're passionate about innovation & design.
          </h3>
          <p>
            I believe innovation comes from a place of creativity,
            collaboration, and thought provoking ideas. While design comes from
            a place of perspective of human psychology.
          </p>
          <p>
            {" "}
            If you enjoy knowledge transfer and like writing clear, maintainable
            code that anyone can understand and efficient in its processes we
            will get along really well.
          </p>
        </div>
        <Carousel Contents={blueprint} />
      </div>
      <div className="About-Me-Wrapper">
        <div className="About-Me">
          <p>
            Outside of work, I like to dabble in coffee making, cooking,
            drawing, painting, hiking, and content making. If I ever get the
            chance, I would like to master mixology and photography.
          </p>
          <p>My favorite thing to spend money on is food & travel!!</p>
          <p>
            So far I have made a collection of restaurants that's worth
            re-visiting in New Jersey & New York varying from range of price and
            quality.
          </p>
          <p>
            If I can, I want to explore every nook and cranny of the world. I
            believe the world is a beautiful and a piece of art in itself; the
            greenery, smell of the ocean & forest rain, sunsets & sunrise, and
            moonlight is to be admired and cherished.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
