import Header from '../components/Header'
import About from '../components/About'
import Animals from '../components/Animals'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import Showcase from '../components/Showcase'

const Home = () => {
  return( 
    <div>
        <Header />
        <Showcase/>
        <Services />
        <About />
        <Animals />
        <Faq />
        <Reviews />
        <Contact />
        <Footer />
    </div>);
};

export default Home;
