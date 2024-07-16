import './Contact.css';

//Components
import Header from '../../Assets/Components/Header';

//Images
import GithubLogo from '../../Assets/Images/GithubLogo.svg'
import LinkedlnLogo from '../../Assets/Images/LinkedlnLogo.svg'
import EmailLogo from '../../Assets/Images/EmailLogo.svg'

function Contact() {

    return (
        <div className="Contact">
            <Header page={3} />
            <div className='Contact-Header'>
                <h1>Get in Touch</h1>
                <p>Looking forward to hearing from you!</p>
            </div>
            <div className='Contact-Content'>
                <div className='Contact-Content-Button'>
                    <a href="https://github.com/54JIN" target="_blank" rel="noreferrer">
                        <div className='Contact-Content-Button-Description'>
                            <h2>Github</h2>
                            <p>Currently woring on Task Master & Blessed</p>
                        </div>
                        <img src={GithubLogo} alt="Github Logo" />
                    </a>
                </div>
                <div className='Contact-Content-Button'>
                    <a href="https://www.linkedin.com/in/sajin-saju-917117200/" target="_blank" rel="noreferrer">
                        <div className='Contact-Content-Button-Description'>
                            <h2>LinkedIn</h2>
                            <p>Looking for work</p>
                        </div>
                        <img src={LinkedlnLogo} alt="Linkdeln Logo" />
                    </a>
                </div>
                <div className='Contact-Content-Button'>
                    <div className='Contact-Content-Button-Email'>
                        <div className='Contact-Content-Button-Description'>
                            <h2>Email</h2>
                            <p>sajin.saju2022@gmail.com</p>
                        </div>
                        <img src={EmailLogo} alt="Email Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;