import "./SampleProject.css";
import "../Styles/global.css";

function SampleProject({ Contents }) {
  return (
    <div className="SampleProject">
      <div className="SampleProject-Image">
        <img src={Contents.image} alt="Profile" />
      </div>
      <div className="SampleProject-Content">
        <p className="text-lg text-primary">{Contents.title}</p>
        <p className="text-md text-secondary">{ Contents.description }</p>
      </div>
    </div>
  );
}

export default SampleProject;
