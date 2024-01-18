import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return(
            <div className="Projects">
                <a href={this.props.link} target="_blank" rel="noreferrer">
                    <img src={this.props.image} alt="logo" /> 
                    <div className="Projects-BackCover">
                        <h1>01</h1>
                        <div className="Projects-BackCover-Content">
                            <h2>Pallets</h2>
                            <h4>Web Site Design Tool</h4>
                            <button>Visit Me</button>
                        </div>
                    </div>   
                </a>
                {/* <img src={this.props.image} alt="logo" /> */}
            </div>
        );
    }
}

export default Projects;