import React, {Component} from 'react';
import './Footer.css';

import GithubLogo from '../Images/GithubLogo.svg';
import LinkedlnLogo from '../Images/LinkedlnLogo.svg';
import EmailLogo from '../Images/EmailLogo.svg';

class Footer extends Component {
    render() {
        return(
            <div className="Footer">
                <h2>Get in Contact!</h2>
                <div className="Footer-Images">
                    <a href="https://github.com/54JIN" target="_blank" rel="noreferrer"><img src={GithubLogo} className="BG4" alt="Github Logo" /></a>
                    <a href="https://www.linkedin.com/in/sajin-saju-917117200/" target="_blank" rel="noreferrer"><img src={LinkedlnLogo} className="BG4" alt="Linkdeln Logo" /></a>
                    <img src={EmailLogo} className="BG4 emailClick" alt="Email Logo" onClick={() => {navigator.clipboard.writeText("sajin.saju2022@gmail.com")}}/>
                </div>
            </div>
        );
    }
}

export default Footer;