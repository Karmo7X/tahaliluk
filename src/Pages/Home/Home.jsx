import React, { useRef, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import "./home.scss";
import hero_image from "../../assets/homeImages/hero_image.png";
import slider_image from '../../assets/homeImages/slider_image.png'
import { Navigation, Pagination, Scrollbar, Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeftLong ,FaArrowRightLong} from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Home = () => {

  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
 });
 const SlideRef = useRef();

 const handleNext = () => {
    SlideRef.current.swiper.slideNext();
 };

 const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
 };
 const { isLast, isFirst } = slideBegOrNot;
 const onSlideChange = (swiper) => {
    handleSlideByState({
       isFirst: swiper.isBeginning,
       isLast: swiper.isEnd,
    });
 };
 
  return (
    <>
     <div style={{ minHeight: "100vh" }}>
  <div className="container mx-auto" >
    <div className=" hero_section flex flex-col lg:flex-row lg:justify-between   px-10 ">
      <div className="w-full lg:w-1/2 lg:px-0  mt-20">
        <h2 className="text-3xl lg:text-4xl mb-6 font-semibold">
           تعرف على{" "}
          <span className="text-teal-500">  مختبرات  التحاليل   </span>
            الرائدة وتفاصيلها لتحقيق

          <span className="text-teal-500">  النتائج المذهلة  </span>

        </h2>
        <p className="text-gray-500 lg:text-2xl mt-16 mb-16"> أحدث التقنيات والخدمات المقدمة </p>
        <div className="search flex justify-between items-center w-full px-5 lg:gap-0 mt-5 shadow-lg p-2 lg:p-3 rounded-full">
          <input type="text" placeholder="ابحث عن مختبر أو التحليل"  className=" lg:w-full outline-none lg:px-3 lg:py-3 rounded-full bg-transparent" />
          <button className={`lg:text-lg flex justify-center gap-2 items-center font-semibold leading-6 rounded-full px-4 py-2   lg:px-14 lg:py-3 bg-teal-500 text-white hover:bg-teal-800  `} >
          <IoIosSearch  className="text-xl"/>  بحث  
            </button>
          
        </div>
      </div>
      <div className="w-full lg:w-1/3 mt-10 lg:mt-20 ">
        <img src={hero_image} alt="" className="img_hero w-96 lg:w-full" />
      </div>
    </div>
    <div className='hero_section2 flex items-center  justify-center px-3 lg:px-5 mt-20 mb-20'>
    <button className={`swiper-button_next text-center flex items-center text-lg p-2 lg:p-5   justify-center `} style={{border:'1px solid #00C1C0',borderRadius:"50px"  ,background: isLast ? '#00C1C0' : "transparent", color:isLast ?  '#fff':"#00C1C0"}} onClick={()=>handleNext()}><FaArrowRightLong /></button>
       
        
      
    <Swiper
      // install Swiper modules
      modules={[Navigation , Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      ref={SlideRef}
      onSlideChange={onSlideChange}
      autoplay={{ delay: 3000 }}
    >


      <SwiperSlide>
        <div className="p-8 lg:p-20">
          <img src={slider_image} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-8 lg:p-20">
          <img src={slider_image} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-8 lg:p-20">
          <img src={slider_image} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-8 lg:p-20">
          <img src={slider_image} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-8 lg:p-20">
          <img src={slider_image} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
    <button className={`swiper-button_prev text-center flex items-center  text-lg p-2 lg:p-5 justify-center `} style={{border:'1px solid #00C1C0',borderRadius:"50px"  ,background:isFirst ? '#00C1C0' : "transparent", color:isFirst ? '#fff': "#00C1C0"}} onClick={() => handlePrev()}><FaArrowLeftLong /></button>
    </div>
    <div className='hero_section3 flex items-center  justify-center  lg:px-5 mt-20 mb-20'>
      <div className='head_Sec'>
       <h1 className=' text-lg lg:text-4xl text-center font-bold text-blue-700'>
       <span className='text-teal-500 '>المختبرات  </span> الأكثر شيوعاً   

       </h1>
       <p className="text-gray-500 text-lg text-center lg:text-4xl mt-5 mb-5"> أحدث التقنيات والخدمات المقدمة </p>  
      </div>
      
    </div>
  </div>
</div>
    </>
  );
};

export default Home;
