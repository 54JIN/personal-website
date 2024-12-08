import "./About.css";
import "../../Assets/Styles/global.css";

//Components
import Carousel from "../../Assets/Components/Carousel";

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
      <div className="About-Container">
        <div className="About-Container-Left">
          <div>
            <p className="text-md text-primary">About Me</p>
            <div className="About-Container-Left-Content-Paragraph">
              <p className="text-md text-primary">
                I'm a Full Stack Software Developer
              </p>
              <p className="text-md text-secondary">
                {" open to work and new opportunities. "}
              </p>
              <p className="text-md text-primary">
                Over the past five years, I have invested my time and efforts
                into project based learning, participation in hackathons,
                internships, Udemy certifications, and a bachelors of science
                degree in computer science from Rutgers University - New
                Brunswick.
              </p>
            </div>
          </div>
          <div className="About-Container-Left-Metrics-Container">
            <div className="About-Container-Left-Metrics-Container-Content">
              <div className="About-Container-Left-Metrics-Container-Content-Value">
                <h3 className="text-4xl text-primary">4</h3>
                <h3 className="text-3xl text-secondary">+</h3>
              </div>
              <p className="text-md text-secondary">Educational Experience</p>
            </div>
            <div className="About-Container-Left-Metrics-Container-Content">
              <div className="About-Container-Left-Metrics-Container-Content-Value">
                <h3 className="text-4xl text-primary">2</h3>
                <h3 className="text-3xl text-secondary">+</h3>
              </div>
              <p className="text-md text-secondary">Internships Experience</p>
            </div>
          </div>
        </div>
        <div className="About-Container-Right">
          <Carousel Contents={blueprint} />
          {/* <h1 className="text-primary">Hello</h1> */}
        </div>
      </div>
    </div>
  );
}

export default About;
