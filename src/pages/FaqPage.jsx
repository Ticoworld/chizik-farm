import Header from '../components/Header';
import Footer from '../components/Footer';
import Faq from '../components/Faq';

const FAQPage = () => {
  return (
    <div>
      <Header />
      <div className="h-[60vh] relative">
        <img src="\catfishh.jpg" alt="" className="w-full h-full object-cover" />
        <div className="overlay background">
          <h1 className="text-3xl font-bold dark:text-white py-3 lg:w-[500px] text-green-600 px-3">FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      </div>
      <Faq />
      <div className="lg:px-28 px-10 bg-gray-300 py-10 dark:bg-gray-900">
        <div>
          <p className="dark:text-gray-200">
            Still have questions? Feel free to <a href="#contact">contact us</a>. Our team is here to assist you!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
