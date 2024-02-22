import React, {Component} from 'react';
import './Noteworthy.css';

class Noteworthy extends Component {
    render() {
        return(
            <div className="Noteworthy">
                <div className="Noteworthy-image">
                    <img src={this.props.image} alt="logo" />
                </div>
                <div className="Noteworthy-overlay">
                    <div className="Noteworthy-overlay-wrapper">
                        <div className="image-overlay"></div>
                    </div>
                    <div className="Noteworthy-container-content">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <a href={this.props.link} target="_blank" rel="noreferrer"><button>Visit</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Noteworthy;