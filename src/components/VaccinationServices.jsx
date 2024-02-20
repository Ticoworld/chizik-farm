import { Link } from "react-router-dom";
const VaccinationServices = () => {
    const vaccinationDetails = [
      {
        species: 'Poultry',
        services: ['Chicks', 'Layers'],
        description: 'We administer essential vaccinations to chicks and layers, protecting them against common poultry diseases and promoting robust growth.',
      },
      {
        species: 'Pig',
        services: ['Piglets', 'Adult Pigs'],
        description: 'Our piglets and adult pigs receive vaccinations to protect them from prevalent pig diseases, contributing to their overall well-being and growth.',
      },
      {
        species: 'Fish',
        services: ['Fingerlings', 'Grown Fishes'],
        description: 'To support a thriving aquaculture venture, we provide vaccinations to fingerlings and grown fishes, enhancing their resistance to common fish diseases.',
      },
      {
        species: 'Snail',
        services: ['Snail Eggs', 'Grown Snails'],
        description: 'Our snail eggs and grown snails are raised with care, including vaccination measures to establish a healthy foundation for snail farming.',
      },
    ];
  
    return (
      <section id="vaccination">
        <div className="bg-gray-300 py-20 dark:bg-gray-900" >
        <div className="flex items-center gap-2 pb-3">
          <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500" />
          <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">VACCINATION SERVICES</h4>
        </div>
        <div>
          <p className="dark:text-gray-200">
            Ensuring the health and well-being of our livestock is a top priority at Chizik Farm. Explore our comprehensive vaccination services tailored for different species:
          </p>
          {vaccinationDetails.map((vaccine, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-300">{vaccine.species}</h3>
              <p className="text-gray-800 dark:text-gray-400">{vaccine.description}</p>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-400 mt-3">
                {vaccine.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8">
            <p className="font-bold text-gray-800 dark:text-gray-300 text-xl mb-4">Have any Question?</p>
            {/* You can use the ContactButton component or a Link to navigate to the contact page */}
            <Link to="/contact" className="bg-green-500 text-white py-2 px-4 rounded inline-block hover:bg-green-600 transition duration-300">
              Contact Us for more Information
            </Link>
          </div>
      </div>
      </section>
    );
  };
  
  export default VaccinationServices;
  