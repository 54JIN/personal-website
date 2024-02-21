import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "1",
            company: "GAF Materials Corporation", 
            position: "DATA & RPA ANALYST/INTERN", 
            details: ["Reduced manual data collection by over two months by automating competitor information gathering using Python and RPA, enhancing efficiency and accuracy.", 
            "Identified a major data vulnerability on the customer site, safeguarding sensitive contractor information, thus bolstering company data security.", 
            "Prepared a Process Definition Documentation (PDD) with Business Analysts, detailing surcharge cost automation, which facilitated more efficient vendor payment processing.", 
            "Collaborated with UiPath vendors and internal RPA leaders to address and resolve complications and irregularities, enhancing the reliability of RPA solutions on the vendor platform.", 
            "Collaborated with colleagues and clients on design, product management, and process improvement, resulting in enhanced operational efficiency."]
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
                            <button className={this.state.active === "1"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("1","GAF Materials Corporation", "DATA & RPA ANALYST/INTERN", ["Reduced manual data collection by over two months by automating competitor information gathering using Python and RPA, enhancing efficiency and accuracy.", 
                            "Identified a major data vulnerability on the customer site, safeguarding sensitive contractor information, thus bolstering company data security.", 
                            "Prepared a Process Definition Documentation (PDD) with Business Analysts, detailing surcharge cost automation, which facilitated more efficient vendor payment processing.", 
                            "Collaborated with UiPath vendors and internal RPA leaders to address and resolve complications and irregularities, enhancing the reliability of RPA solutions on the vendor platform.", 
                            "Collaborated with colleagues and clients on design, product management, and process improvement, resulting in enhanced operational efficiency."])}>GAF</button>
                            <button className={this.state.active === "2"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("2","RUMAD", "ASSOCIATE BACKEND DEVELOPER & MENTOR", ["Collaborated as a backend developer within an accelerated program using Node.js, PostMan, and Heroku, while being mentored by expert engineers from Google, Amazon, Facebook, and Apple.", 
                            "Led 'The Incubator' program to build a vacation app, fostering collaboration among student programmers.", 
                            "Mentored 5 junior members in full-stack development, enhancing their skills in app and website creation."])}>RUMAD</button>
                            <button className={this.state.active === "3"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("3","HACKATHON", "BACKEND DEVELOPER", ["Collaborated closely with a team of skilled programmers to develop distinctive applications under stringent time constraints. Throughout this process, we established clear communication channels to uphold rigorous quality assurance standards for the final deliverables. Our programming repertoire encompassed a range of languages, including Java, Python, JavaScript, MySQL, CSS, and C, enabling us to address each project's diverse requirements effectively."])}>Hackathon</button>
                            {/* <li><button className={this.state.active === "1"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("1","GAF Materials Corporation", "DATA & RPA ANALYST/INTERN", ["Reduced manual data collection by over two months by automating competitor information gathering using Python and RPA, enhancing efficiency and accuracy.", 
                            "Identified a major data vulnerability on the customer site, safeguarding sensitive contractor information, thus bolstering company data security.", 
                            "Prepared a Process Definition Documentation (PDD) with Business Analysts, detailing surcharge cost automation, which facilitated more efficient vendor payment processing.", 
                            "Collaborated with UiPath vendors and internal RPA leaders to address and resolve complications and irregularities, enhancing the reliability of RPA solutions on the vendor platform.", 
                            "Collaborated with colleagues and clients on design, product management, and process improvement, resulting in enhanced operational efficiency."])}>GAF</button></li>
                            <li><button className={this.state.active === "2"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("2","RUMAD", "ASSOCIATE BACKEND DEVELOPER & MENTOR", ["Collaborated as a backend developer within an accelerated program using Node.js, PostMan, and Heroku, while being mentored by expert engineers from Google, Amazon, Facebook, and Apple.", 
                            "Led 'The Incubator' program to build a vacation app, fostering collaboration among student programmers.", 
                            "Mentored 5 junior members in full-stack development, enhancing their skills in app and website creation."])}>RUMAD</button></li>
                            <li><button className={this.state.active === "3"? "Experience-Content-Tabs-active" : "Experience-Content-Tabs-button"} onClick={() => this.onChange("3","HACKATHON", "BACKEND DEVELOPER", ["Collaborated closely with a team of skilled programmers to develop distinctive applications under stringent time constraints. Throughout this process, we established clear communication channels to uphold rigorous quality assurance standards for the final deliverables. Our programming repertoire encompassed a range of languages, including Java, Python, JavaScript, MySQL, CSS, and C, enabling us to address each project's diverse requirements effectively."])}>Hackathon</button></li> */}
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