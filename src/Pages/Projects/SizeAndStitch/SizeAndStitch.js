import React, {Component} from 'react';
import './SizeAndStitch.css';

import Projects from '../../../Assets/Components/Projects';

import SizeAndStitchImg1 from '../../../Assets/Images/SizeAndStitchImg1.png'
import SizeAndStitchVid from '../../../Assets/Images/SizeAndStitchVid.mp4'

const Content = {
    Title: 'Size & Stitch',
    Sub_Title: 'Developed a polished, static front-end for a 3D scanning and custom-fit company during a freelance engagement.',
    img1: SizeAndStitchImg1,
    skills: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Chakra UI'],
    Intro_Title: 'Find every design that fits you',
    Description: [
        'A platform that eliminates the frustration of seeing designs you want but being stuck without the right size.',
        'Developed the landing, sign-on & sign-up pages for the company.',
        'Utilized Tailwind CSS and Chakra UI to expedite development.',
    ],
    Link: 'https://54jin.github.io/sizeandstitch/',
    Video: SizeAndStitchVid
}

class SizeAndStitch extends Component {
    render() {
        return(
            <div className="Pallets">
                <Projects Content={Content} />
            </div>
        );
    }
}

export default SizeAndStitch;