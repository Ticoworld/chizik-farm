import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="h-[60vh] relative">
        <img src="\snail-farming.jpg" alt="" className="w-full h-full object-cover" />
        <div className="overlay background">
          <h1 className="text-3xl font-bold dark:text-white py-3 lg:w-[500px] text-green-600 px-3">ABOUT US</h1>
        </div>
      </div>
      <div className="lg:px-28 px-8 bg-gray-300 py-10 dark:bg-gray-900">
        <div className="flex items-center gap-2 pb-3">
          <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500"/>
          <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">OUR STORY</h4>
        </div> 
        <p className="text-gray-800 dark:text-gray-400">
          Welcome to Chizik Farm, where our journey in agriculture began with a vision to redefine farming excellence. Established with a commitment to quality, sustainability, and innovation, Chizik Farm has evolved into a trusted name in the agricultural landscape.
          Our story is rooted in a passion for nurturing life and fostering a harmonious relationship with the land. From humble beginnings, we have grown into a comprehensive agricultural hub, offering a diverse range of services to support farmers and agribusiness enthusiasts.
          At Chizik Farm, we believe in the transformative power of agriculture to create a positive impact on communities and the environment. Our values center around integrity, responsibility, and a deep respect for nature. Through continuous learning and adaptation, we strive to contribute to the growth and prosperity of the farming community.
          <br />
          Our commitment to excellence is reflected in every aspect of our operations, from the careful selection of premium livestock to the delivery of expert consultancy services. We are dedicated to elevating sustainable farming practices and empowering farmers for success.
        </p>

        <div className="mt-8">
          <h4 className="font-bold text-gray-800 dark:text-gray-300 text-xl mb-4">OUR MISSION</h4>
          <p className="text-gray-800 dark:text-gray-400">
            Our mission at Chizik Farm is to empower farmers and agribusiness enthusiasts by providing exceptional services, high-quality livestock, and expert consultancy. We aim to be a catalyst for positive change in the agricultural sector, promoting sustainable practices, and fostering a thriving farming community.
            <br />
            Through our mission, we seek to bridge the gap between traditional farming methods and modern innovations, creating a dynamic and resilient agricultural ecosystem. Chizik Farm is committed to offering valuable resources, knowledge, and support to ensure the success and well-being of every farmer we serve.
          </p>
        </div>

        <div className="mt-8">
          <h4 className="font-bold text-gray-800 dark:text-gray-300 text-xl mb-4">OUR VISION</h4>
          <p className="text-gray-800 dark:text-gray-400">
            Our vision is to be a leading force in shaping the future of agriculture, where Chizik Farm is synonymous with excellence, innovation, and responsible farming practices. We aspire to create a sustainable and inclusive agricultural ecosystem that benefits farmers, consumers, and the environment.
            <br />
            Chizik Farm envisions a future where farming is not just a livelihood but a thriving and respected profession. Our commitment to continuous improvement, environmental stewardship, and community engagement guides us on the path to realizing this vision. Together with our dedicated team, partners, and the farming community, we aim to cultivate a brighter and sustainable future for agriculture.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
