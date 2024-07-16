import './About.css';

//Components
import Header from '../../Assets/Components/Header';
import Footer from '../../Assets/Components/Footer';

//Images
import profilePic from '../../Assets/Images/profile-removebg.png'

function About() {

    return (
        <div className="About">
            <Header page={1} />
            <div className="About-Wrapper">
                <div className='About-Header'>
                    <h1>I'm Sajin.</h1>
                </div>
                <div className='About-Content'>
                    <div className='About-Content-Image'>
                        <img src={profilePic} alt="Profile Picture" />
                    </div>
                    <div className='About-Content-Details'>
                        <h3>I'm a Full Stack Software Developer open to work and new oppertunities.</h3>
                        <p>Over the past five years, I have invested my time and efforts into project based learning, participation in hackagthons, internships, Udemy certifications, and a bachelors of science degree in computer science from Rutgers University - New Brunswick.</p>
                    </div>
                </div>
            </div>
            <div className="About-Collaboration">
                <div className="About-Collaboration-Details">
                    <h3>Lets work together if your passionate about innovation & design.</h3>
                    <p>I belive innovation comes from a place of creativity, collaboration, and thought provoking ideas. While design comes from a place of perspective of human psychology.</p>
                    <p> If you enjoy knowledge transfer and like writing clear, maintainable code that anyone can understand and efficient in its processes we will get along really well.</p>
                </div>
                <div className="About-Collaboration-Card">
                    <h4 className='About-Collaboration-Card-Number'>01</h4>
                    <h4 className='About-Collaboration-Card-Title'>Make it</h4>
                    <p>I sketch wireframes and make prototypes. Talking through tactile designs existing in the browser is worth its weight. Design tools only carry you so far; the rest should be realized with a link my team can rally around.</p>
                </div>
            </div>
            <div className="About-Me-Wrapper">
                <div className="About-Me">
                    <p>Outside of work, I like to dabble in coffee making, cooking, drawing, painting, hiking, and content making. If I ever get the chance, I would like to master mixology and photography.</p>
                    <p>My favorite thing to spend money on is food & travel!!</p>
                    <p>So far I have made a collection of restaurants thats worth re-visiting in New Jersey & New York varying from range of price and quality.</p>
                    <p>If I can, I want to explore every nook and cranny of the world. I belive the world is a beatuiful and a piece of art in itself; the greenery, smell of the ocean & forest rain, sunsets & sunrise, and moonlight is to be admired and cherished.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;