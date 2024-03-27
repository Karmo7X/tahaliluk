import React, { useState } from 'react'
import gmail from  '../../assets/icons/Auth/gamil.png'
import facebook from  '../../assets/icons/Auth/facebook.png'
import snap from  '../../assets/icons/Auth/snap.png'
import instagram from  '../../assets/icons/Auth/instagram.png'
import tiktok from  '../../assets/icons/Auth/tiktok.png'
import twitter from  '../../assets/icons/Auth/twitter.png'
import message_icon from '../../assets/icons/Auth/message.png'
import user_icon from '../../assets/icons/Auth/user_icon.png'
import phone_icon from '../../assets/icons/Auth/phone.png'
import { Link } from 'react-router-dom'
import { IoSend } from "react-icons/io5";

const Contact = () => {


  const [formdata ,setformdata]=useState({
    
    'name':'',
    'email':'',
    'phone':'',
    
 
 
 })

 const handlechange=(e)=>{
     const { name, value } = e.target;
 setformdata(prevState => ({
     ...prevState,
     [name]: value
   }))
 
 
 }

  return (
    <>
    <div style={{marginTop:'7rem',minHeight:'100vh'}}>
     <div className="contact_us_sec flex sm:items-center justify-center flex-col lg:flex-row lg:justify-between mb-20 lg:mb-10   px-10">
      <div className='contact_us_content w-full lg:w-1/2 '>
        <div className='mt-10 w-full' >
        <h2
               className="text-xl lg:text-2xl mb-6 font-bold "
               style={{ color: "#036793" }}
             >
               من
               <span className="text-teal-300">  نحن </span>
             </h2>
             <p className='text-gray-600 text-xl w-full lg:w-3/4'>
             نحن منصة سعودية نسعي جاهدين لتوفير تجربة مستخدم مميزة ومريحة، و تسهيل الوصول إلي معلومات موثوقية و خدمات ذات جودة عالية في   <br />  مجال التحاليل الطبية
             </p>
        </div>
        <div className='mt-14 w-full' >
        <h2
               className="text-xl lg:text-2xl mb-6 font-bold "
               style={{ color: "#036793" }}
             >
               تواصل
               <span className="text-teal-300">  معنا </span>
             </h2>
             <p className='text-gray-600 text-xl w-full lg:w-3/4'>
             سعداء لإستخدامك خدمتنا أرسل لنا إستفسارك  <br /> و سيتم الرد عليك في أقرب وقت
             </p>
             <div className='flex  items-center mt-6  gap-0'>
               <Link>
                <img src={gmail} alt="" sytle={{width:'20px'}}/>
               </Link>
               <Link>
                <img src={snap}  alt="" sytle={{width:'20px'}}/>
               </Link>
               <Link>
                <img src={tiktok} alt="" sytle={{width:'20px'}}/>
               </Link>
               <Link>
               <img src={instagram} alt="" sytle={{width:'20px'}}/>
               </Link>
               <Link>
               <img src={twitter} alt="" sytle={{width:'20px'}}/>
               </Link>
               
               <Link>
               <img src={facebook} alt="" sytle={{width:'20px'}}/>
               </Link>
               
               
               
      
               
              
               

               
             
                

              
             
                

              
               
                

             
             </div>
        </div>
      </div>
      <div className='contact_us_form w-full lg:w-1/2 mt-10 border border-gray-200 rounded-md p-2 lg:p-5'>
         <div className='mt-5 flex items-center justify-center flex-col p-5'>
         <h2
               className="text-xl lg:text-2xl mb-6 font-bold  text-dark"
              
             >
              استفسارك
             </h2>
           <div className='w-full'>
           <div >
             
             <div className="mt-7 flex items-center border-0 rounded-full px-4 bg-gray-100">
               <img src={user_icon} alt="" className='w-7' />
               <input
                 id="name"
                 name="name"
                 type="text"
                 autoComplete="name"
                 placeholder='اسم المستخدم '
                 required
                 onChange={(e)=>handlechange()}
                 className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
               />
             </div>
           </div>
      
            <div>
             
              <div className="mt-7 flex items-center border-0 rounded-full px-4 bg-gray-100">
                <img src={phone_icon} alt="" className='w-7' />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                 
                  autoComplete="phone"
                  placeholder='رقم الهاتف '
                  required
                  onChange={(e)=>handlechange()}
                  className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>

             
            </div>
            <div>
             
             <div className="mt-7 flex items-center border-0 rounded-md px-4 bg-gray-100">
               <img src={message_icon} alt="" className='w-7'style={{position:'relative' ,top:"-102px"}} />
               <textarea id="about" name="about" placeholder='رسالة الاستفسار' rows="10" style={{resize:'none'}} class="block p-4 w-full rounded-md border-0 outline-none text-gray-400 bg-transparent placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
              
          
             </div>

            
           </div>

           </div>
           <div className='flex items-center justify-center mt-7'>
           <button
               type="button"
              //  onClick={handleNext}
               className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
          <span className='text-lg'> ارسال</span> <IoSend  className='text-lg' style={{transform:'scaleX(-1)'}}/>
     
             </button>
            </div>
         </div>
      </div>
     </div>
    </div>
      
    </>
  )
}

export default Contact
