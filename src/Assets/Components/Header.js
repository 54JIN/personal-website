import { Link } from 'react-router-dom';

import './Header.css';

//Components
import Home from '../../Pages/Home/Home';
import Experience from '../../Pages/Experience/Experience';
import Contact from '../../Pages/Contact/Contact';

function Header({ page }) {
    return (
        <div className="Header">
            <div className='Header-Wrapper'>
                <Link key={Home} to={"/personal-website"} ><button className={page === 0 ? 'Page-Active' : 'Page-Inactive'} >Work</button></Link>
                <Link key={Experience} to={"/personal-website/experience"} ><button className={page === 2 ? 'Page-Active' : 'Page-Inactive'} >Experience</button></Link>
                <Link key={Contact} to={"/personal-website/contact"} ><button className={page === 3 ? 'Page-Active' : 'Page-Inactive'} >Contact</button></Link>
            </div>
        </div>
    );
}

export default Header;