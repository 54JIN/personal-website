import "./SmallSamples.css";
import "../../Assets/Styles/global.css";

//Components
import SampleProject from "../../Assets/Components/SampleProject";

//Images
import Summary from "../../Assets/Images/Summary.svg";
import IndividualStockGraph from "../../Assets/Images/IndividualStockGraph.svg";
import Graph from "../../Assets/Images/Graph.svg";

function SmallSamples() {
  const Content = [{title: "Alert Component", description: "This alert component provides users with real-time updates on stocks impacted by specific events, featuring responsive and dynamic functionality that adapts to new data.", image: Summary},{title: "Mini-Stock Component", description: "This mini-stock component delivers real-time updates on individual stocks, enabling users to quickly view key information at a glance within their dashboard.", image: IndividualStockGraph},{title: "Stock Graph Component", description: "This stock graph component visualizes the current trajectory of stock prices, utilizing real-time data for accurate rendering.", image: Graph}]

  return (
    <div className="SmallSamples">
      <div className="SmallSamples-Container">
        <h3 className="text-3xl text-primary">Small Samples</h3>
        <div className="SmallSamples-Container-Projects">
            {Content.map((context) => {
              return (
                <SampleProject Contents={context}/>
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default SmallSamples;
