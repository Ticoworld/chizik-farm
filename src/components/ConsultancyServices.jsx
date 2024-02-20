
import { Link } from 'react-router-dom';

const ConsultancyServices = () => {
  return (
    <section id='consultancy'>
      <div className=" bg-gray-300 py-20 dark:bg-gray-900">
        <div className="flex items-center gap-2 pb-3">
          <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500" />
          <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl"> OUR CONSULTANCY SERVICES</h4>
        </div>
        <div>
          <p className="dark:text-gray-200">
            At Chizik Farm, we offer expert consultancy services to help you achieve success in your agricultural endeavors. Our team of experienced professionals provides guidance and solutions tailored to your specific needs.
          </p>

          {/* Add more detailed information about the consultancy services offered */}
          <div className="mt-8">
            <h4 className="font-bold text-gray-800 dark:text-gray-300 text-xl mb-4">Services Offered:</h4>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-400">
              <li>Agribusiness Planning and Strategy</li>
              <li>Livestock Management Consultation</li>
              <li>Aquaculture Solutions</li>
              <li>Poultry Farming Guidance</li>
              {/* Add more services as needed */}
            </ul>
          </div>

          {/* Add a contact button or link to redirect users to the contact page */}
          <div className="mt-8">
            <p className="font-bold text-gray-800 dark:text-gray-300 text-xl mb-4">Ready to Consult?</p>
            {/* You can use the ContactButton component or a Link to navigate to the contact page */}
            <Link to="/contact" className="bg-green-500 text-white py-2 px-4 rounded inline-block hover:bg-green-600 transition duration-300">
              Contact Us for Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyServices;
