import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Link, useNavigate } from 'react-router-dom'
import { FreeMode, Pagination } from "swiper/modules";
import Header from '../components/header/Header'
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../components/SliderData/constants";
import Favourite from '../components/storegallery/Gallery'



const MySlider = () => {

  const navigate = useNavigate();

  const homepg = () => {
    navigate('/home');
  }
  const homepggg = () => {
    navigate('/home');
  }

  return (
    <>

      <Header />

      <div className="flex items-center justify-center flex-col h-[600px] bg-firstColor">
        <Link to="/home"><div className="text-3xl font-bold rounded-3xl mb-2 flex justify-center bg-secondColor text-firstColor hover:text-thirdColor items-centre w-[300px] h-[80px] "><button className="" onClick={homepg}>Explore All Products</button></div></Link>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item) => (

            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  <p className="lg:text-[18px]">{item.content} </p>
                </div>

                <RxArrowTopRight className="absolute bottom-5 left-5 w-[45px] h-[45px] text-white group-hover:text-thirdColor font-bold group-hover:rotate-45 duration-100" onClick={homepggg} />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
      
      <Favourite/>
    </>
  );
};

export default MySlider;