import Header from "./Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Showcase = () => {
    const heroElements = [
        {
            id: 1,
            image: '/fowls.jpg',
            title: 'Giving You the Best of Our Flock on Chizik Farm',
            message: 'Immerse yourself in the extraordinary world of our majestic ducks. At Chizik Farm, we take pride in providing you with the finest, most vibrant flock. Discover the beauty of their lives as they roam freely and spread joy throughout our farm.'
        },
        {
            id: 2,
            image: "/pigs.jpg",
            title: 'Experience the Charm: Meeting Our Adorable Piglets at Chizik Farm',
            message: 'Welcome to the heart of Chizik Farm, where our delightful piglets steal the show. Get ready to fall in love with their playful antics and irresistible charm. Learn more about each unique personality as you explore the enchanting world of our piglet family.'
        },
        {
            id: 3,
            image: "/fishes.jpg",
            title: 'Dive into the Depths: Discovering the Wonders of Our Fishes at Chizik Farm',
            message: 'Embark on an underwater adventure with the incredible fishes of Chizik Farm. Our aquatic friends bring the magic of the ocean to your fingertips. Explore the captivating world beneath the surface and witness the beauty and diversity of our underwater community.'
        },
        {
            id: 4,
            image: "/snail-farming.jpg",
            title: 'Spiral Magic: Embracing the Beauty of Our Snails at Chizik Farm',
            message: 'Journey into the enchanting realm of our snails at Chizik Farm. Witness the mesmerizing beauty of their shells and appreciate the slow-paced grace that defines their existence. Join us in cherishing the intricate and fascinating world of our snail companions.'
        }
    ];
    
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{delay: 5000}}
            pagination={{ clickable: true }}
        >
            {heroElements.map((element) => (
                <SwiperSlide key={element.id} className="h-[92vh] relative">
                    <img src={element.image} alt="" className="w-full h-full object-cover" />
                    <div className="overlay background">
                        <h1 className="text-3xl font-bold dark:text-white py-3 lg:w-[500px] text-green-600 px-3">{element.title}</h1>
                        <p className="text-lg text-gray-50 px-5 lg:w-[800px]">{element.message}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Showcase;
