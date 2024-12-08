//Images
import DigitalFactoryImg from "../Images/DigitalFactoryImg.svg";
import HeadstarterAIImg from "../Images/HeadstarterAIImg.svg";
import GAFImg from "../Images/GAFImg.svg";
import RUMADImg from "../Images/RUMADImg.svg";

const resume = [
    {
        Company: "Digital Factory, Inc",
        Position: "Backend Developer Intern",
        startDate: "Aug. 2024",
        endDate: "Present",
        details: [
            `Accomplished a 40% improvement in component rendering performance and a 30% boost in team
            productivity by co-leading the migration from a legacy Ruby on Rails user management portal to a
            modern tech stack with React, NextJS, TypeScript, Tailwind CSS, and DaisyUI.`,
            `Achieved a 30% reduction in geofencing data processing time and a 25% scalability enhancement by
            redesigning PostgreSQL schemas and optimizing REST API CRUD operations.`,
            `Reduced developer onboarding time by 40% by modernizing Docker configurations, enabling seamless
            containerization and streamlining setup processes.`,
        ],
        image: DigitalFactoryImg
    },
    {
        Company: "Headstarter AI",
        Position: "Software Engineer Fellow",
        startDate: "July. 2024",
        endDate: "Sept. 2024",
        details: [
            `Increased platform sign-ups by 1,000+ accounts by developing a responsive video transcription platform
            using React, Next.js, TypeScript, Tailwind CSS, and DaisyUI.`,
            `Reduced customer inquiry processing times by 50% by creating a multimodal complaint analysis tool
            powered by Google Cloud APIs and OpenAI.`,
            `Enhanced backend efficiency, accelerating content delivery by 60% through optimizing Flask-based data
            pipelines and PostgreSQL queries integrated with LinkedIn.`,
        ],
        image: HeadstarterAIImg
    },
    {
        Company: "GAF Materials Corporation",
        Position: "Data & RPA Analyst - Intern",
        startDate: "Jun. 2022",
        endDate: "Jan. 2023",
        details: [
            "Automated competitor data collection by developing Python scripts for web scraping using Beautiful Soup and Requests, reducing manual efforts by 70% and processing time by two months.",
            "Established a communication framework between RPA and Marketing & Sales teams, improving project updates and data structuring to enhance productivity, efficiency, and quality assurance.",
            "Built an automated system for extracting and structuring competitor data, ensuring 100% accuracy and seamless integration with Google Sheets, improving analysis efficiency by 75%.",
            "Identified and resolved a major data vulnerability on the customer site, safeguarding sensitive contractor information and significantly enhancing data security.",
            "Collaborated with colleagues and clients on design, product management, and process improvements with agile work methodologies, resulting in greater operational efficiency."
        ],
        image: GAFImg
    },
    {
        Company: "RUMAD",
        Position: "Associate Full Stack Developer & Mentor",
        startDate: "Feb. 2021",
        endDate: "Dec. 2021",
        details: [
            `Reduced response times by 30% and database query times by 20% by developing RESTful CRUD
            operations, integrating JWT authentication, and designing MongoDB schemas for a vacation platform.`,
            `Enhanced user engagement by 30% by creating a real-time chat application with Socket.IO and leading
            UI/UX design initiatives.`,
            `Improved platform reliability by 45% by introducing Jest-based unit testing to minimize system crashes.`,
            `Improved site performance by 20% by optimizing React component rendering and reducing load times.`,
        ],
        image: RUMADImg
    }
]

export default resume;