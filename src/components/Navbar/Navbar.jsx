import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
 import logo from '../../assets/logo_tahliluk.png'
 import './navbar.scss'
import { Link ,useLocation } from 'react-router-dom'
const Navbar = () => {
    


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation();
   
  return (
    <div className="navbar">
       <header className="fixed-top inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="list_nav -m-1.5 p-1.5">
              
              <img
                className="logo"
                src={logo}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
           
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            

            <Link to='/' className={` text-sm font-semibold leading-6  pb-3 text-gray-900 hover:text-teal-500 active:text-teal-500  focus:text-teal-500 focus:border-b-2 border-teal-500 ${ location.pathname === '/' ? 'text-teal-500 border-b-2 border-teal-500' : null }  `} >
            الرئيسية
            
            </Link>
            <Link to='/labs' className={` text-sm font-semibold leading-6  pb-3 text-gray-900 hover:text-teal-500 active:text-teal-500  focus:text-teal-500 focus:border-b-2 border-teal-500 ${ location.pathname === '/labs' ? 'text-teal-500 border-b-2 border-teal-500' : null }  `}>
            المختبرات
            
            </Link>
            <Link to='/Who_US' className={` text-sm font-semibold leading-6  pb-3 text-gray-900 hover:text-teal-500 active:text-teal-500  focus:text-teal-500 focus:border-b-2 border-teal-500 ${ location.pathname === '/Who_US' ? 'text-teal-500 border-b-2 border-teal-500' : null }  `} >
            من نحن
            
            </Link>
            <Link to='/Contact_Us' className={` text-sm font-semibold leading-6  pb-3 text-gray-900 hover:text-teal-500 active:text-teal-500  focus:text-teal-500 focus:border-b-2 border-teal-500 ${ location.pathname === '/Contact_Us' ? 'text-teal-500 border-b-2 border-teal-500' : null }  `}>
            تواصل معنا
            
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           
            <Link to='' className={`text-sm font-semibold leading-6 rounded-full  px-10 py-3 bg-teal-500 text-white hover:bg-teal-800  `} >
            تسجيل دخول
            
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="list_nav -m-1.5 p-1.5">
           
                <img
                className="logomobile"
                src={logo}
                alt=""
              />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
              

<Link to='/' className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-teal-500  focus:text-teal-500 focus:border-b-2 border-teal-500 ${ location.pathname === '/' ? 'text-teal-500 border-b-2 border-teal-500' : null }  `} >
            الرئيسية
            
            </Link>
            <Link to='/labs' className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-teal-500  focus:text-teal-500 focus:border-b-2 border-teal-500 ${ location.pathname === '/labs' ? 'text-teal-500 border-b-2 border-teal-500' : null }  `} >
            المختبرات
            
            </Link>
            <Link to='/Who_US' className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-teal-500  focus:text-teal-500 focus:border-b-2 border-teal-500 ${ location.pathname === '/Who_US' ? 'text-teal-500 border-b-2 border-teal-500' : null }  `} >
            من نحن
            
            </Link>
            <Link to='/Contact_Us' className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-teal-500  focus:text-teal-500 focus:border-b-2 border-teal-500 ${ location.pathname === '/Contact_Us' ? 'text-teal-500 border-b-2 border-teal-500' : null }  `} >
            تواصل معنا
            
            </Link>
                </div>
                <div className="py-6">
                <Link to='' className={`text-sm font-semibold leading-6 rounded-full  px-10 py-3 bg-teal-500 text-white hover:bg-teal-800  `} >
            تسجيل دخول
            
            </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
     
    </div>
  )
}

export default Navbar
