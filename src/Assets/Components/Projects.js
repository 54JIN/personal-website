import './Projects.css';

//Components
import Header from './Header';
import Footer from './Footer';

function Projects({ Content }) {
    const { Title, Sub_Title, img1, skills, Intro_Title, Description, Link, Video } = Content;
    return (
        <div className="Projects">
            <Header />
            <div className='Projects-Header'>
                <h1>{Title}</h1>
                <p>{Sub_Title}</p>
            </div>
            <div className='Projects-Content'>
                <img src={img1} alt={`${Title} Wallpaper`} />
                <div className='Projects-Content-Details'>
                    <h2>{Intro_Title}</h2>
                    {Description.map((desc, idx) => (
                        <p key={idx}>{desc}</p>
                    ))}
                    <div className='Projects-Content-Details-Skills'>
                        {skills.map((skill) => {
                            return (
                                <p>{skill}</p>
                            )
                        })}
                    </div>
                    <a href={Link} target="_blank" rel="noreferrer"><button>Visit</button></a>
                </div>
            </div>
            <div className='Projects-Content-Documentation'>
                <video src={Video} autoPlay loop muted disablePictureInPicture />
            </div>
            <Footer />
        </div>
    );
}

export default Projects;