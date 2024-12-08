import "./WorkExperience.css";
import "../../Assets/Styles/global.css";

function WorkExperience({ Content }) {
  return (
    <div className="WorkExperience">
      <div className="WorkExperience-Container">
        <div className="WorkExperience-Container-Left">
          <div>
            <p className="text-lg text-primary font-weight-bold">{Content.Company}</p>
            {Content.details.map((bulletPoint) => {
              return (
                <p className="text-md text-primary">
                  {bulletPoint}
                </p>
              );
            })}
          </div>
        </div>
        <div className="WorkExperience-Container-Right">
          <img src={Content.image} alt="Company" />
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
