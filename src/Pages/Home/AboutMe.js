import React, {Component} from 'react';
import './AboutMe.css';

import DevIcon from '../../Assets/Images/DevIcon.svg';
import UpArrow from '../../Assets/Images/UpArrow.svg';
import DownArrow from '../../Assets/Images/DownArrow.svg';
import BrowserIcon from '../../Assets/Images/BrowserIcon.svg';
import stairsG from '../../Assets/Images/stairsG.svg';
import UnfilledCircles from '../../Assets/Images/UnfilledCircles.svg';
import SquareCircles from '../../Assets/Images/SquareCircles.svg';
import ServerIcon from '../../Assets/Images/ServerIcon.svg';
import stairsGO from '../../Assets/Images/stairsGO.svg';

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
                <div className="AboutMe-Icon">
                    <div className="AboutMe-Icon-Background">
                        <div className="AboutMe-Icon-Left">
                            <img src={BrowserIcon} className="AboutMe-Browser-Icon" alt="DevIcon" />   
                            <img src={UpArrow} className="AboutMe-UpArrow-Icon" alt="DevIcon" />   
                            <img src={stairsG} className="AboutMe-stairsG-Icon" alt="DevIcon" />   
                            <img src={UnfilledCircles} className="AboutMe-UnfilledCircles1-Icon" alt="DevIcon" />   
                            <img src={SquareCircles} className="AboutMe-SquareCircles1-Icon" alt="DevIcon" />   
                        </div>
                        <div className="AboutMe-Icon-Right">
                            <img src={SquareCircles} className="AboutMe-SquareCircles2-Icon" alt="DevIcon" />   
                            <img src={UnfilledCircles} className="AboutMe-UnfilledCircles2-Icon" alt="DevIcon" />   
                            <img src={stairsGO} className="AboutMe-stairsGO-Icon" alt="DevIcon" />   
                            <img src={DownArrow} className="AboutMe-DownArrow-Icon" alt="DevIcon" />   
                            <img src={ServerIcon} className="AboutMe-ServerIcon-Icon" alt="DevIcon" />   
                        </div>
                    </div>
                    <div className="AboutMe-Icon-Mid">
                        <img src={DevIcon} className="AboutMe-Main-Icon" alt="DevIcon" />   
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;