import { motion } from 'framer-motion';

import './Welcome.css';

function Welcome() {

    return (
        <motion.div 
            className="Welcome"
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
            <h1>Hi. I'm Sajin.</h1>
            <h1>A Software Engineer.</h1>
            <p>I'm passionate about crafting experiences that are engaging, accessible, and user-centric.</p>
        </motion.div>
    );
}

export default Welcome;