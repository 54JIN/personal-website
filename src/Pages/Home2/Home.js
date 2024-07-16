import './Home.css';

//Components
import Header from '../../Assets/Components/Header'
import Welcome from './Welcome'
import Carousel from '../Home/Carousel';
import Footer from '../../Assets/Components/Footer';

//Data
import projects from '../../Assets/Data/Projects'

function Home() {
  return (
    <div className="Home">
      <Header page={0} />
      <Welcome />
      <Carousel Contents={projects} />
      <Footer />
    </div>
  );
}

export default Home;