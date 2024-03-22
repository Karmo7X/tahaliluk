import React, { useRef, useState } from "react";
import slider_image from "../../assets/homeImages/slider_image.png";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import './slider_offer.scss'

const Slider_offers = () => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isfirst: true,
    isLast: false,
  });
  const slideRef2 = useRef();

  const handle_Next = () => {
    slideRef2.current.swiper.slideNext();
  };

  const handle_Prev = () => {
    slideRef2.current.swiper.slidePrev();
  };
  const { islast, isfirst } = slideBegOrNot;
  const onSlideChange2 = (swiper) => {
    handleSlideByState({
      isfirst: swiper.isBeginning,
      islast: swiper.isEnd,
    });
  };
    
  return (
    <div className='flex justify-center'> {/* Flex container to horizontally center */}
      <button
        className={`swiper-button_next text-center flex items-center text-lg p-2 lg:p-5 justify-center`}
        style={{
          border: "1px solid #00C1C0",
          borderRadius: "50px",
          background: islast ? "#00C1C0" : "transparent",
          color: islast ? "#fff" : "#00C1C0",
        }}
        onClick={() => handle_Next()}
      >
        <FaArrowRightLong />
      </button>

      <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: true }}
              ref={slideRef2}
              onSlideChange={onSlideChange2}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide >
                <div className="flex items-center  justify-center lg:p-20">
                  dsgsdgsdgs
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center  justify-center lg:p-20">
                  dsgsdgsdgs
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center  justify-center lg:p-20">
                  dsgsdgsdgs
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center  justify-center lg:p-20">
                  dsgsdgsdgs
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center  justify-center lg:p-20">
                  dsgsdgsdgs
                </div>
              </SwiperSlide>
            </Swiper>
       

      <button
        className={`swiper-button_prev text-center flex items-center text-lg p-2 lg:p-5 justify-center`}
        style={{
          border: "1px solid #00C1C0",
          borderRadius: "50px",
          background: isfirst ? "#00C1C0" : "transparent",
          color: isfirst ? "#fff" : "#00C1C0",
        }}
        onClick={() => handle_Prev()}
      >
        <FaArrowLeftLong />
      </button>
    </div>
  )
}

export default Slider_offers
