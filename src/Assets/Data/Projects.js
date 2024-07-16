//Images
import todo from '../Images/TaskManagerImg1.jpg'
import pallets from '../Images/pallets.png';
import afrImg from '../Images/afrImg.png';

//Components
import TaskManager from '../../Pages/Projects/TaskManager/TaskManager';
import Pallets from '../../Pages/Projects/Pallets/Pallets';
import Afr from '../../Pages/Projects/Afr/Afr';

const projects = [
    {
        image: todo,
        title: "Task Manager",
        description: "Full-stack application dedicated to help users keep track of activities and tasks",
        link: "/personal-website/projects/task-manager",
        key: TaskManager,
    },
    {
        image: pallets,
        title: "Pallets",
        description: "Frontend developer tool to create color themes",
        link: "/personal-website/projects/pallets",
        key: Pallets,
    },
    {
        image: afrImg,
        title: "AFR",
        description: "Anonymous Food Review Blog dedicated to Rutgers Resteraunts",
        link: "/personal-website/projects/afr",
        key: Afr,
    }
]

export default projects;