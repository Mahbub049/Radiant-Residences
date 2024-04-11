import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './Banner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className='mt-12'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("https://i.ibb.co/7Sg0Qqh/real-1.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] border-2 text-center'>
                    <h1 className='text-white font-bold text-6xl leading-[70px]'>Uncover Your Ideal Home <br /> in Our Collection</h1>
                    <p className='text-white text-lg leading-8 mt-6 px-96 mb-6'>Explore a diverse range of real estate options tailored to your preferences and lifestyle. Whether you&apos;re seeking urban sophistication or tranquil countryside living, we have the perfect property waiting for you.</p>
                    <a href="#estates">
                        <button className='btn text-lg bg-[#FF5A3D] border-0 text-white'>Find Your Dream Home</button>
                    </a>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("https://i.ibb.co/2vz378m/real-2.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] border-2 text-center'>
                        <h1 className='text-white font-bold text-6xl leading-[70px]'>Embrace Coastal Living in <br /> Spectacular Seaside Properties</h1>
                        <p className='text-white text-lg leading-8 mt-6 px-96 mb-6'>Immerse yourself in the allure of seaside living with our exquisite collection of coastal properties. From breathtaking ocean views to sandy shores at your doorstep, experience the ultimate in beachfront luxury.</p>
                        <a href="#estates">
                            <button className='btn text-lg bg-[#FF5A3D] border-0 text-white'>Discover Seaside Homes</button>
                        </a>
                    </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("https://i.ibb.co/3CC4C1n/real-3.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] border-2 text-center'>
                        <h1 className='text-white font-bold text-6xl leading-[70px]'>Discover Tranquility in <br /> Our Serene Green Retreats</h1>
                        <p className='text-white text-lg leading-8 mt-6 px-96 mb-6'>Escape the hustle and bustle of city life and reconnect with nature in our eco-friendly mangrove and green real estate properties. Discover serene environments where lush greenery meets sustainable living for a harmonious lifestyle.</p>
                        <a href="#estates">
                            <button className='btn text-lg bg-[#FF5A3D] border-0 text-white'>Explore Green Havens</button>
                        </a>
                    </div>
            </div>
            </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;