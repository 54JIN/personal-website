import React, {Component} from 'react';
import './Pallets.css';

import Projects from '../../../Assets/Components/Projects';

import palletsImg1 from '../../../Assets/Images/pallets.png'
import palletsImg2 from '../../../Assets/Images/palletsImg2.png'
import palletsImg3 from '../../../Assets/Images/palletsImg3.png'

const Content = {
    Title: 'Pallets',
    Sub_Title: 'Frontend developer tool to create color themes',
    img1: palletsImg1,
    skills: ['JavaScript', 'React', 'Node.js', 'Bootstrap'],
    Intro_Title: 'A UI/UX Designers Best Friend . . .',
    Description: [
        'A brainstorming tool to help design with theme and color scheme. Utilizing JavaScript, Node.js, React, Bootstrap, and Figma.',
        'Designed the UI, implemented features such as validations, animations, responsive navigation, routes, and cookies.',
        'Deployed the application on Heroku, enhancing creativity, and efficiency for users, and received positive feedback for its ease of use and functionality.'
    ],
    Link: 'https://54jin.github.io/color-project/',
    Images: [
        {
            title: 'Create Pallete',
            description: 'Allows the user to create a pallete of colors and organize them in particular order.',
            img: palletsImg2
        },
        {
            title: 'View Pallete',
            description: 'Allows the user to to view and even adjust the depth of particular colors.',
            img: palletsImg3
        },
    ]
}

class Pallets extends Component {
    render() {
        return(
            <div className="Pallets">
                <Projects Content={Content} />
            </div>
        );
    }
}

export default Pallets;