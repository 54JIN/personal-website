import { useState } from 'react';
import { motion } from 'framer-motion';

import './Experience.css';

//Components
import Header from '../../Assets/Components/Header';
import Footer from '../../Assets/Components/Footer';

//Data
import resume from '../../Assets/Data/Resume';

function Experience() {
    const [current, setCurrent] = useState(resume[0])

    const handleClick = (idx) => {
        setCurrent(resume[idx])
    }

    return (
        <div className="Experience">
            <Header page={2} />
            <motion.div 
                className='Experience-Header'
                variants={{
                    hidden: { opacity: 0, y: -75 },
                    visible: { opacity:1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.5,
                }}
            >
                <h1>Experience</h1>
                <p>A display of where I gained my skill sets.</p>
            </motion.div>
            <div className='Experience-Content-Wrapper'>
                <div className='Experience-Content'>
                    <div className='Experience-Content-Timeline'>
                        {resume.map((experience, idx) => (
                            <div className='Experience-Content-Timeline-Profession'>
                                <button key={idx} onClick={() => handleClick(idx)}>
                                    <div className='Experience-Content-Timeline-Profession-Content'>
                                        <h3>{experience.Company} - {experience.startDate}</h3>
                                        <p>{experience.Position}</p>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='Experience-Content-Details'>
                        {current.details.map((description) => (
                            <p>{description}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Experience;