import { Link } from "react-router-dom";
const Sales = () => {
    return (
      <section id="sales">
        <div className="py-20">
          <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-400 uppercase" id="sales">Premium Livestock Sales</h3>
          <p className="text-gray-800 dark:text-gray-400 py-3">We sell a variety of livestock, including but not limited to the following:</p>
  
          {/* Poultry */} 
          <div> <h3 className="text-green-800 uppercase text-xl fomt-bold py-4">poultry Sales </h3></div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Chicks</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Explore our range of healthy and vibrant chicks, meticulously bred to ensure optimal growth and vitality. Our chicks are the perfect starting point for your poultry venture, embodying the quality that defines Chizik Farm.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/chicks.jpeg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/chickss.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
  
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Broilers</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Elevate your meat production with our premium broilers. Specially raised for their meat quality and rapid growth, Chizik Farm's broilers promise a delectable and wholesome choice for your farm-to-table needs.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/fowl1.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
  
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Layers</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Invest in high-quality layers for consistent egg production. Chizik Farm's layers are selected for their egg-laying efficiency, providing a reliable source of fresh and nutritious eggs for your agricultural enterprise.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/hens-looking-food-coop.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
          </div>
  
          {/* Pigs */} 
          <div> <h3 className="text-green-800 uppercase text-xl fomt-bold py-4">Piggery Sales </h3></div>
          <div className="flex flex-col md:flex-row gap-10 py-10">
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Piglets</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Start or expand your pig farming venture with Chizik Farm's high-quality piglets. Our piglets are carefully raised to ensure strong and healthy growth, setting the foundation for a successful and thriving pig farm.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/piglets.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
  
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Adult Pigs</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Discover the excellence of Chizik Farm's adult pigs, ready to elevate your pig farming experience. Our adult pigs are raised with precision, ensuring top-tier quality and optimal health for your farming success.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/pigg.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
          </div>
  
          {/* Fishery */} 
          <div> <h3 className="text-green-800 uppercase text-xl fomt-bold py-4">fishery Sales </h3></div>
          <div className="flex flex-col md:flex-row gap-10 py-10">
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Fingerlings</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Start or expand your aquaculture venture with our top-quality fingerlings. Chizik Farm's fingerlings are bred to thrive in various aquatic environments, providing a solid foundation for successful fish farming.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/fingerling.jpeg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
  
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Grown Fishes</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Elevate your fish farming experience with our healthy and vibrant grown fishes. Whether you're aiming for optimal size or superior meat quality, Chizik Farm's grown fishes meet the standards of excellence.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/catfishh.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/fish1.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
          </div>
  
          {/* Snails */} 
          <div> <h3 className="text-green-800 uppercase text-xl fomt-bold py-4">snail Sales </h3></div>
          <div className="flex flex-col md:flex-row gap-10 py-10">
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Snail Eggs</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Embark on your snail farming journey with our carefully nurtured snail eggs. These eggs are a reliable foundation for establishing a thriving snail farm, characterized by healthy and robust offspring.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/snail-egg.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
  
            <div className="flex-1">
              <h4 className="text-green-800 uppercase font-semibold dark:text-green-300">Grown Snails</h4>
              <p className="text-gray-800 dark:text-gray-400">
                Experience the excellence of Chizik Farm's grown snails, ready to enhance your snail farming venture. Our snails are raised with precision, reflecting our commitment to quality and sustainability.
              </p>
              <div className="h-200 overflow-hidden border mt-7">
                <img src="/snail3.jpeg" alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800 dark:text-gray-400 py-3">To order or inquire, <Link to="/contact" className="text-blue-800 dark:text-green-300">contact us for more details</Link>.</p>
            </div>
          </div>
  
          <p className="text-gray-800 dark:text-gray-400 py-3">
            <strong>Price Ranges:</strong> Prices for chicks, broilers, layers, piglets, fingerlings, snail eggs, and grown snails may vary based on factors such as age, breed, and quantity. Contact Chizik Farm for detailed pricing information tailored to your specific requirements.
          </p>
        </div>
        <div className="mt-8 text-center">
            <p className="font-bold text-gray-800 dark:text-gray-300 text-xl mb-4">Want to make your Order?</p>
            {/* You can use the ContactButton component or a Link to navigate to the contact page */}
            <Link to="/contact" className="bg-green-500 text-white py-2 px-4 rounded inline-block hover:bg-green-600 transition duration-300">
              Contact Us 
            </Link>
          </div>
      </section>
    );
  };
  
  export default Sales;
  