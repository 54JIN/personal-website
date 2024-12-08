import './Home.css';

//Components
import Header from '../../Assets/Components/Header'
import Welcome from './Welcome'
import About from './About'
import Featured from './Featured';
import SmallSamples from './SmallSamples';
import Footer from '../../Assets/Components/Footer';

function Home() {
  return (
    <div className="Home">
      <Header page={0} />
      <Welcome />
      <About />
      <Featured />
      <SmallSamples />
      <Footer />
    </div>
  );
}

export default Home;