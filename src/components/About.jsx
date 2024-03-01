import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="lg:px-28 px-8 bg-gray-300 py-10 dark:bg-gray-900">
       <div className="flex items-center gap-2  pb-3">
            <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500"/>
            <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">ABOUT US</h4>
        </div> 
        <div>
          <p className="dark:text-gray-200">At Chizik Farm, we're driven by a passion for agriculture and a commitment to excellence. From premium livestock to expert consultancy, we're here to elevate sustainable farming practices and empower farmers for success.
          </p>
          <div className="py-3">
            <div className="flex flex-col gap-6 md:flex-row md:py-16 py-10">
                <div className="flex-1">
                    <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-300">Passion for Agriculture</h3>
                    <div className="text-gray-800 dark:text-gray-400">
                        At Chizik Farm, our deep passion for agriculture drives our commitment to excellence. With a dedicated team, innovative approaches, and a focus on sustainability, we tailor our services to meet farmers' unique needs. Constantly evolving, we cultivate success in every aspect of farming at Chizik Farm.
                         <p className="lg:block hidden">
                         At Chizik Farm, our love for agriculture fuels our unwavering commitment to excellence. With a dedicated team, innovative strategies, and a strong focus on sustainability, we craft tailored services to meet the unique needs of farmers. We are continually evolving, cultivating success in every facet of farming at Chizik Farm.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="/snail-agric.jpg" alt="" className="w-full h-full object-cover rounded" />
                </div>
            </div>
            <div className="flex flex-col-reverse gap-6 md:flex-row md:py-16 py-10">
                <div className="flex-1">
                    <img src="/team.jpg" alt="" className="w-full h-full object-cover rounded" />
                </div>
                <div className="flex-1">
                <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-300">Unified Team Brilliance</h3>
                    <div className="text-gray-800 dark:text-gray-400">
                    Team Synergy: At Chizik Farm, our strength lies in the collaborative spirit that defines our team. Fueled by a shared passion for agriculture, we work together seamlessly, combining diverse skills and knowledge to cultivate success. It's not just teamwork; it's the driving force behind Chizik Farm's achievements.
                    <p className="hidden lg:block">
                    Chizik Farm thrives on the symphony of teamwork, where diverse skills harmonize with a shared passion for agriculture. It's more than collaboration; it's the beating heart of our collective achievements, sowing the seeds of success in every field we cultivate.
                    </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:py-16 py-10">
                <div className="flex-1">
                    <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-300">Excellence in Expertise</h3>
                    <div className="text-gray-800 dark:text-gray-400">
                    At Chizik Farm, our excellence in expertise is the cornerstone of our success. Our team, rich in diverse skills and knowledge, stands out in the agricultural landscape. It's this exceptional proficiency that sets Chizik Farm apart, ensuring top-tier quality and innovation in every aspect of our services.
                         <p className="lg:block hidden">
                         At Chizik Farm, we take pride in our unmatched expertise, where a fusion of diverse skills propels us to the forefront of agriculture. With innovation at our core, we redefine excellence, delivering top-tier quality in every service we offer.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="/expertise.jpg" alt="" className="w-full h-full object-cover rounded" />
                </div>
            </div>
            </div>
            <div className="text-center">
                <Link to='/about'>
                    <button className="flex gap-0 text-white my-3 items-center justify-center bg-green-500 w-32 py-2 rounded font-semibold mx-auto">
                    <MdKeyboardDoubleArrowDown className="text-xl" />
                    <p>Read More</p>
                </button>
                </Link>
              
            </div>
        </div>
    </div>
  );
};

export default About;
