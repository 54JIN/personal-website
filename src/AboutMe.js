import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return(
            <div className="AboutMe">
                <div className="AboutMe-Content">
                    <h1>I am . . .</h1>
                    <p>
                        A diligent full-stack developer, I possess substantial expertise in computer science, 
                        enriched by mentorship with industry leaders from renowned companies like Google, Apple, and Amazon. 
                        My internship at GAF was a cornerstone experience, where I leveraged Python and 
                        Robotic Process Automation (RPA) to streamline the competitor data collection process, 
                        saving the company over two months of manual effort. Beyond technical skills, I have demonstrated 
                        strong leadership and mentorship qualities by guiding first-year students and amateur programmers at RUMAD, 
                        developing their skills and fostering an environment of learning and growth. My projects, ranging from small 
                        to large-scale API implementations, have honed my critical thinking and project management skills, enabling 
                        me to efficiently navigate the journey from project ideation to deployment. This combination of technical 
                        prowess, leadership, and a proven track record of successful project delivery makes me a well-rounded 
                        candidate ready to make a significant impact.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;