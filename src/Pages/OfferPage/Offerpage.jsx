import React, { useState,useRef } from 'react'
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import heart from '../../assets/icons/offers/Heart.png'
import offer_image from '../../assets/icons/offers/offer_image.png'
import offer_logo from '../../assets/icons/offers/offer_logo.png'
import './offers.scss'
const Offerpage = () => {
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
      <div style={{ marginTop: "9rem", minHeight: "100vh" }}>
        <div className='filter'>

        </div>

        <div className='block lg:flex p-3 mt-3 min-h-screen mb-10'>
        
         <div className='w-full'>
        
         <div className=" flex items-center justify-end  mt-3 ">
            <span> الترتيب :</span>
            <select
              name=""
              id=""
              className="bg-transparent text-teal-600 border-0 outline-none"
            >
              <option value="">   الأقل سعراً </option>
              <option value="">  الاعلي سعراً  </option>
              {/* <option value=""> الأكثر زيارة</option> */}
            </select>
          
         </div>
         <div className='grid grid-cols-1  lg:grid-cols-3 lg:p-10 gap-3  w-full'>
          <div className='border lg:m-5 mt-7 w-full  border-gray-300  rounded-md'>
            <div className='w-full relative'>
            <img className='h-44 w-full   ' src={offer_image} alt="" />  
            <img className='  md:w-36  w-1/4 lg:w-32 rounded-fill absolute top-1/2 bottom-1/2 mt-7 right-5 mb-5' src={offer_logo} alt="" />  
            </div>
            <div className='card_content md:mt-20 p-5 mt-5'>
             <h4 className='lg:text-2xl text-gray-600 mt-4 font-medium'>مختبر البرج</h4>
             <p className='lg:text-lg text-gray-400 mt-4' >خصومات علي التحاليل تصل ل 70%</p>
            </div>
          
          </div>
          <div className='border lg:m-5 mt-7 w-full  border-gray-300  rounded-md'>
            <div className='w-full relative'>
            <img className='h-44 w-full   ' src={offer_image} alt="" />  
            <img className='  md:w-36  w-1/4 lg:w-32 rounded-fill absolute top-1/2 bottom-1/2 mt-7 right-5 mb-5' src={offer_logo} alt="" />  
            </div>
            <div className='card_content md:mt-20 p-5 mt-5'>
             <h4 className='lg:text-2xl text-gray-600 mt-4 font-medium'>مختبر البرج</h4>
             <p className='lg:text-lg text-gray-400 mt-4' >خصومات علي التحاليل تصل ل 70%</p>
            </div>
          
          </div>
          <div className='border lg:m-5 mt-7 w-full  border-gray-300  rounded-md'>
            <div className='w-full relative'>
            <img className='h-44 w-full   ' src={offer_image} alt="" />  
            <img className='  md:w-36  w-1/4 lg:w-32 rounded-fill absolute top-1/2 bottom-1/2 mt-7 right-5 mb-5' src={offer_logo} alt="" />  
            </div>
            <div className='card_content md:mt-20 p-5 mt-5'>
             <h4 className='lg:text-2xl text-gray-600 mt-4 font-medium'>مختبر البرج</h4>
             <p className='lg:text-lg text-gray-400 mt-4' >خصومات علي التحاليل تصل ل 70%</p>
            </div>
          
          </div>
          <div className='border lg:m-5 mt-7 w-full  border-gray-300  rounded-md'>
            <div className='w-full relative'>
            <img className='h-44 w-full   ' src={offer_image} alt="" />  
            <img className='  md:w-36 w-1/4 lg:w-32 rounded-fill absolute top-1/2 bottom-1/2 mt-7 right-5 mb-5' src={offer_logo} alt="" />  
            </div>
            <div className='card_content md:mt-20 p-5 mt-5'>
             <h4 className='lg:text-2xl text-gray-600 mt-4 font-medium'>مختبر البرج</h4>
             <p className='lg:text-lg text-gray-400 mt-4' >خصومات علي التحاليل تصل ل 70%</p>
            </div>
          
          </div>

         </div>
         </div>

        </div>
        {/* if choose Analysis */}
        <div className='body_parts flex items-center justify-center px-5 mt-3'>
        <button
              className={` swiper-button_next text-center flex items-center text-lg p-3   justify-center `}
              style={{
                border: "1px solid #00C1C0",
                borderRadius: "50px",
                background: isLast ? "#00C1C0" : "transparent",
                color: isLast ? "#fff" : "#00C1C0",
                width:'40px',
                height:'40px'
              }}
              onClick={() => handleNext()}
            >
              <FaArrowRightLong />
            </button>

            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={6}
              navigation={false}
             
              ref={SlideRef}
              onSlideChange={onSlideChange}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                390: {
                  slidesPerView: 4,
                },
                502: {
                  slidesPerView: 4,
                },
                802: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
          
            >
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center '>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs  lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center w-full'>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
             
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center '>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
             
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center '>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
             
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center '>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
             
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center '>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
             
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center '>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
             
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center '>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
             
              <SwiperSlide >
                <div className="">
                  <div className='flex flex-col items-center '>
                   <img src={heart} alt="" className='lg:w-14 w-7' />
                  <p className='text-gray-400 mt-3 text-xs md:text-xs lg:text-lg  text-center'>القلب و الأوعية</p>
                  </div>

                </div>
              </SwiperSlide>
             

              
            </Swiper>
            <button
              className={`swiper-button_prev text-center flex items-center  text-lg p-3  justify-center `}
              style={{
                border: "1px solid #00C1C0",
                borderRadius: "50px",
                background: isFirst ? "#00C1C0" : "transparent",
                color: isFirst ? "#fff" : "#00C1C0",
                width:'40px',
                height:'40px'
              }}
              onClick={() => handlePrev()}
            >
              <FaArrowLeftLong />
            </button>
        </div>

        <div className='block lg:flex p-3 mt-3 min-h-screen mb-10'>
         <div className=' w-full lg:w-1/4 min-h-screen'>
           <div className='border  border-gray-300  rounded-md min-h-full'>
            <div className='head '>
            <h2 className='text-gray-400 p-4 text-lg'>
            الباقات
            </h2>
            <hr className='text-gray-300' />
            </div>
            <div className='grid grid-cols-2 lg:block p-4 min-h-screen overflow-x-scroll lg:overflow-y-scroll'>
            <div className="relative flex gap-x-3 mt-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      // onChange={(e)=>setremember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500  checked:bg-teal-500 checked:border-transparent"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium lg:text-lg text-xs md:text-xs text-gray-600">
                    تحاليل الغدة الدرقية
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3 mt-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      // onChange={(e)=>setremember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500  checked:bg-teal-500 checked:border-transparent"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium lg:text-lg text-xs md:text-xs text-gray-600">
                    تحاليل الغدة الدرقية
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3 mt-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      // onChange={(e)=>setremember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500  checked:bg-teal-500 checked:border-transparent"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium lg:text-lg text-xs md:text-xs text-gray-600">
                    تحاليل الغدة الدرقية
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3 mt-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      // onChange={(e)=>setremember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500  checked:bg-teal-500 checked:border-transparent"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium lg:text-lg text-xs md:text-xs text-gray-600">
                    تحاليل الغدة الدرقية
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3 mt-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      // onChange={(e)=>setremember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500  checked:bg-teal-500 checked:border-transparent"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium lg:text-lg text-xs md:text-xs text-gray-600">
                    تحاليل الغدة الدرقية
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3 mt-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      // onChange={(e)=>setremember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500  checked:bg-teal-500 checked:border-transparent"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium lg:text-lg text-xs md:text-xs text-gray-600">
                    تحاليل الغدة الدرقية
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3 mt-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      // onChange={(e)=>setremember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500  checked:bg-teal-500 checked:border-transparent"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium lg:text-lg text-xs md:text-xs text-gray-600">
                    تحاليل الغدة الدرقية
                    </label>
                    
                  </div>
                </div>
            </div>
           </div>
         </div>
         <div className='lg:w-3/4 md:w-full w-full'>
        
         <div className=" flex items-center justify-end  mt-3 ">
            <span> الترتيب :</span>
            <select
              name=""
              id=""
              className="bg-transparent text-teal-600 border-0 outline-none"
            >
              <option value="">   الأقل سعراً </option>
              <option value="">  الاعلي سعراً  </option>
              {/* <option value=""> الأكثر زيارة</option> */}
            </select>
          
         </div>
         <div className='grid grid-cols-1  lg:grid-cols-2 lg:p-10 gap-3  w-full'>
          <div className='border lg:m-5 mt-7 w-full  border-gray-300  rounded-md'>
            <div className='w-full relative'>
            <img className='h-44 w-full   ' src={offer_image} alt="" />  
            <img className='  md:w-36  w-1/4 rounded-fill absolute top-1/2 bottom-1/2 mt-7 right-5 mb-5' src={offer_logo} alt="" />  
            </div>
            <div className='card_content md:mt-20 p-5 mt-5'>
             <h4 className='lg:text-2xl text-gray-600 mt-4 font-medium'>مختبر البرج</h4>
             <p className='lg:text-lg text-gray-400 mt-4' >خصومات علي التحاليل تصل ل 70%</p>
            </div>
          
          </div>
          <div className='border lg:m-5 mt-7 w-full  border-gray-300  rounded-md'>
            <div className='w-full relative'>
            <img className='h-44 w-full   ' src={offer_image} alt="" />  
            <img className='  md:w-36  w-1/5 rounded-fill absolute top-1/2 bottom-1/2 mt-7 right-5 mb-5' src={offer_logo} alt="" />  
            </div>
            <div className='card_content md:mt-20 p-5 mt-5'>
             <h4 className='lg:text-2xl text-gray-600 mt-4 font-medium'>مختبر البرج</h4>
             <p className='lg:text-lg text-gray-400 mt-4' >خصومات علي التحاليل تصل ل 70%</p>
            </div>
          
          </div>
          <div className='border lg:m-5 mt-7 w-full  border-gray-300  rounded-md'>
            <div className='w-full relative'>
            <img className='h-44 w-full   ' src={offer_image} alt="" />  
            <img className='  md:w-36  w-1/5 rounded-fill absolute top-1/2 bottom-1/2 mt-7 right-5 mb-5' src={offer_logo} alt="" />  
            </div>
            <div className='card_content md:mt-20 p-5 mt-5'>
             <h4 className='lg:text-2xl text-gray-600 mt-4 font-medium'>مختبر البرج</h4>
             <p className='lg:text-lg text-gray-400 mt-4' >خصومات علي التحاليل تصل ل 70%</p>
            </div>
          
          </div>
          <div className='border lg:m-5 mt-7 w-full  border-gray-300  rounded-md'>
            <div className='w-full relative'>
            <img className='h-44 w-full   ' src={offer_image} alt="" />  
            <img className='  md:w-36  w-1/5 rounded-fill absolute top-1/2 bottom-1/2 mt-7 right-5 mb-5' src={offer_logo} alt="" />  
            </div>
            <div className='card_content md:mt-20 p-5 mt-5'>
             <h4 className='lg:text-2xl text-gray-600 mt-4 font-medium'>مختبر البرج</h4>
             <p className='lg:text-lg text-gray-400 mt-4' >خصومات علي التحاليل تصل ل 70%</p>
            </div>
          
          </div>

         </div>
         </div>

        </div>
      </div>
    </>
  )
}

export default Offerpage
