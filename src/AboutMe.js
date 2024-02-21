import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return(
            <div className="AboutMe">
                <div className="AboutMe-Content">
                    <h1>I am . . .</h1>
                    <p>
                        A diligent full-stack developer, I have garnered significant expertise in computer science, augmented by mentorship with industry leaders from esteemed companies like Google, Apple, and Amazon. 
                    </p>
                    <p>
                        During my internship at GAF, I utilized Python and Robotic Process Automation (RPA) to optimize competitor data collection, resulting in a reduction of over two months of manual effort for the company.
                    </p>
                    <p>
                        Beyond technical proficiency, I have showcased strong leadership and mentorship abilities by guiding first-year students and novice programmers at RUMAD, fostering an environment conducive to learning and growth. 
                    </p>
                    <p>
                        Additionally, my involvement in projects spanning from small to large-scale API implementations has sharpened my critical thinking and project management skills, equipping me to efficiently navigate from project ideation to deployment.
                    </p>
                    <p>
                        In summary, my blend of technical acumen, leadership capabilities, and a track record of successful project delivery positions me as a well-rounded candidate poised to make a substantial impact.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;