import "./Featured.css";
import "../../Assets/Styles/global.css";

//Components
import Carousel from "./Carousel";

//Data
import projects from "../../Assets/Data/Projects";

function Featured() {
  return (
    <div className="Featured">
      <div className="Featured-Container">
        <h3 className="text-3xl text-gradient">My work, Featured Projects</h3>
        <Carousel Contents={projects} />
      </div>
    </div>
  );
}

export default Featured;
