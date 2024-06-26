import React, {Component} from 'react';
import './Afr.css';

import Projects from '../../../Assets/Components/Projects';

import AfrImg1 from '../../../Assets/Images/afrImg.png'
import AfrImg2 from '../../../Assets/Images/afrImg2.png'
import AfrImg3 from '../../../Assets/Images/afrImg3.png'

const Content = {
    Title: 'AFR',
    Sub_Title: 'Anonymous food blog for university students',
    img1: AfrImg1,
    skills: 'JavaScript | React | Node.js',
    Intro_Title: 'An Anonymous Food Review Site . . .',
    Description: [
        'A brainstorming tool to help design with theme and color scheme. Utilizing JavaScript, Node.js, React, Bootstrap, and Figma.',
        'Designed the UI, implemented features such as validations, animations, responsive navigation, routes, and cookies.',
        'Deployed the application on Heroku, enhancing creativity, and efficiency for users, and received positive feedback for its ease of use and functionality.'
    ],
    Link: 'https://54jin.github.io/afr/',
    img2: AfrImg2,
    img3: AfrImg3,
}

class Afr extends Component {
    render() {
        return(
            <div className="Afr">
                <Projects Content={Content} />
            </div>
        );
    }
}

export default Afr;