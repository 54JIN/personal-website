import React, {Component} from 'react';
import './Portfolio.css';

import Projects from '../../../Assets/Components/Projects';

import PortfolioImg from '../../../Assets/Images/PortfolioImg.png'
import PortfolioVid from '../../../Assets/Images/PortfolioVid.mp4'

const Content = {
    Title: 'Portfolio',
    Sub_Title: 'A portfolio website showcasing a software engineer\'s skillsets',
    img1: PortfolioImg,
    skills: ['JavaScript', 'React', 'Framer-Motion', 'Git', 'Git Pages'],
    Intro_Title: 'A Software Engineer',
    Description: [
        'A front-end portfolio website to showcase projects and skillsets.',
    ],
    Link: 'https://54jin.github.io/personal-website/',
    Video: PortfolioVid
}

class Portfolio extends Component {
    render() {
        return(
            <div className="Portfolio">
                <Projects Content={Content} />
            </div>
        );
    }
}

export default Portfolio;