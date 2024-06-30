import React, {Component} from 'react';

import Footer  from './Footer';

import './Projects.css';

class Projects extends Component {
    render() {
        const { Title, Sub_Title, img1, skills, Intro_Title, Description, Link, img2, img3 } = this.props.Content
        return(
            <div className="Projects">
                <div className='Projects-intro'>
                    <h1>{Title}</h1>
                    <p>{Sub_Title}</p>
                </div>
                <div className='Projects-skills'>
                    <img src={img1} />
                    <h4>{skills}</h4>
                </div>
                <div className='Projects-content'>
                    <div className='Projects-content-details'>
                        <h2>{Intro_Title}</h2>
                        {Description.map((paragraph) => (
                            <p>{paragraph}</p>
                        ))}
                        <a href={Link} target="_blank" rel="noreferrer"><button>Vist</button></a>
                    </div>
                    <div className='Projects-content-img'>
                        <img src={img2} />
                    </div>
                </div>
                <div className='Projects-img'>
                    <img src={img3} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Projects;