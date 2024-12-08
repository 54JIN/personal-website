import './Contact.css';

//Components
import Header from '../../Assets/Components/Header';
import Welcome from './Welcome';

function Contact() {

    return (
        <div className="Contact">
            <Header page={3} />
            <Welcome />
        </div>
    );
}

export default Contact;