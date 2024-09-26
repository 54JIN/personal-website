import React, {Component} from 'react';
import './GhostLink.css';

import Projects from '../../../Assets/Components/Projects';

import GhostLinkImg1 from '../../../Assets/Images/GhostLinkImg1.png'
import GhostLinkVid from '../../../Assets/Images/GhostLinkVid.mp4'

const Content = {
    Title: 'GhostLink',
    Sub_Title: 'Full-stack application to streamline video transcription into impactful LinkedIn posts.',
    img1: GhostLinkImg1,
    skills: ['JavaScript', 'Python', 'Flask', 'React', 'Node.js', 'PostgreSQL'],
    Intro_Title: 'Empowering Content Creators . . .',
    Description: [
        'A full-stack application to streamline video transcription to impactful LinkedIn posts.',
        'Utilized Flask, OpenAI, PostgreSQL, Vector Databases, and a RAG pipeline to create an effective response.',
        'Employed unit testing via Jest, Github (Git) for version control, and Docker for environment setup.',
    ],
    Link: 'https://www.ghostlink.app',
    Video: GhostLinkVid
}

class GhostLink extends Component {
    render() {
        return(
            <div className="Pallets">
                <Projects Content={Content} />
            </div>
        );
    }
}

export default GhostLink;