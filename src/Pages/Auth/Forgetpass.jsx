import React, { useEffect, useState ,Fragment ,useRef} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import email_icon from '../../assets/icons/Auth/email_icon.png'
import otp_icon from '../../assets/icons/Auth/message.png'
import forget_image from '../../assets/Auth_image/forget_image.png'
import password_icon from '../../assets/icons/Auth/password_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import './auth.scss'
import { IoEyeOffOutline ,IoEyeOutline  } from "react-icons/io5";
import { useDispatch } from 'react-redux'
const Forgetpass = () => {
    const navigate =useNavigate() 
    const dispatch= useDispatch()
    
    const [activestep,setactivestep]=useState(0)
   
      const [formdata ,setformdata]=useState({
    
       'name':'',
       'email':'',
       
    
    
    
    })

    const handlechange=(e)=>{
        const { name, value } = e.target;
    setformdata(prevState => ({
        ...prevState,
        [name]: value
      }))
    
    
    }

    // show password 
    const [showpass,setshowpass]=useState(false)
    const togglePasswordVisibility = () => {
        setshowpass(!showpass);
      };
       // show confirmpassword 
    const [showconfirmpass,setshowconfirmpass]=useState(false)
    const toggleconfirmPasswordVisibility = () => {
     setshowconfirmpass(!showconfirmpass);
      };
    useEffect(() => {
        const storedStep = localStorage.getItem('registrationStep');
        if (storedStep) {
            setactivestep(parseInt(storedStep));
        }
      }, []);
    const handleNext = () => {
        setactivestep((prevActiveStep) => {
          // Store the current step index in localStorage
          localStorage.setItem('registrationStep', (prevActiveStep + 1).toString());
          return prevActiveStep + 1;
        });
      };
    
      const handleBack = () => {
        setactivestep((prevActiveStep) => {
          // Store the current step index in localStorage
          localStorage.setItem('registrationStep', (prevActiveStep - 1).toString());
          return prevActiveStep - 1;
        });
      };
      const handlesubmit =()=>{

        // if register successfull
        navigate('/')
        localStorage.setItem('registrationStep',0);
       
   
   }
      const getStepContent = (step) => {
        switch (step) {
          case 0:
            return(
                
                <>
                 <div className='forget_pass_form  w-full p-3 lg:w-1/2 md:w-full  mt-52  lg:mt-52 '>
             
             <div className='container mx-auto'>
                 <div className="flex min-h-full flex-1 flex-col justify-center px-2 lg:py-12 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
       <h2
                className="text-xl lg:text-2xl mb-6 font-bold text-center"
                style={{ color: "#036793" }}
              >
                نسيت
                <span className="text-teal-300">  كلمة المرور ؟ </span>
              </h2>
              <p className='text-gray-500 text-lg text-center'>الرجاء إدخال البريد الإلكتروني المسجل به ستتلقى رمز
التحقق من خلاله</p>
       </div>

       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className="space-y-6" action="#" method="POST">
         <div>
             
             <div className="mt-5 flex items-center border-0 rounded-full px-4 bg-gray-100">
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
           <div className='flex items-center justify-center  gap-4'>
             
             <button
               type="button"
               onClick={handleNext}
               className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
           إرسال رمز التحقق
     
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
                
                </>
                ) ;
          case 1:
            return(
                
                <>
                <div className='forget_pass_form  w-full p-3 lg:w-1/2 md:w-full  mt-52  lg:mt-52 '>
            
            <div className='container mx-auto'>
                <div className="flex min-h-full flex-1 flex-col justify-center px-2 lg:py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
      <h2
               className="text-xl lg:text-2xl mb-6 font-bold text-center"
               style={{ color: "#036793" }}
             >
               إدخال
               <span className="text-teal-300">   رمز التحقق </span>
             </h2>
             <p className='text-gray-500 text-lg text-center'>  
             الرجاء إدخال رمز التحقق المرسل علي البريد الالكتروني   
  </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
        <div>
            
            <div className="mt-5 flex items-center border-0 rounded-full px-4 bg-gray-100">
              <img src={otp_icon} alt="" className='w-7' />
              <input
                id="otp"
                name="otp"
                type="text"
               
                autoComplete="otp"
                placeholder='رمز التحقق'
                required
                // onChange={(e)=>setemail(e.target.value)}
                className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className='flex items-center justify-center  gap-4'>
            
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
        تأكيد
    
            </button>
          
          
          </div>
               
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
        لم يتم الإرسال ؟
           <span  className="font-semibold leading-6 text-teal-500 hover:text-teal-700">
           إعادة الإرسال
           </span>
         </p>

      </div>
    </div>
            </div>
          
            
          </div> 
               
               </>
                ) ;
          case 2:
            return(
                <>
                <div className='forget_pass_form  w-full p-3 lg:w-1/2 md:w-full  mt-52  lg:mt-52 '>
            
            <div className='container mx-auto'>
                <div className="flex min-h-full flex-1 flex-col justify-center px-2 lg:py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
      <h2
               className="text-xl lg:text-2xl mb-6 font-bold text-center"
               style={{ color: "#036793" }}
             >
              إعادة تعيين 
               <span className="text-teal-300">  كلمة المرور</span>
             </h2>
             
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
        <div>
             
             <div className="mt-5 flex items-center border-0 rounded-full px-4 bg-gray-100">
            <img src={password_icon} alt="" className='w-7' />
            <input
              id="password"
              name="password"
              
             
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
          <div className="mt-5 flex items-center border-0 rounded-full px-4 bg-gray-100">
            <img src={password_icon} alt="" className='w-7' />
            <input
              id="password"
              name="password"
              
              
              type={showconfirmpass ? "text" : "password"}
              autoComplete="password"
              placeholder='كلمة المرور '
              required
              onChange={(e)=>setpassword(e.target.value)}
              className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
            <span onClick={toggleconfirmPasswordVisibility}>
                {showconfirmpass ? (<><IoEyeOutline className='text-gray-400 text-2xl'/></>):(<><IoEyeOffOutline className='text-gray-400 text-2xl'/></>)}
            </span>
          </div>
       </div>
          <div className='flex items-center justify-center  gap-4'>
            
            <button
              type="button"
              onClick={handlesubmit}
              className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
       إعادة التعيين
    
            </button>
          
          
          </div>
               
        </form>

       

      </div>
    </div>
            </div>
          
            
          </div> 
               
               </>
                ) ;
          default:
            return 'Unknown step';
        }
      };
    
   
   
  return (
    <>
      <div className='mb-20 lg:mb-0'>
      <Navbar/>  
   </div>
   <div style={{marginTop:'0rem',minHeight:'100vh' ,maxHeight:'100vh' , overflow: 'hidden' }}>
    <div className='forget_pass_section'>
     <div className=' flex  justify-center  lg:justify-between  w-full   '>
     {getStepContent(activestep)}
       
           <div className='top_section  '>
             <div  className='container mx-auto flex items-center justify-center'>
             <div className="image_sec  hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center lg:mt-10 px-10 ">
             <img src={forget_image} alt="" className="img_hero lg:w-full mt-4" />
           </div>
             </div>
           </div>
      

       </div> 
    </div>
   
     
   </div>
      
    </>
  )
}

export default Forgetpass
