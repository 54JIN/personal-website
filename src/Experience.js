import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "1",
            company: "GAF Materials Corporation", 
            position: "DATA & RPA ANALYST/INTERN", 
            details: "Reduced over two months of manual labor of collecting information on GAF's Competitors' contractors by programming and automating through Python and Robotic Process Automation (RPA). Identified a significant data vulnerability in the company customer site that exposed the company's contractor list and other sensitive information. Developed and proposed solutions to the IT and Business stakeholders to protect any information easily accessible by external members. Prepared a Process Definition Documentation (PDD) with Business Analysts to map out automating additional surcharge costs before the vendors process a payment. Converted 50+ word processing files of Microsoft Word and Google Docs and ensured no formatting issues. Demoed completed work to stakeholders and explained the impact, benefits, and implementation efforts. Collaborated with colleagues and clients in the design, product management, and process improvement. Worked with vendors from UiPath and internal RPA leaders to discuss complications, irregularities, and potential technical issues with the RPA solutions built on the vendor platform."
        }
    }
    onChange = (highlight, header, sub_title, info) => {
        this.setState({
            active: highlight,
            company: header,
            position: sub_title,
            details: info
        })
    }
    render() {
        return(
            <div className="Experience">
                <h2>Experience</h2>
                <div className="Experience-Content">
                    <div className="Experience-Content-Tabs">
                        <ul>
                            <li><button className={this.state.active === "1"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("1","GAF Materials Corporation", "DATA & RPA ANALYST/INTERN", "Reduced over two months of manual labor of collecting information on GAF's Competitors' contractors by programming and automating through Python and Robotic Process Automation (RPA). Identified a significant data vulnerability in the company customer site that exposed the company's contractor list and other sensitive information. Developed and proposed solutions to the IT and Business stakeholders to protect any information easily accessible by external members. Prepared a Process Definition Documentation (PDD) with Business Analysts to map out automating additional surcharge costs before the vendors process a payment. Converted 50+ word processing files of Microsoft Word and Google Docs and ensured no formatting issues. Demoed completed work to stakeholders and explained the impact, benefits, and implementation efforts. Collaborated with colleagues and clients in the design, product management, and process improvement. Worked with vendors from UiPath and internal RPA leaders to discuss complications, irregularities, and potential technical issues with the RPA solutions built on the vendor platform.")}>GAF</button></li>
                            <li><button className={this.state.active === "2"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("2","RUMAD", "ASSOCIATE BACKEND DEVELOPER & MENTOR", "Actively contributed as a back-end developer throughout the entire project lifecycle for two substantial endeavors: a Twitter clone and a Vacation App. These projects were meticulously constructed with a firm reliance on the JavaScript ecosystem, incorporating Node.js and React.js technologies. Furthermore, the deployment was efficiently managed through platforms like Heroku and Github. To ensure seamless data management on the server side, I employed Mongoose, a cloud-based data storage solution - this strategic choice allowed for swift and efficient data retrieval, optimizing overall performance. In addition to my technical responsibilities, I established and maintained effective communication channels between front-end and back-end developers. This facilitated identifying and resolving bugs and the implementation of necessary updates, ensuring a cohesive and well-coordinated development process.")}>RUMAD</button></li>
                            <li><button className={this.state.active === "3"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("3","HACKATHON", "BACKEND DEVELOPER", "Collaborated closely with a team of skilled programmers to develop distinctive applications under stringent time constraints. Throughout this process, we established clear communication channels to uphold rigorous quality assurance standards for the final deliverables. Our programming repertoire encompassed a range of languages, including Java, Python, JavaScript, MySQL, CSS, and C, enabling us to address each project's diverse requirements effectively.")}>Hackathon</button></li>
                        </ul>
                    </div>
                    <div className="Experience-Content-Information">
                        <h2>{this.state.company}</h2>
                        <h4>{this.state.position}</h4>
                        <p>{this.state.details}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;