import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Animals = () => {
    const ourAnimals = [
        {
            id: 1,
            title: 'POULTRY',
            message: `Explore our high-quality poultry breeds, meticulously bred and cared for at Chizik Farm. From layers to broilers, our poultry section offers a diverse range to meet your farming needs.`,
            images: [
                {   id:1,
                    photos:'/brown-hens-farm.jpg',
                    title: 'Our Layers'
                },
                {
                    id:2,
                    photos:'/fowls.jpg',
                    title: 'Our Broilers'
                },
                {
                    id:3,
                    photos:'/chicks.jpeg',
                    title: 'Our Chicks'
                },
                {
                    id:4,
                    photos:'/hen.jpeg',
                    title: 'Fowls'
                },
                {
                    id:5,
                    photos:'/poultry.jpeg',
                    title: 'Fowls'
                },
            ],
        },
        {
            id: 2,
            title: 'SNAIL',
            message: `Discover the world of snails at Chizik Farm. Our carefully nurtured snails are raised with precision to provide you with top-quality breeds for your snail farming venture. `,
            images: [
                {   
                    id: 1,
                    photos:'/snail-farming.jpg',
                    title: 'snails'
                },
                {
                    id:2,
                    photos:'/snaill.jpeg',
                    title: 'Snail'
                },
                {
                    id:3,
                    photos:'/snail1.jpeg',
                    title: 'Snail'
                },
                {
                    id:4,
                    photos:'/snail2.jpeg',
                    title: 'Snail'
                },
                {
                    id:5,
                    photos:'/snail3.jpeg',
                    title: 'Snail'
                },
            ],
        },
        {
            id: 3,
            title: 'PIGGERY',
            message: `Chizik Farm's piggery: where excellence meets every snout. Our pigs, raised with precision, promise top-tier quality for your farming success.`,
            images: [
                {
                    id:1,
                    photos:'/pigg.jpg',
                    title: 'Our Pigs'
                },
                {
                    id:2,
                    photos:'/piglets.jpg',
                    title: 'Our piglets'
                },
                {   id:3,
                    photos:'/pig.jpg',
                    title: 'Pigs'
                },
                {   id:4,
                    photos:'/pigs.jpg',
                    title: 'Pigs'
                },
                {   id:5,
                    photos:'/pig1.jpg',
                    title: 'Pigs'
                },
            ],
        },
        {
            id: 4,
            title: 'FISHES',
            message: `Chizik Farm's fishes embody excellence — vibrant, healthy, and ready to elevate your aquaculture experience.`,
            images: [
                {   id:1,
                    photos:'/fishes.jpg',
                    title: 'Our Fishes'
                },
                {   id:2,
                    photos:'/fish1.jpg',
                    title: 'Quality fishes'
                },
                {   
                    id:3,
                    photos:'/fish3.jpeg',
                    title: 'FIsh'
                },
                {   
                    id:4,
                    photos:'/Fish-farming.jpg',
                    title: 'FIsh'
                },
                {   
                    id:5,
                    photos:'/fish-farming-business.webp',
                    title: 'FIsh'
                },
            ],
        },
    ];
  return (
    <div className="lg:px-28 px-10 bg-gray-300 py-10 dark:bg-gray-900">
       <div className="flex items-center gap-2  pb-3">
            <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500"/>
            <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">OUR ANIMALS</h4>
        </div>
        <div>
          <p className="dark:text-gray-200">At Chizik Farm, our animals embody the essence of quality and care. From poultry to snails, pigs, and fishes, each breed is meticulously raised to meet the highest standards. Explore the diversity within our farm, where our commitment to excellence shines through in every feather, shell, snout, and fin. Your agricultural journey finds a trusted companion in Chizik Farm's premium selection of well-nurtured and thriving animals.
          </p>
          <div className="md:py-16 py-10">
                {
                    ourAnimals.map(animal => (
                        <div key={animal.id}>
                            <h3 className="text-green-900 font-semibold text-xl py-2 dark:text-green-300">{animal.title}</h3>
                            <p className="text-gray-800 dark:text-gray-400"> {animal.message}</p>
                            <div className='py-10'>
                                    <Swiper
                                    modules = {[Pagination, Autoplay, Navigation]}
                                    slidesPerView={3}
                                    navigation
                                    autoplay = {{delay: 10000}}
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
                                    <div className=' border-blue-700 border-2'>
                                        {animal.images.map(imageDet => (
                                        <SwiperSlide key={imageDet.id} className='h-[50vh]'>
                                            <img src={imageDet.photos} alt={imageDet.photos} className="w-full h-full object-cover rounded" />
                                        </SwiperSlide>
                                    ))} 
                                    </div>
                                </Swiper>
                            </div>
                            
                        </div>
                    ))
                }
          </div>
        </div> 
    </div>
  );
};

export default Animals;
