import React, {Component} from 'react';
import './Noteworthy.css';

class Noteworthy extends Component {
    render() {
        return(
            <div className="Noteworthy">
                <img src={this.props.image} alt="logo" />
            </div>
        );
    }
}

export default Noteworthy;