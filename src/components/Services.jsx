import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink as  NavHashLink } from "react-router-hash-link";
const Services = () => {
  return (
    <div className="lg:px-28 px-10 bg-gray-300 py-10 dark:bg-gray-900">
       <div className="flex items-center gap-2  pb-3">
            <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500"/>
            <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">SERVICES</h4>
        </div> 
        <div>
            <p className="dark:text-gray-200">
            At Chizik Farm, we deliver excellence in every aspect of your livestock journey. From reliable vaccination solutions to premium farm animal sales and expert consultancy, we elevate your farming experience. Choose Chizik for quality and success in agriculture.
            </p>
            <div className="py-3">
            <div className="flex flex-col gap-6 md:flex-row md:py-16 py-10">
                <div className="flex-1">
                    <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-300">Premium Livestock Sales</h3>
                    <p className="text-gray-800 dark:text-gray-400">
                        At Chizik Farm, we present a curated selection of premium livestock for your agricultural needs. Our commitment to quality ensures that each animal is a valuable addition to your farm. Explore our offerings and elevate your farming venture with Chizik's top-tier livestock selections.
                    </p>
                    <NavHashLink to="/services#sales">
                        <button className="flex gap-0 text-white my-3 items-center justify-center bg-green-500 w-32 py-2 rounded font-semibold">
                            <MdKeyboardDoubleArrowDown className="text-xl"/>
                            <p>Read More</p>
                        </button>
                    </NavHashLink>
                    
                </div>
                <div className="flex-1">
                    <img src="/brown-hens-farm.jpg" alt="" className="w-full h-full object-cover rounded" />
                </div>
            </div>
            <div className="flex flex-col-reverse gap-6 md:flex-row md:py-16 py-10">
                <div className="flex-1">
                    <img src="/vaccination.webp" alt="" className="w-full h-full object-cover rounded" />
                </div>
                <div className="flex-1">
                <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-300">Our Comprehensive Vaccination Services</h3>
                    <p className="text-gray-800 dark:text-gray-400">
                         At Chizik Farm, we prioritize your livestock's health. Our vaccination services ensure well-being and disease resistance. With expertise and dedication, we invest in the longevity of your valuable animals. Choose Chizik for excellence in animal care and a thriving farming journey.
                    </p>
                    <NavHashLink to="/services#vaccination">
                        <button className="flex gap-0 text-white my-3 items-center justify-center bg-green-500 w-32 py-2 rounded font-semibold">
                            <MdKeyboardDoubleArrowDown className="text-xl"/>
                            <p>Read More</p>
                         </button>
                    </NavHashLink>
                    
                </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:py-16 py-10">
                <div className="flex-1">
                    <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-300">Expert Agricultural Consultancy at Your Service</h3>
                    <p className="text-gray-800 dark:text-gray-400">
                        At Chizik Farm, our consultancy services provide tailored guidance to optimize your farming practices. With a dedicated team of experts, we offer strategic planning and hands-on solutions to elevate your agricultural journey with precision and expertise. Trust Chizik for personalized consultancy that propels your farming success forward.
                    </p>
                    <NavHashLink to="/services#consultancy">
                        <button className="flex gap-0 text-white my-3 items-center justify-center bg-green-500 w-32 py-2 rounded font-semibold">
                            <MdKeyboardDoubleArrowDown className="text-xl"/>
                            <p>Read More</p>
                        </button>
                    </NavHashLink>         
                </div>
                <div className="flex-1">
                    <img src="/consultancy.jpg" alt="" className="w-full h-full object-cover rounded" />
                </div>
            </div>


            </div>
            
        </div>
    </div>
);
};

export default Services;
