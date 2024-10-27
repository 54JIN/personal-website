//Images
import ghostlink from '../Images/GhostLinkImg1.png'
import todo from '../Images/TaskManagerImg1.jpg'
import sizeandstitch from '../Images/SizeAndStitchImg1.png'
import pallets from '../Images/pallets.png';
import portfolio from '../Images/PortfolioImg.png';
import afrImg from '../Images/afrImg.png';

//Components
import GhostLink from '../../Pages/Projects/GhostLink/GhostLink';
import TaskManager from '../../Pages/Projects/TaskManager/TaskManager';
import SizeAndStitch from '../../Pages/Projects/SizeAndStitch/SizeAndStitch';
import Pallets from '../../Pages/Projects/Pallets/Pallets';
import Portfolio from '../../Pages/Projects/Portfolio/Portfolio';
import Afr from '../../Pages/Projects/Afr/Afr';

const projects = [
    {
        image: ghostlink,
        title: "Ghost Link",
        description: "Full-stack application to streamline video transcription into impactful LinkedIn posts.",
        link: "/personal-website/projects/ghostlink",
        key: GhostLink,
    },
    {
        image: todo,
        title: "Task Manager",
        description: "Full-stack application dedicated to help users keep track of activities and tasks",
        link: "/personal-website/projects/task-manager",
        key: TaskManager,
    },
    {
        image: sizeandstitch,
        title: "Size & Stitch",
        description: "Developed a polished, static front-end for a 3D scanning and custom-fit company during a freelance engagement.",
        link: "/personal-website/projects/sizeandstitch",
        key: SizeAndStitch,
    },
    {
        image: pallets,
        title: "Pallets",
        description: "Frontend developer tool to create color themes",
        link: "/personal-website/projects/pallets",
        key: Pallets,
    },
    {
        image: portfolio,
        title: "Portfolio",
        description: "A portfolio website showcasing a software engineer's skillsets",
        link: "/personal-website/projects/portfolio",
        key: Portfolio,
    },
    {
        image: afrImg,
        title: "AFR",
        description: "Anonymous Food Review blog dedicated to Rutgers restaurants",
        link: "/personal-website/projects/afr",
        key: Afr,
    }
]

export default projects;