import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import email_icon from '../../assets/icons/Auth/email_icon.png'
import password_icon from '../../assets/icons/Auth/password_icon.png'
import login_image from '../../assets/Auth_image/login_image.png'
import { Link, useNavigate } from 'react-router-dom'
import './auth.scss'
import { IoEyeOffOutline ,IoEyeOutline  } from "react-icons/io5";
import { useDispatch } from 'react-redux'
const Login = () => {
   
     const [email,setemail]=useState(null)
     const [password,setpassword]=useState(null)
     const [remember,setremember]=useState(false)
     const navigate =useNavigate() 
     const dispatch =useDispatch()
    // show password 
    const [showpass,setshowpass]=useState(false)
    const togglePasswordVisibility = () => {
        setshowpass(!showpass);
      };
    
    
     const handlesubmit =(e)=>{
    e.preventDefault()
        navigate('/')
     if(remember){
    
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
    
    }
    }
    
  return (
    <>
    <div className='mb-20 lg:mb-0'>
       <Navbar/>  
    </div>
    
    <div style={{marginTop:'0rem',minHeight:'100vh' ,maxHeight:'100vh' , overflow: 'hidden' }}>
        <div className='flex items-center justify-center lg:justify-between  w-full  '>
               <div className='login_form lg:w-1/2 md:w-full w-full p-3 mt-24 lg:mt-6'>
              
              <div className='container mx-auto'>
                  <div className="flex min-h-full flex-1 flex-col justify-center px-2 lg:py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
               className="text-xl lg:text-2xl mb-6 font-bold text-center"
               style={{ color: "#036793" }}
             >
               تسجيل
               <span className="text-teal-300"> الدخول </span>
             </h2>
         
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
             
             <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
               <img src={email_icon} alt="" className='w-7' />
               <input
                 id="email"
                 name="email"
                 type="email"
                
                 autoComplete="email"
                 placeholder='البريد الإكتروني'
                 required
                 onChange={(e)=>setemail(e.target.value)}
                 className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
               />
             </div>
           </div>
           

            <div>
             
              <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
                <img src={password_icon} alt="" className='w-7' />
                <input
                  id="password"
                  name="password"
                  
                  value={password}
                  type={showpass ? "text" : "password"}
                  autoComplete="password"
                  placeholder='كلمة المرور '
                  required
                  onChange={(e)=>setpassword(e.target.value)}
                  className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
                <span onClick={togglePasswordVisibility}>
                    {showpass ? (<><IoEyeOutline className='text-gray-400 text-2xl'/></>):(<><IoEyeOffOutline className='text-gray-400 text-2xl'/></>)}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
            <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      onChange={(e)=>setremember(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-600">
                    تذكرني
                    </label>
                    
                  </div>
                </div>

                <div className="text-sm">
                  <Link to='/forget_password' className="font-semibold text-teal-500 hover:text-teal-700">
                  نسيت كلمة المرور ؟
                  </Link>
                </div>
              </div>

            <div className='flex items-center justify-center'>
              <button
                type="button"
                onClick={(e)=>handlesubmit()}
                className="flex w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
             تسجيل الدخول 
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          ليس لدي حساب ؟ 
            <Link to='/Register' className="font-semibold leading-6 text-teal-500 hover:text-teal-700">
            إنشاء حساب جديد
            </Link>
          </p>
        </div>
      </div>
              </div>
            
              
            </div> 
            <div className='left_section  '>
              <div  className='container mx-auto'>
              <div className="image_sec  hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center lg:mt-10 ">
              <img src={login_image} alt="" className="img_hero lg:w-full mt-4" />
            </div>
              </div>
            </div>
       

        </div>
    </div>
       
    </>
  )
}

export default Login
