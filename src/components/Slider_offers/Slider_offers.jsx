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
  
    
  return (
    <div className=''>
       {/* <button
              className={` swiper-button_next text-center flex items-center text-lg p-2 lg:p-5   justify-center `}
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

           
            <button
              className={`swiper-button_prev text-center flex items-center  text-lg p-2 lg:p-5 justify-center `}
              style={{
                border: "1px solid #00C1C0",
                borderRadius: "50px",
                background: isfirst ? "#00C1C0" : "transparent",
                color: isfirst ? "#fff" : "#00C1C0",
              }}
              onClick={() => handle_Prev()}
            >
              <FaArrowLeftLong />
            </button> */}
    </div>
  )
}

export default Slider_offers
