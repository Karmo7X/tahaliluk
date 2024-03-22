import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "./home.scss";
import hero_image from "../../assets/homeImages/hero_image.png";
import hero4_image from "../../assets/homeImages/hero4img.png";
import staricon from '../../assets/icons/home_icons/star.png'
import licenceicon from '../../assets/icons/home_icons/licence.png'
import labicon from '../../assets/icons/home_icons/labicon.png'
import telescopeicon from '../../assets/icons/home_icons/telescope.png'
import time from '../../assets/icons/home_icons/time.png'
import money from '../../assets/icons/home_icons/money.png'
import { CiBookmark } from "react-icons/ci";
import slider_image from "../../assets/homeImages/slider_image.png";
import lab_img from "../../assets/homeImages/labimg.png";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Link, useNavigate } from "react-router-dom";
import Slider_offers from "../../components/Slider_offers/Slider_offers";

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
  const navigte=useNavigate()
  const handlenavigate=()=>{
  navigte('/labs')
  
  }
  return (
    <>

<div className="homepage_sec " style={{marginTop:'6rem',minHeight:'100vh'}}>
       <div className=''>
<div className=" hero_section w-full flex flex-col lg:flex-row lg:justify-between px-3 text-center lg:text-right  lg:px-10 ">
            <div className="w-full lg:w-1/2 lg:px-0  mt-20">
              <h2
                className="text-3xl lg:text-4xl  mb-6 font-semibold"
                style={{ color: "#036793" }}
              >
                تعرف على{" "}
                <span className="text-teal-300 font-bold">
                  {" "}
                  مختبرات التحاليل{" "}
                </span>
                الرائدة وتفاصيلها لتحقيق
                <span className="text-teal-300 font-bold">
                  {" "}
                  النتائج المذهلة{" "}
                </span>
              </h2>
              <p className="text-gray-500 lg:text-2xl mt-16 mb-16">
                {" "}
                أحدث التقنيات والخدمات المقدمة{" "}
              </p>
              <div className="search bg-white flex justify-between items-center w-full px-5 lg:gap-0 mt-5 shadow-lg p-2 lg:p-3 rounded-full">
                <input
                  type="text"
                  placeholder="ابحث عن مختبر أو التحليل"
                  className=" lg:w-full outline-none lg:px-3 lg:py-3 rounded-full bg-transparent"
                />
                <button
                  className={`lg:text-lg flex justify-center gap-2 items-center font-semibold leading-6 rounded-full px-4 py-2   lg:px-14 lg:py-3 bg-teal-500 text-white hover:bg-teal-800  `}
                onClick={handlenavigate}
                >
                  <IoIosSearch className="text-xl" /> بحث
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-10 lg:mt-20 ">
              <img src={hero_image} alt="" className="img_hero lg:w-full" />
            </div>
          </div>
          <div  className="hero_section2 flex items-center  justify-center px-3 lg:px-5 mt-20 mb-20">
            <button
              className={` swiper-button_next text-center flex items-center text-lg p-2 lg:p-5   justify-center `}
              style={{
                border: "1px solid #00C1C0",
                borderRadius: "50px",
                background: isLast ? "#00C1C0" : "transparent",
                color: isLast ? "#fff" : "#00C1C0",
              }}
              onClick={() => handleNext()}
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
              ref={SlideRef}
              onSlideChange={onSlideChange}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide >
                <div className="flex items-center  justify-center lg:p-20">
                  <img src={slider_image} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center  justify-center lg:p-20">
                  <img src={slider_image} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center  justify-center lg:p-20">
                  <img src={slider_image} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center  justify-center lg:p-20">
                  <img src={slider_image} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center  justify-center lg:p-20">
                  <img src={slider_image} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              className={`swiper-button_prev text-center flex items-center  text-lg p-2 lg:p-5 justify-center `}
              style={{
                border: "1px solid #00C1C0",
                borderRadius: "50px",
                background: isFirst ? "#00C1C0" : "transparent",
                color: isFirst ? "#fff" : "#00C1C0",
              }}
              onClick={() => handlePrev()}
            >
              <FaArrowLeftLong />
            </button>
          </div>
         
          <div  className="hero_section3 flex  items-center flex-col  justify-center  lg:px-5 mt-20 mb-20">
            <div className="head_Sec">
              <h1 className=" text-xl lg:text-4xl text-center font-bold text-blue-700">
                <span className="text-teal-300 ">المختبرات </span> الأكثر شيوعاً
              </h1>
              <p className="text-gray-500  text-xl text-center lg:text-4xl mt-5 mb-5">
                {" "}
                أحدث التقنيات والخدمات المقدمة{" "}
              </p>
            </div>

            <div className="content_hero_section3  flex items-center justify-center   lg:grid lg:grid-cols-3 gap-10  flex-wrap mt-14">
            <div className="card ">
                <div style={{position:'relative'}} className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col">
                  <div className='text-teal-300' style={{position:"absolute",top:'15px' ,fontSize:'30px' ,right:'20px' }}>
                  <CiBookmark />

                  </div>
                  
                  <img src={lab_img} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-lg font-semibold">
                    مختبر نور البيان
                  </h5>
                  <p className="mt-4  text-sm lg:text-lg text-gray-600">
                    تحاليل فردية . تأمين
                  </p>
                  <Link
                    to="/lab_deatils"
                    className="icon rounded-full p-4 border text-white bg-teal-500 hover:bg-teal-800  mt-4"
                  >
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
              <div className="card ">
                <div style={{position:'relative'}} className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col">
                  <div className='text-teal-300' style={{position:"absolute",top:'15px' ,fontSize:'30px' ,right:'20px' }}>
                  <CiBookmark />

                  </div>
                  
                  <img src={lab_img} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-lg font-semibold">
                    مختبر نور البيان
                  </h5>
                  <p className="mt-4  text-sm lg:text-lg text-gray-600">
                    تحاليل فردية . تأمين
                  </p>
                  <Link
                    to="/lab_deatils"
                    className="icon rounded-full p-4 border text-white bg-teal-500 hover:bg-teal-800  mt-4"
                  >
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
               <div className="card ">
                <div style={{position:'relative'}} className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col">
                  <div className='text-teal-300' style={{position:"absolute",top:'15px' ,fontSize:'30px' ,right:'20px' }}>
                  <CiBookmark />

                  </div>
                  
                  <img src={lab_img} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-lg font-semibold">
                    مختبر نور البيان
                  </h5>
                  <p className="mt-4  text-sm lg:text-lg text-gray-600">
                    تحاليل فردية . تأمين
                  </p>
                  <Link
                    to="/lab_deatils"
                    className="icon rounded-full p-4 border text-white bg-teal-500 hover:bg-teal-800  mt-4"
                  >
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
              <Link
                to="/labs"
                className="icon rounded-full px-14 lg:px-20 p-4 border text-white bg-teal-500 hover:bg-teal-800  mt-4"
              >
                عرض المزيد
              </Link>
            </div>
          </div>
          <div className=" hero_section4 flex flex-col lg:flex-row-reverse  mb-10 lg:justify-between px-3 text-center lg:text-right lg:px-0 ">
            <div className="w-full lg:w-1/2 lg:px-4  mt-20">
              <h2
                className="text-xl lg:text-2xl mb-6 font-bold"
                style={{ color: "#036793" }}
              >
                عن موقع
                <span className="text-teal-300"> تحاليلك </span>
              </h2>
              <p className="text-gray-500  lg:text-3xl mt-10 mb-10" >
  تحاليلك هو موقع يوفر معلومات عن مختبرات التحاليل الطبية
  وخدماتها، مما يساعد المستخدمين في العثور على أحدث التقنيات
  والأسعار المناسبة لاحتياجاتهم الطبية.
</p>

              <div className="flex justify-center items-center lg:items-start lg:justify-start  mt-10">
                <Link
                  to=""
                  className="icon rounded-full px-14 lg:px-20 p-4 border text-white bg-teal-500 hover:bg-teal-800  mt-4"
                >
                  عرض المزيد
                </Link>
              </div>
            </div>
            <div className="image_sec  hidden lg:flex lg:items-center lg:justify-center w-full lg:w-1/3 mt-10 lg:mt-10 ">
              <img src={hero4_image} alt="" className="img_hero lg:w-full" />
            </div>
          </div>
     
          <div  className="hero_section6 flex  items-center flex-col  justify-center  lg:px-5 mt-20 mb-20">
            <div className="head_Sec">
              <h1 className=" text-xl lg:text-4xl text-center font-bold text-blue-700">
                 اختر من بين  <span className="text-teal-300 ">أفضل العروض </span>
              </h1>
              
            </div>
           <div className="">
            {/* <Slider_offers className='slider'/> */}
           
            
           </div>
          
          
          </div>
          <div  className="hero_section5 flex  items-center flex-col  justify-center  lg:px-5 mt-20 mb-20">
            <div className="head_Sec">
              <h1 className=" text-xl lg:text-4xl text-center font-bold text-blue-700">
                  اختيار       <span className="text-teal-300 ">المختبر المناسب  
 </span>  
 
            
              </h1>
              <p className="text-gray-500  text-lg text-center lg:text-2xl mt-5 mb-5">
                {" "}
                اختيار المختبر المناسب
إليك بعض النصائح التي قد تساعدك في اختيار المختبر المناسب{" "}
              </p>
            </div>

            <div className="content_hero_section5  flex items-center justify-center lg:grid lg:grid-cols-3   px-3   gap-4  flex-wrap mt-14">
              <div className="card ">
                <div className="card_content hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-5 lg:py-10 border-solid rounded border-teal-300 ">
                  <img src={staricon} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-2xl font-bold">
                  السمعة والتاريخ

                  </h5>
                  <p className="mt-4  w-80 text-sm lg:text-2xl text-gray-500">
                   
تأكد من سمعة المختبر وتاريخه
في تقديم الخدمات
                  </p>
                  
                </div>
              </div>
              <div className="card ">
                <div className="card_content hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-5 lg:py-10 border-solid rounded border-teal-300 ">
                  <img src={licenceicon} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-2xl font-bold">
                  التراخيص والاعتمادات

                  </h5>
                  <p className="mt-4  w-80 text-sm lg:text-2xl text-gray-500">
                   
                  تأكد من أن المختبر معتمد وله
التراخيص اللازمة
                  </p>
                  
                </div>
              </div>
              <div className="card ">
                <div className="card_content hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-5 lg:py-10 border-solid rounded border-teal-300 ">
                  <img src={labicon} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-2xl font-bold">
                  التخصصات المتوفرة
                  </h5>
                  <p className="mt-4  w-80 text-sm lg:text-2xl text-gray-500">
                  تأكد من توفر التحاليل التي
تحتاجها والتخصصات المتاحة
                  </p>
                  
                </div>
              </div>
               <div className="card ">
                <div className="card_content hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-5 lg:py-10 border-solid rounded border-teal-300 ">
                  <img src={telescopeicon} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-2xl font-bold">
                 الجودة والتكنولوجيا
                  </h5>
                  <p className="mt-4  w-80 text-sm lg:text-2xl text-gray-500">
                  ابحث عن مختبر يستخدم تقنيات
متطورة ويضمن دقة النتائج
                  </p>
                  
                </div>
              </div>
              <div className="card ">
                <div className="card_content hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-5 lg:py-10 border-solid rounded border-teal-300 ">
                  <img src={money} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-2xl font-bold">
                  التكلفة والتأمين
                  </h5>
                  <p className="mt-4  w-80 text-sm lg:text-2xl text-gray-500">
                  تحقق من تكاليف الخدمة
وتغطية التأمين الصحي
                  </p>
                  
                </div>
              </div>
              <div className="card ">
                <div className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-5 lg:py-10 border-solid rounded border-teal-300 ">
                  <img src={time} alt="" className="mt-4" />
                  <h5 className="mt-4 text-sm lg:text-2xl font-bold">
                 الموقع والساعات
                  </h5>
                  <p className="mt-4  w-80 text-sm lg:text-2xl text-gray-500">
                  تأكد من ملائمة الموقع
                  <br/>
                  وساعات العمل لجدولك

                  </p>
                  
                </div>
              </div>
            </div>
           
          </div>


       </div>
          
          
       
      </div>

    </> 
      
    
  );
};

export default Home;
