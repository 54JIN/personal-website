import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "1",
            company: "GAF Materials Corporation", 
            position: "DATA & RPA ANALYST/INTERN", 
            details: [
                "Automated competitor data collection by developing Python scripts for web scraping using Beautiful Soup and Requests, reducing manual efforts by 70% and processing time by two months.", 
                "Established a communication framework between RPA and Marketing & Sales teams, improving project updates and data structuring to enhance productivity, efficiency, and quality assurance.", 
                "Built an automated system for extracting and structuring competitor data, ensuring 100% accuracy and seamless integration with Google Sheets, improving analysis efficiency by 75%.", 
                "Identified and resolved a major data vulnerability on the customer site, safeguarding sensitive contractor information and significantly enhancing data security.", 
                "Collaborated with colleagues and clients on design, product management, and process improvements with agile work methodologies, resulting in greater operational efficiency."
            ]
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
                <div className="Experience-Content">
                    <div className="Experience-Content-Tabs">
                        <h1>Experience</h1>
                        <div className="Experience-Content-Tabs-Button-Section">
                            <button className={this.state.active === "1"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("1","GAF Materials Corporation", "DATA & RPA ANALYST/INTERN", [
                                "Automated competitor data collection by developing Python scripts for web scraping using Beautiful Soup and Requests, reducing manual efforts by 70% and processing time by two months.", 
                                "Established a communication framework between RPA and Marketing & Sales teams, improving project updates and data structuring to enhance productivity, efficiency, and quality assurance.", 
                                "Built an automated system for extracting and structuring competitor data, ensuring 100% accuracy and seamless integration with Google Sheets, improving analysis efficiency by 75%.", 
                                "Identified and resolved a major data vulnerability on the customer site, safeguarding sensitive contractor information and significantly enhancing data security.", 
                                "Collaborated with colleagues and clients on design, product management, and process improvements with agile work methodologies, resulting in greater operational efficiency."
                            ])}>GAF</button>
                            <button className={this.state.active === "2"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("2","RUMAD", "ASSOCIATE FULL STACK DEVELOPER & MENTOR", [
                                "Developed and launched interactive UI components for a vacation app using front-end development techniques utilizing React.js, SwiftUI, & Android Studio, which enhanced user engagement by 35%.", 
                                "Documented software designs & developments, contributed to design of architecture, & code reviews.", 
                                "Optimized software performance through efficient coding techniques & testing, achieving a 20%reduction in load times and a 45% decrease in system crashes, significantly improving user experience."
                            ])}>RUMAD</button>
                            <button className={this.state.active === "3"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("3","HACKATHON", "BACKEND DEVELOPER", [
                                "Collaborated closely with a team of skilled programmers to develop distinctive applications under stringent time constraints. Throughout this process, we established clear communication channels to uphold rigorous quality assurance standards for the final deliverables. Our programming repertoire encompassed a range of languages, including Java, Python, JavaScript, MySQL, CSS, and C, enabling us to address each project's diverse requirements effectively."])}>Hackathon</button>
                        </div>
                    </div>
                    <div className="Experience-Content-Seperator"></div>
                    <div className="Experience-Content-Information">
                        <h1>{this.state.company}</h1>
                        <div className="Experience-Content-Detail">
                            <h2>{this.state.position}</h2>
                            <ul>
                                {this.state.details.map((detail, index) => {
                                    return <li>{detail}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;