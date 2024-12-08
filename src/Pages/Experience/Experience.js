import "./Experience.css";

//Components
import Header from "../../Assets/Components/Header";
import Welcome from "./Welcome";
import WorkExperience from "./WorkExperience";
import Footer from "../../Assets/Components/Footer";

//Data
import resume from "../../Assets/Data/Resume";

function Experience() {
  return (
    <div className="Experience">
      <Header page={2} />
      <Welcome />
      <div className="Experience-resume">
        {resume.map((experience) => {
          return <WorkExperience Content={experience}/>;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
