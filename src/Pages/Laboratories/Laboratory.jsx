import React from "react";
import { CiBookmark } from "react-icons/ci";
import lab_img from "../../assets/homeImages/labimg.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import notfound from '../../assets/labs/Frame 427321070.png'
const Laboratory = () => {
  return (
    <div style={{ marginTop: "9rem", minHeight: "100vh" }}>
      <div className="laboratories_sec flex  items-center flex-col  justify-center  lg:px-5 mt-20 mb-20">
        <div className="filter flex items-center justify-center">

        </div>
        <div className="flex items-start lg:items-center flex-col lg:flex-row justify-between w-full px-2 lg:px-3">
          <div className="flex items-center justify-center gap-4 mt-3  ">
            <div className="flex items-center justify-between  py-3 px-5 border border-gray-600 rounded">
            <label class="inline-flex items-center gap-4 cursor-pointer rtl"> 
             <span class="rtl:me-3 text-sm font-medium text-gray-900 dark:text-gray-800">تأمينات </span>

  <input type="checkbox" value="" class="sr-only peer" />
  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>

           
            </div>
            <div className="flex items-center justify-between py-3 px-5 border border-gray-600 rounded">
            <label class="inline-flex items-center gap-4 cursor-pointer rtl"> 
             <span class="rtl:me-3 text-sm font-medium text-gray-900 dark:text-gray-800">باقات </span>

  <input type="checkbox" value="" class="sr-only peer" />
  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
           
            </div>
          </div>
          <div className=" flex items-center justify-center  mt-3 ">
            <span> الترتيب :</span>
            <select
              name=""
              id=""
              className="bg-transparent text-teal-600 border-0 outline-none"
            >
              <option value=""> الأكثر زيارة</option>
              <option value=""> الأكثر زيارة</option>
              <option value=""> الأكثر زيارة</option>
            </select>
          </div>
        </div>

        {/* <div className="flex items-center justify-center mt-10">
          <div>
            <img src={notfound} alt="" className="w-96 lg:w-full" />
          </div>

        </div> */}
        <div className=" content_hero_section3  flex items-center justify-center flex-wrap  lg:grid lg:grid-cols-3  gap-10    mt-14">
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          </div>{" "}
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          </div>{" "}
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          </div>{" "}
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          </div>{" "}
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          </div>{" "}
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          </div>{" "}
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          </div>{" "}
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          </div>{" "}
          <div className="card ">
            <div
              style={{ position: "relative" }}
              className="card_content  hover:shadow-md hover:shadow-teal-300 border p-4 lg:p-10 border-solid rounded border-teal-300 flex justify-center items-center  flex-col"
            >
              <div
                className="text-teal-300"
                style={{
                  position: "absolute",
                  top: "15px",
                  fontSize: "30px",
                  right: "20px",
                }}
              >
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
          {/* <Link
                to="/labs"
                className="icon rounded-full px-14 lg:px-20 p-4 border text-white bg-teal-500 hover:bg-teal-800  mt-4"
              >
                عرض المزيد
              </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
