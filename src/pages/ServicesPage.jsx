import ConsultancyServices from "../components/ConsultancyServices";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sales from "../components/Sales";
import VaccinationServices from "../components/VaccinationServices";

const ServicesPage = () => {
  return (
    <div>
        <Header />
        <div className="h-[60vh] relative">
            <img src="\hen.jpeg" alt="" className="w-full h-full object-cover" />
            <div className="overlay background">
                <h1 className="text-3xl font-bold dark:text-white py-3 lg:w-[500px] text-green-600 px-3"> SERVICES WE OFFER</h1>
            </div>
        </div>
        <div className="lg:px-28 px-10 bg-gray-300 py-10 dark:bg-gray-900">
        <div className="flex items-center gap-2  pb-3">
            <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500"/>
            <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">SERVICES</h4>
        </div> 
        <p className="text-gray-800 dark:text-gray-400">
            Welcome to Chizik Farm, where our comprehensive range of services is designed to elevate your farming experience. Our commitment to excellence encompasses every aspect of agriculture, ensuring that farmers and agribusiness enthusiasts receive the highest quality solutions for their ventures.
            At Chizik Farm, we pride ourselves on being more than just a provider of services – we are your dedicated partner in agriculture. Our commitment to excellence extends beyond the ordinary, aiming to transform your farming experience into a journey of success and prosperity.
            As stewards of the land, we understand the unique challenges and opportunities that come with agriculture. Whether you're a seasoned farmer or embarking on a new venture, our comprehensive range of services is tailored to meet your specific needs. We believe in fostering a sustainable and thriving farming community, and our offerings are crafted with precision and care to contribute to your success.
            Chizik Farm isn't just a service provider; we're a reliable partner invested in your agricultural journey. Join us as we cultivate a future where your farm thrives, your livestock flourishes, and your success in agriculture becomes a testament to the excellence we stand for. Welcome to Chizik Farm, where your farming experience is elevated to new heights.
        </p>
        <Sales />
        <VaccinationServices />
        <ConsultancyServices />
        </div> 
        <Footer />
    </div>
  );
};

export default ServicesPage;
