import React from 'react'
import { FaInstagram ,FaFacebookF , FaSnapchatGhost ,FaTiktok  ,FaTwitter  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import  logo from '../../assets/logofooter.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <div className=' bg-blue-50  w-full '>
          <div className="container mx-auto">
            <div className="footer_sec flex justify-center items-center flex-col  sm:px-10 ">
         <div className='social flex  items-center flex-col-reverse lg:flex-row  gap-6 sm:mx-10  mt-20  lg:mx-20  '>
          <div className='flex  items-center   gap-6'>
             <Link to='' className='text-cyan-800 text-xl '>
                <SiGmail />
            </Link> 
            <Link to='' className='text-cyan-800 text-xl '>
                <FaSnapchatGhost  />
            </Link> 
            <Link to='' className='text-cyan-800 text-xl '>
                <FaTiktok  />
            </Link> 
            
            <Link to='' className='text-cyan-800 text-xl '>
                <FaInstagram />
            </Link>
            <Link to='' className='text-cyan-800 text-xl '>
                <FaTwitter  />
            </Link>
            <Link to='' className='text-cyan-800 text-xl '>
                <FaFacebookF />
            </Link>
          </div>
        
            <div className='lg:border-r-2 border-cyan-800 px-6'>
             <img src={logo} alt=""  className='w-40' />
            </div>
         
         </div>
         <div className='links flex  items-center gap-6  mt-10   '>
             <Link to='/' className=' lg:border-r-2 border-gray-300 text-gray-600   lg:px-6 '>تواصل معنا</Link>
             <Link to='/labs' className=' lg:border-r-2 border-gray-300 text-gray-600    lg:px-6 '>من نحن</Link>
             <Link to='/Who_Us' className=' lg:border-r-2 border-gray-300 text-gray-600    lg:px-6 '>المختبرات</Link>
             <Link to='/Contact_Us' className=' lg:border-r-2 border-gray-300 text-gray-600     lg:px-6 '>الرئيسية</Link>
            
         
         </div>
         <div className=' flex  items-center  justify-center m-10 '>
           <p className='text-center text-gray-400 text-xl max-w-3xl'>تحاليلك هو موقع يوفر معلومات عن مختبرات التحاليل الطبية وخدماتها، مما يساعد المستخدمين في العثور على أحدث التقنيات والأسعار المناسبة لاحتياجاتهم الطبية.</p>
            
         
         </div>
       </div>
          </div>
        
       <div className='copyright flex justify-center items-center  bg-teal-500'>
       <span className='text-center mt-5 mb-5 text-white'>جميع الحقوق محفوظه @2024</span>
       </div>
        </div>
     
    </div>
  )
}

export default Footer
