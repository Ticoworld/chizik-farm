import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Reviews = () => {
    const customerReviewsData = [
        {
          id: 1,
          name: "Lilian",
          position: "Farm Owner",
          review: "Chizik Farm has provided me with top-quality livestock, and their expertise has greatly benefited my farming venture. I highly recommend their services.",
          image: "/farmer3.jpg",
        },
        {
          id: 2,
          name: "Daniel",
          position: "Agribusiness Entrepreneur",
          review: "As a longtime customer, I've consistently received excellent service from Chizik Farm. Their commitment to quality and customer satisfaction sets them apart.",
          image: "/farmer2.jpeg",
        },
        {
            id: 3,
            name: "Jane",
            position: "Livestock Enthusiast",
            review: "Chizik Farm's dedication to animal welfare is unmatched. The healthy and well-cared-for animals I received exceeded my expectations. I'm grateful for their commitment to excellence.",
            image: "/farmer4.jpg",
          },
          {
            id: 4,
            name: "Stanley",
            position: "Small-Scale Farmer",
            review: "I started my small farm with animals from Chizik Farm, and it has been a rewarding experience. The support and guidance they provided were instrumental in my farming success.",
            image: "/farmer1.webp",
          },
          {
            id: 5,
            name: "Michael",
            position: "Aquaculture Specialist",
            review: "Chizik Farm's fishes are exceptional! Their commitment to maintaining optimal conditions reflects in the health and vibrancy of the fishes. A trusted source for aquaculture needs.",
            image: "/farmer5.jpg",
          },
          {
            id: 6,
            name: "Adenuga",
            position: "Agricultural Scientist",
            review: "Chizik Farm stands out for its commitment to sustainable farming practices. The attention to detail in every aspect, from livestock care to consultations, makes them a reliable partner for any farmer.",
            image: "/farmer6.jpeg",
          },
          {
            id: 7,
            name: "James",
            position: "Poultry Enthusiast",
            review: "The poultry breeds I obtained from Chizik Farm have exceeded my expectations. They showcase a dedication to breeding healthy and robust birds. I highly recommend Chizik Farm for poultry needs.",
            image: "/farmer7.webp",
          },
      ];
  return (
    <div className="lg:px-28 px-10 bg-gray-300 py-10 dark:bg-gray-900">
       <div className="flex items-center gap-2  pb-3">
            <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500"/>
            <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">CUSTOMER REVIEWS</h4>
        </div> 
        <div>
          <p className="dark:text-gray-200">Explore heartfelt stories and experiences in our Customer Reviews. Discover how Chizik Farm brings success and satisfaction to farmers' lives. Join our community and witness the excellence that defines our commitment to quality.
          </p>

          <div className='py-10'>
            <Swiper
                modules = {[Pagination, Autoplay, Navigation]}
                slidesPerView={3}
                navigation
                autoplay = {{delay: 5000}}
                pagination={{ "clickable": true }}
                spaceBetween={10}
                breakpoints={
                { 
                    320: {
                        slidesPerView: 1,
                    },
                    520: {
                        slidesPerView: 2,
                    },
                    840: {
                        slidesPerView: 3,
                    },
                }
                }
            >
            {
                customerReviewsData.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 dark:bg-gray-800 h-60">
                            <div className="flex items-center mb-4">
                            <img src={review.image} alt={`${review.name}'s Avatar`} className="w-12 h-12 rounded-full mr-4 object-cover" />
                            <div>
                                <h3 className="text-lg font-semibold dark:text-gray-200">{review.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{review.position}</p>
                            </div>
                            </div>
                            <p className="text-gray-800 dark:text-gray-300  overflow-hidden">{review.review}</p>
                        </div>
                    </SwiperSlide>
                     ))
                 }

            </Swiper>
          </div>
        </div>
    </div>
  );
};

export default Reviews;
