import React, {Component} from 'react';
import './TaskManager.css';

import Projects from '../../../Assets/Components/Projects';

import TaskManagerImg1 from '../../../Assets/Images/TaskManagerImg1.jpg'
import TaskManagerImg2 from '../../../Assets/Images/TaskManagerImg2.jpg'
import TaskManagerImg3 from '../../../Assets/Images/TaskManagerImg3.jpg'

const Content = {
    Title: 'Task Manager',
    Sub_Title: 'Full-stack application for daily Task management',
    img1: TaskManagerImg1,
    skills: 'JavaScript | React | Node.js | MongoDb | Axios | Jest',
    Intro_Title: 'Your Daily Helper . . .',
    Description: [
        'A brainstorming tool to help design with theme and color scheme. Utilizing JavaScript, Node.js, React, Bootstrap, and Figma.',
        'Designed the UI, implemented features such as validations, animations, responsive navigation, routes, and cookies.',
        'Deployed the application on Heroku, enhancing creativity, and efficiency for users, and received positive feedback for its ease of use and functionality.'
    ],
    Link: 'https://jin-task-manager-e2e0e11982e2.herokuapp.com/',
    img2: TaskManagerImg2,
    img3: TaskManagerImg3,
}

class TaskManager extends Component {
    render() {
        return(
            <div className="Pallets">
                <Projects Content={Content} />
            </div>
        );
    }
}

export default TaskManager;