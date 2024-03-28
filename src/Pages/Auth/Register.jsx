import React, { useEffect, useState ,Fragment ,useRef} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import email_icon from '../../assets/icons/Auth/email_icon.png'
import user_icon from '../../assets/icons/Auth/user_icon.png'
import phone_icon from '../../assets/icons/Auth/phone.png'
import gender_icon from '../../assets/icons/Auth/gender.png'
import date_icon from '../../assets/icons/Auth/date.png'
import register_image from '../../assets/Auth_image/register_image.png'
import { Link, useNavigate } from 'react-router-dom'
import './auth.scss'
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import password_icon from '../../assets/icons/Auth/password_icon.png'
import { IoEyeOffOutline ,IoEyeOutline  } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

import { FaArrowLeftLong ,FaArrowRightLong  } from "react-icons/fa6";
import { useDispatch } from 'react-redux'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Register = () => {

  


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
      }

const navigate =useNavigate() 
    const dispatch= useDispatch()
    const [selected, setSelected] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const datePickerRef = useRef(null);
  
    const openDatePicker = () => {
      setIsOpen(true);
    };
  
    const [activestep,setactivestep]=useState(0)
   
      const [formdata ,setformdata]=useState({
    
       'name':'',
       'email':'',
       'phone':'',
       'gemder':selected,
       'date':selectedDate,
       'password':'',
       'confirm_password':''
    
    
    
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
                 <div>
             
             <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
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
             
             <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
               <img src={email_icon} alt="" className='w-7' />
               <input
                 id="email"
                 name="email"
                 type="email"
                
                 autoComplete="email"
                 placeholder='البريد الإكتروني'
                 required
                 onChange={(e)=>handlechange()}
                 className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
               />
             </div>
           </div>
            <div>
             
              <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
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
         
           <div className='flex items-center justify-center  gap-4'>
             <button
               type="button"
               disabled={activestep === 0}
               onClick={handleBack}
               className="flex items-center gap-4  justify-center rounded-full border border-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-teal-500 shadow-sm hover:bg-teal-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
             >
            <FaArrowRightLong   className='text-lg'/>
     
             </button> 
              <button
               type="button"
               onClick={handleNext}
               className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
          <span className='text-lg'> التالي</span> <FaArrowLeftLong  className='text-lg'/>
     
             </button>
           
           </div>
                
                </>
                ) ;
          case 1:
            return(
                
                <>
                 <div>
             
             <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
               <img src={gender_icon} alt="" className='w-7' />
               <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>

          <div className="relative mt-2 w-full bg-transparent">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent border-none  p-4 mb-2  text-left text-gray-400     outline-none   sm:text-sm sm:leading-6">
              <span className="flex items-center">
              
               {selected !== '' ?(<>
               <span className="ml-3 block truncate">{selected === 'male' ? 'ذكر':'انثي' }</span>
               </>):(<>
               
               <span className="ml-3 block truncate">النوع</span>
               
               </>)
               
               
               }
               
                
              </span>
              <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              
              <Listbox.Option
                    
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={"male"}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                           ذكر  
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                  <Listbox.Option
                    
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={"female"}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                          انثي 
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
             </div>
           </div>
          <div>
             
             <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
               <img src={date_icon} alt="" className='w-7' />
               <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        ref={datePickerRef}
        locale="ar" // Set Arabic locale
        placeholderText="تاريخ الميلاد" // Set placeholder text in Arabic
        className="block w-full border-none outline-none p-4 text-gray-400 shadow-sm bg-transparent placeholder-gray-400 sm:text-sm sm:leading-6"
        open={isOpen} // Set the open state of the date picker
        onClose={() => setIsOpen(false)} // Close the date picker when it's closed
      />
      <MdKeyboardArrowDown className='text-2xl text-gray-400'   onClick={openDatePicker}/>

             </div>
           </div>
            
         
           <div className='flex items-center justify-center  gap-4'>
             <button
               type="button"
               disabled={activestep === 0}
               onClick={handleBack}
               className="flex items-center gap-4  justify-center rounded-full border border-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-teal-500 shadow-sm hover:bg-teal-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
             >
            <FaArrowRightLong   className='text-lg'/>
     
             </button> 
             <button
               type="button"
               onClick={handleNext}
               className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
          <span className='text-lg'> التالي</span> <FaArrowLeftLong  className='text-lg'/>
     
             </button>
           
           
           </div>
                
                </>
                ) ;
          case 2:
            return(
                
                <>
                 <div>
             
                 <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
                <img src={password_icon} alt="" className='w-7' />
                <input
                  id="password"
                  name="password"
                  
                 
                  type={showpass ? "text" : "password"}
                  autoComplete="password"
                  placeholder='تأكيد كلمة المرور  '
                  required
                  onChange={(e)=>setpassword(e.target.value)}
                  className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
                <span onClick={togglePasswordVisibility}>
                    {showpass ? (<><IoEyeOutline className='text-gray-400 text-2xl'/></>):(<><IoEyeOffOutline className='text-gray-400 text-2xl'/></>)}
                </span>
              </div>
              <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
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
               disabled={activestep === 0}
               onClick={handleBack}
               className="flex items-center gap-4  justify-center rounded-full border border-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-teal-500 shadow-sm hover:bg-teal-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
             >
            <FaArrowRightLong   className='text-lg'/>
     
             </button> 
             <button
               type="button"
               onClick={handlesubmit}
               className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
            إنشاء الحساب   
     
             </button>
           
           
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
       <div className='flex items-center justify-center flex-row-reverse lg:justify-between  w-full  '>
              <div className='register_form lg:w-1/2 md:w-full  w-full p-3  mt-24 lg:mt-10'>
             
             <div className='container mx-auto'>
                 <div className="flex min-h-full flex-1 flex-col justify-center px-2 lg:py-12 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
       <h2
                className="text-xl lg:text-2xl mb-6 font-bold text-center"
                style={{ color: "#036793" }}
              >
                إنشاء
                <span className="text-teal-300"> حساب جديد </span>
              </h2>
       </div>

       <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className="space-y-6" action="#" method="POST">
         {getStepContent(activestep)}
        
         </form>

         <p className="mt-10 text-center text-sm text-gray-500">
         لدي حساب بالفعل ؟
           <Link to='/login' className="font-semibold leading-6 text-teal-500 hover:text-teal-700">
           تسجيل الدخول
           </Link>
         </p>
       </div>
     </div>
             </div>
           
             
           </div> 
           <div className='right_section  '>
             <div  className='container mx-auto'>
             <div className="image_sec  hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center lg:mt-10 ">
             <img src={register_image} alt="" className="img_hero lg:w-full mt-4" />
           </div>
             </div>
           </div>
      

       </div>
   </div>
      
   </>
 )
}

export default Register
