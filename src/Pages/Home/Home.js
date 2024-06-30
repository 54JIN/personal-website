import React, {Component} from 'react';
import './Home.css';
import profile from '../../Assets/Images/profile.jpg';
import stairsG from '../../Assets/Images/stairsG.svg';
import stairsP from '../../Assets/Images/stairsP.svg';
import stairsGSide from '../../Assets/Images/stairsGSide.svg';
import SquareCircles from '../../Assets/Images/SquareCircles.svg';
import SquareCirclesR from '../../Assets/Images/SquareCirclesR.svg';

class Projects extends Component {
    render() {
        return(
            <div className="Home">
                <div className="Home1">
                    <div className="Home-Back">
                        <div className="Home-Background">
                            <div className="Home-Background-left"></div>
                            <div className="Home-Background-right"></div>
                        </div>
                        <div className="Home-Background-Items">
                            <img src={SquareCircles} className="BG1" alt="profile picture" />
                            <div className="Home-Background-Items-stair-mid">
                                <img src={stairsGSide} className="BG2" alt="profile picture" />
                                <img src={stairsP} className="BG3" alt="profile picture" />
                            </div>
                            <div className="Home-Background-Items-square-mid">
                                <img src={stairsG} className="BG4" alt="profile picture" />  
                                <img src={SquareCirclesR} className="BG5" alt="profile picture" />                          
                            </div>
                        </div>
                    </div>
                    <div className="Home-Content">
                        <div className="Home-Content-left">
                            <h1>Software</h1>
                            <div className="Home-Content-left-title2">
                                <h1>Engineer</h1>
                                <h2>.</h2>
                            </div>
                            <p>I like to work in a collaborative team with clear communication to produce high quality user experience. </p>
                            <div className="Home-Content-left-bt-description">
                                <p>Skilled in Node.js, React.js, and AWS.</p>
                            </div>
                        </div>
                        <div className="Home-Content-right">
                            <img src={profile} alt="profile picture" />
                        </div>
                    </div>
                </div>
                <div className="Home2">
                    <div className="Home-Content-top">
                        <div className="Home-Background-top"></div>
                        <div className="Home-Content-top-information">
                            <h1>Software</h1>
                            <div className="Home-Content-top-information-title2">
                                <h1>Engineer</h1>
                                <h2>.</h2>
                            </div>
                            <p>I like to work in a collaborative team with clear communication to produce high quality user experience. </p>
                            <div className="Home-Content-information-bt-description">
                                <p>Highly skilled in Node.js, React.js, and AWS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Home-Content-bottom">
                        <div className="Home-Back-2">
                            <div className="Home-Background-2">
                                <div className="Home-Background-bottom"></div>
                            </div>
                            <div className="Home-Background-Items-2">
                                <img src={SquareCirclesR} className="BG6" alt="profile picture" />    
                                <img src={stairsP} className="BG7" alt="profile picture" />
                                <img src={SquareCirclesR} className="BG8" alt="profile picture" />    
                            </div>
                        </div>
                        <div className="Home-Content-bottom-information">
                            <img src={profile} alt="profile picture" />
                        </div>
                    </div>
                </div>
            </div>
                
        );
    }
}

export default Projects;