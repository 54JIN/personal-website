import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return(
            <div className="AboutMe">
                <h2>About Me</h2>
                <div className="AboutMe-Content">
                    <img src={this.props.image} alt="profile picture" />
                    <div className="AboutMe-Content-Information">
                        <h2>Sajin Saju</h2>
                        <h4>Computer Science Student at Rutgers New Brunswick</h4>
                        <p>
                            I am a proficient full-stack developer with practical, real-world expertise in computer science. 
                            I benefited from mentorship by individuals affiliated with leading Fortune 500 companies such as 
                            Google, Apple, and Amazon. During an internship at GAF, I successfully streamlined and expedited 
                            the data collection process related to GAF's competitors' contractors by implementing Python programming 
                            and Robotic Process Automation (RPA) techniques, reducing over two months of manual labor. Additionally, 
                            I helped mentor fellow incoming first-year students and amateur programmers in an organization titled RUMAD. 
                            I honed leadership, mentorship, communication, and time management skills through this. Moreover, I sharpened 
                            my critical thinking skills by accomplishing finalized projects ranging from small to large-scale API 
                            productions. Thus, I broadened my understanding of how to get a project from planning to production.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;