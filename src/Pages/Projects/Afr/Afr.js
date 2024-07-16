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
    Intro_Title: 'An Anonymous Food Review Site',
    Description: [
        'Coming Soon . . . ',
        'An anonmous food review website utilizing JavaScript, Node.js, React, Bootstrap, and Figma.',
    ],
    Link: 'https://54jin.github.io/afr/',
    Images: [
        {
            title: 'Reviewd Food',
            description: 'Allows the user to check out all the reviewed food.',
            img: AfrImg2
        },
        {
            title: 'About Me',
            description: 'Allows the user to discover the purpose of the site.',
            img: AfrImg3
        },
    ]
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