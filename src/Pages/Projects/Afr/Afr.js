import React, {Component} from 'react';
import './Afr.css';

import Projects from '../../../Assets/Components/Projects';

import AfrImg1 from '../../../Assets/Images/afrImg.png'
import AFRVid from '../../../Assets/Images/AFRVid.mp4'

const Content = {
    Title: 'AFR',
    Sub_Title: 'Anonymous food blog for university students',
    img1: AfrImg1,
    skills: ['JavaScript', 'React', 'Node.js'],
    Intro_Title: 'An Anonymous Food Review Site',
    Description: [
        'Coming Soon . . . ',
        'An anonmous food review website utilizing JavaScript, Node.js, React, Bootstrap, and Figma.',
    ],
    Link: 'https://54jin.github.io/afr/',
    Video: AFRVid
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