import './Projects.css';

//Components
import Header from './Header';
import Footer from './Footer';

function Projects({ Content }) {
    const { Title, Sub_Title, img1, skills, Intro_Title, Description, Link, Images } = Content;
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
                    <p>{Description}</p>
                    <a href={Link} target="_blank" rel="noreferrer"><button>Visit</button></a>
                </div>
            </div>
            <div className='Projects-Content-Documentation'>
                {Images.map((card) => (
                    <div className='Projects-Content-Documentation-Card'>
                        <div className='Projects-Content-Documentation-Card-BG'>
                            <img src={card.img} />
                        </div>
                        <div className='Projects-Content-Documentation-Card-Overlay'>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Projects;