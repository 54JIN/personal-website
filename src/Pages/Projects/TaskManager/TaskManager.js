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
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDb', 'Axios', 'Jest'],
    Intro_Title: 'Your Daily Helper . . .',
    Description: [
        'A full-stack application for daily task management, increasing user productivity and organization.',
        'Implemented user authentication, CRUD operations, and data analysis utilizing the MERN tech stack: MongoDB, Express, React.js, and Node.js.',
        'Employed unit testing via Jest, Github (Git) for version control, and deployed via Heroku',
    ],
    Link: 'https://jin-task-manager-e2e0e11982e2.herokuapp.com/',
    Images: [
        {
            title: 'Log In Page',
            description: 'Allows the site to log users in.',
            img: TaskManagerImg2
        },
        {
            title: 'Sign Up Page',
            description: 'Allows the user to sign up for the application.',
            img: TaskManagerImg3
        },
    ]
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