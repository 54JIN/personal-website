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
        'I designed and developed this portfolio website from the ground up, leveraging my skills in UI/UX design, React, HTML, and CSS. The site has undergone multiple iterations of refactoring and redesign to align with my evolving expertise and vision. As I continue to grow as a developer and designer, I am committed to refining and enhancing this portfolio, ensuring it reflects my ongoing journey and capabilities.',
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