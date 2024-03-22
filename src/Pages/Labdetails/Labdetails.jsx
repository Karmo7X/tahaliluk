import React from 'react'
import labprofile from '../../assets/labs/labprofile.png'
import linkicon from '../../assets/icons/lab/cil_link.png'
import phoneicon from '../../assets/icons/lab/phone.png'
import { CiBookmark } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import eyes from '../../assets/icons/lab/eye.png'
import star from '../../assets/icons/lab/star.png'
import { Link } from 'react-router-dom';
import './labdetail.scss'
const Labdetails = () => {
  return (
    <>
     <div  style={{ marginTop: "9rem", minHeight: "100vh" }}>
      <div className='head_labdetails flex  justify-center flex-col lg:flex-row '>
        <div className='lab_head_image flex items-center lg:items-start justify-center lg:justify-normal w-full lg:w-80 mb-7 lg:mb-0 ' >
          <img src={labprofile} alt="" className='border border-blue-400 rounded-full p-2 w-40 lg:w-64 ' />
        </div>
        <div className='lab_content flex items-start  flex-col'>
          <div className='flex items-center justify-around lg:justify-between w-full'>
             <div className='flex items-center gap-4'>
          
            <div>
 <h2
                className="text-xl lg:text-2xl  font-bold"
                style={{ color: "#036793" }}
              >
                مختبر
                <span className="text-teal-300"> المختبر </span>
              </h2>
            </div>
            <div>
             <CiBookmark className='text-2xl text-blue-400' /> 
              </div>
             

           
          </div>
     <div className= '  '>
            <span className='border rounded p-2 text-sm lg:text-lg border-blue-400 lg:px-5 lg:py-2 text-blue-400 flex items-center justify-between gap-2'><AiOutlineLogin />   855 زائر
</span>
          </div>

          </div>
           {/* if found discount */}
           <div className='bg-red-700 mx-10 lg:mx-0 py-1 px-2 mt-5 flex items-center justify-around lg:justify-between  border-l-4 w-20 border-red-800 '>
            <span className='text-xs text-white'>خصم ل 50%</span>
          </div>
         
         
        <div className='flex  items-center justify-around mt-5  w-full'>
         <p  className='flex  items-center gap-2  lg:text-lg' > <IoTimeOutline  className=' lg:text-2xl'/> ساعات العمل :
        
         </p>
         <span className='text-gray-500'>يومياً من 8 صباحاً إلي 11 مساءاً</span>
         
        </div>
        <div className='flex items-center justify-around lg:justify-between w-96  mt-5 '>
          <Link to='' className='flex items-center lg:text-lg gap-2 text-teal-400'>
         <img src={linkicon} alt=""  style={{width:'20px'}}/>  رابط موقع المختبر
          </Link>
          <Link to='' className='flex items-center lg:text-lg gap-2 text-teal-400'>
          <img src={phoneicon} alt=""  style={{width:'20px'}}/>     الخط الساخن : 19413
          </Link>
        </div>
        <div  className='flex items-center  justify-around lg:justify-between w-full gap-3  mt-5'>
        <div className='flex items-center border border-gray-600 rounded-3xl px-4 lg:px-6 py-1 gap-2'>
            <FaRegCheckCircle className='lg:text-lg text-blue-700'/> 
            <span className='lg:text-lg text-blue-700'>تأمينات</span>
        </div>
        <div className='flex items-center border border-gray-600 rounded-3xl px-4 lg:px-6 py-1 gap-2'>
        <FaRegCheckCircle className='lg:text-lg text-blue-700'/> 
        <span className='lg:text-lg text-blue-700'>تحاليل فردية</span>
        </div>
        <div className='flex items-center border border-gray-600 rounded-3xl px-4 lg:px-6 py-1 gap-2'>
        <FaRegCheckCircle className='lg:text-lg text-blue-700'/> 
        <span className='lg:text-lg text-blue-700'>باقات</span>
        </div>
        </div>
        </div>
       
      </div>
      <div className='aboutlab flex items-center justify-center text-center flex-col mt-10 lg:mt-20 '>
      <h2
                className="text-xl lg:text-2xl  font-bold"
                style={{ color: "#036793" }}
              >
                نبذه عن 
                <span className="text-teal-300"> المختبر </span>
              </h2>

       <p className='text-gray-600 lg:text-xl px-5 lg:px-20 mt-4'>أكبر مختبرات طبية في الشرق الأوسط، تأسست عام 1979 بواسطة الدكتورة مؤمنة كامل، تقدم أكثر من 1400 تحليل في مجالات متنوعة مع معايير جودة CAP، متواجدة في 218 فرعاً على مستوى مصر، تستخدم تقنية "خلية عمل" لتقليل الأخطاء البشرية وتوفير الراحة للعملاء، وتوفر نتائج الاختبارات مجاناً عبر موقعها الإلكتروني، ملتزمة بتجاوز توقعات العملاء وتحقيق وعودها.</p>       
      </div>
      <div className="content_hero_section5  flex items-center justify-center lg:grid lg:grid-cols-2 mt-10  mb-10   px-3   gap-4  flex-wrap lg:mt-14 lg:mb-10">
              <div className="card ">
                <div className="card_content flex gap-4   border p-3 lg:p-7 lg:py-10 border-solid rounded border-gray-500 ">
                  <img src={eyes} alt="" className="mt-4" />
                  <div>
                    <h5 className="mt-4 text-sm lg:text-2xl font-bold">
                  الرؤية
                  </h5>
                  <p className="mt-4   text-sm lg:text-2xl text-gray-500">
                  التزام قادتنا وموظفينا بمهمتنا وقيمنا الأساسية ، توفير البيئة المثالية خلال بيئة العمل ، التطبيق المبتكر للتقنيات الجديدة.                 
                  </p> 
                  </div>
                 
                  
                </div>
              </div>
              <div className="card ">
                <div className="card_content flex gap-4 border p-3 lg:p-7 lg:py-10 border-solid rounded border-gray-500 ">
                  <img src={star} alt="" className="mt-4" />
                  <div>
                    <h5 className="mt-4 text-sm lg:text-2xl font-bold">
                  الأهداف

                  </h5>
                  <p className="mt-4  text-sm lg:text-2xl text-gray-500">
                  تعمل مختبرات المختبر الطبية على تطوير وتقوية العلاقات التعاونية مع جميع عملائها ، بما في ذلك المرضى وعائلاتهم.
                  </p>
                  </div>
                  
                  
                </div>
              </div>
            
            </div>
    </div>
    </>
   
  )
}

export default Labdetails
