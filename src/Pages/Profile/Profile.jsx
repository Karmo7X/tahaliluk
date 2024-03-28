import React, { useState, useRef, Fragment } from "react";
import email_icon from "../../assets/icons/Auth/email_icon.png";
import user_icon from "../../assets/icons/Auth/user_icon.png";
import phone_icon from "../../assets/icons/Auth/phone.png";
import gender_icon from "../../assets/icons/Auth/gender.png";
import date_icon from "../../assets/icons/Auth/date.png";
import password_icon from "../../assets/icons/Auth/password_icon.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import DatePicker from "react-datepicker";
import { MdKeyboardArrowDown } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import "./profile.scss";
import { CiBookmark } from "react-icons/ci";
import lab_img from "../../assets/homeImages/labimg.png";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const Profile = () => {
  const [section, setsection] = useState(0);
  const [selected, setSelected] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    gemder: selected,
    date: selectedDate,
    oldpassword: "",
    password: "",
    confirm_password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const openDatePicker = () => {
    setIsOpen(true);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // show old password
  const [showoldpass, setshowoldpass] = useState(false);
  const toggleoldPasswordVisibility = () => {
    setshowoldpass(!showoldpass);
  };
  // show password
  const [showpass, setshowpass] = useState(false);
  const togglePasswordVisibility = () => {
    setshowpass(!showpass);
  };
  // show confirmpassword
  const [showconfirmpass, setshowconfirmpass] = useState(false);
  const toggleconfirmPasswordVisibility = () => {
    setshowconfirmpass(!showconfirmpass);
  };

  // handle sidebar
  const [isOpenside, setisOpenside] = useState(false);

  const toggleSidebar = () => {
    setisOpenside(!isOpenside);
  };

  // for slider
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
      <div style={{ marginTop: "9rem", minHeight: "100vh",maxHeight: "100vh" }}>
        <div className="flex flex-col lg:flex-row gap-4  p-4">
         

        
          <div className="w-full lg:w-1/4  ">
            <div className=" border border-gray-300 rounded-lg ">
              <div className="list-group flex lg:block  w-full">
                <a
                 
                  className={`block w-full  lg:rounded-t-lg list-group-item list-group-item-action active:bg-teal-500 hover:bg-teal-500  foucs:bg-teal-500 active:text-white hover:text-white  foucs:text-white lg:text-lg text-sm  p-3 border-l lg:border-none text-center lg:text-right lg:p-5  ${
                    section === 0 ? "bg-teal-500 text-white " : ""
                  }`}
                  onClick={() => setsection(0)}
                >
                  الملف الشخصي
                </a>
                <hr />
                <a
                                 className={`block w-full   list-group-item list-group-item-action active:bg-teal-500 hover:bg-teal-500  foucs:bg-teal-500 active:text-white hover:text-white  foucs:text-white lg:text-lg text-sm  p-3 border-l lg:border-none text-center lg:text-right lg:p-5  ${
                    section === 1 ? "bg-teal-500 text-white " : ""
                  }`}
                  onClick={() => setsection(1)}
                >
                  الخصوصية
                </a>
                <hr />
                <a
               
                  className={`block w-full  lg:rounded-b-lg list-group-item list-group-item-action active:bg-teal-500 hover:bg-teal-500  foucs:bg-teal-500 active:text-white hover:text-white  foucs:text-white lg:text-lg text-sm  p-3 border-l lg:border-none text-center lg:text-right lg:p-5  ${
                    section === 2 ? "bg-teal-500 text-white " : ""
                  }`}
                  onClick={() => setsection(2)}
                >
                  المفضلة
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 p-2">
            <div className=" rounded-lg p-4">
              <div className="tab-content" id="nav-tabContent">
                {section === 0 ? (
                  <>
                    <div
                      className="tab-pane fade show active w-full"
                      id="profile_sec"
                      role="tabpanel"
                      aria-labelledby="list-home-list"
                    >
                      <div class=" lg:grid lg:grid-cols-6 gap-x-6 gap-y-8 flex flex-col w-full">
                        <div class="sm:col-span-3">
                          <label
                            for="name"
                            class="block text-sm mb-2 font-medium leading-6 text-gray-700"
                          >
                            الإسم كامل
                          </label>
                          <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100 ">
                            <img src={user_icon} alt="" className="w-5" />
                            <input
                              id="name"
                              name="name"
                              type="text"
                              autoComplete="name"
                              placeholder="اسم المستخدم "
                              required
                              onChange={(e) => handlechange()}
                              className="block w-full border-none  outline-none p-6 text-gray-700 shadow-sm bg-transparent  placeholder:text-gray-700  sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div class="sm:col-span-4">
                          <label
                            for="phone"
                            class="block text-sm  font-medium leading-6 text-gray-700"
                          >
                            رقم الهاتف{" "}
                          </label>
                          <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100 ">
                            <img src={phone_icon} alt="" className="w-5" />
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              autoComplete="phone"
                              placeholder="رقم الهاتف "
                              required
                              onChange={(e) => handlechange()}
                              className="block w-full border-none  outline-none p-6 text-gray-700 shadow-sm bg-transparent  placeholder:text-gray-700  sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div class="sm:col-span-7">
                          <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-gray-700"
                          >
                            البريد الإلكتروني{" "}
                          </label>

                          <div className="mt-2 flex items-center border-0 rounded-full px-4 bg-gray-100 ">
                            <img src={email_icon} alt="" className="w-5" />
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              placeholder="البريد الإكتروني"
                              required
                              onChange={(e) => handlechange()}
                              className="block w-full border-none  outline-none p-6 text-gray-700 shadow-sm bg-transparent  placeholder:text-gray-700  sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <label
                            for="gender"
                            class="block text-sm mb-2 font-medium leading-6 text-gray-700"
                          >
                            {" "}
                            النوع{" "}
                          </label>
                          <div className=" flex items-center border-0 rounded-full px-4 bg-gray-100 ">
                            <img src={gender_icon} alt="" className="w-5" />
                            <Listbox value={selected} onChange={setSelected}>
                              {({ open }) => (
                                <>
                                  <div className="relative mt-2 w-full bg-transparent">
                                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent border-none  p-4 mb-2  text-left text-gray-700     outline-none   sm:text-sm sm:leading-6">
                                      <span className="flex items-center">
                                        {selected !== "" ? (
                                          <>
                                            <span className="ml-3 block truncate">
                                              {selected === "male"
                                                ? "ذكر"
                                                : "انثي"}
                                            </span>
                                          </>
                                        ) : (
                                          <>
                                            <span className="ml-3 block truncate">
                                              النوع
                                            </span>
                                          </>
                                        )}
                                      </span>
                                      <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                          className="h-5 w-5 text-gray-700"
                                          aria-hidden="true"
                                        />
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
                                              active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900",
                                              "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                          }
                                          value={"male"}
                                        >
                                          {({ selected, active }) => (
                                            <>
                                              <div className="flex items-center">
                                                <span
                                                  className={classNames(
                                                    selected
                                                      ? "font-semibold"
                                                      : "font-normal",
                                                    "ml-3 block truncate"
                                                  )}
                                                >
                                                  ذكر
                                                </span>
                                              </div>

                                              {selected ? (
                                                <span
                                                  className={classNames(
                                                    active
                                                      ? "text-white"
                                                      : "text-indigo-600",
                                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                                  )}
                                                >
                                                  <CheckIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                        <Listbox.Option
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900",
                                              "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                          }
                                          value={"female"}
                                        >
                                          {({ selected, active }) => (
                                            <>
                                              <div className="flex items-center">
                                                <span
                                                  className={classNames(
                                                    selected
                                                      ? "font-semibold"
                                                      : "font-normal",
                                                    "ml-3 block truncate"
                                                  )}
                                                >
                                                  انثي
                                                </span>
                                              </div>

                                              {selected ? (
                                                <span
                                                  className={classNames(
                                                    active
                                                      ? "text-white"
                                                      : "text-indigo-600",
                                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                                  )}
                                                >
                                                  <CheckIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                  />
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
                        <div class="sm:col-span-4">
                          <label
                            for="date"
                            class="block text-sm font-medium leading-6 text-gray-700"
                          >
                            {" "}
                            تاريخ الميلاد{" "}
                          </label>
                          <div className="mt-2 w-full mb-2 flex items-center border-0 rounded-full px-4 bg-gray-100">
                            <img src={date_icon} alt="" className="w-5" />
                            <DatePicker
                              id="date"
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              ref={datePickerRef}
                              locale="ar" // Set Arabic locale
                              placeholderText="تاريخ الميلاد" // Set placeholder text in Arabic
                              className="block w-full border-none outline-none p-6 text-gray-700 shadow-sm bg-transparent placeholder-gray-400 sm:text-sm sm:leading-6"
                              open={isOpen} // Set the open state of the date picker
                              onClose={() => setIsOpen(false)} // Close the date picker when it's closed
                            />
                            <MdKeyboardArrowDown
                              className="text-2xl text-gray-700"
                              onClick={openDatePicker}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex  mt-10  gap-4">
                        <button
                          type="button"
                          //    onClick={handleNext}
                          className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          حفظ التغيرات
                        </button>
                      </div>
                    </div>
                  </>
                ) : section === 1 ? (
                  <>
                    <div
                      className="tab-pane fade"
                      id="privacy_sec"
                      role="tabpanel"
                      aria-labelledby="list-messages-list"
                    >
                      <div>
                        <h2 className="text-xl  text-blue-600 font-semibold	 mb-6">
                          الخصوصية
                        </h2>
                        <hr />
                      </div>
                      <div className="mt-8">
                        <h2
                          className="text-xl lg:text-2xl mb-6 font-bold "
                          style={{ color: "#036793" }}
                        >
                          إعادة تعيين
                          <span className="text-teal-300"> كلمة المرور </span>
                        </h2>
                        <div className="mt-10">
                          <div className="mt-4 flex items-center border-0 rounded-full px-4 bg-gray-100">
                            <img src={password_icon} alt="" className="w-7" />
                            <input
                              id="password"
                              name="oldpassword"
                              type={showoldpass ? "text" : "password"}
                              autoComplete="password"
                              placeholder="كلمة المرور الحالية  "
                              required
                              onChange={handlechange}
                              className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                            <span onClick={toggleoldPasswordVisibility}>
                              {showoldpass ? (
                                <>
                                  <IoEyeOutline className="text-gray-400 text-2xl" />
                                </>
                              ) : (
                                <>
                                  <IoEyeOffOutline className="text-gray-400 text-2xl" />
                                </>
                              )}
                            </span>
                          </div>
                          <div className="mt-4 flex items-center border-0 rounded-full px-4 bg-gray-100">
                            <img src={password_icon} alt="" className="w-7" />
                            <input
                              id="password"
                              name="password"
                              type={showpass ? "text" : "password"}
                              autoComplete="password"
                              placeholder="كلمة المرور الجديدة"
                              required
                              onChange={handlechange}
                              className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                            <span onClick={togglePasswordVisibility}>
                              {showpass ? (
                                <>
                                  <IoEyeOutline className="text-gray-400 text-2xl" />
                                </>
                              ) : (
                                <>
                                  <IoEyeOffOutline className="text-gray-400 text-2xl" />
                                </>
                              )}
                            </span>
                          </div>
                          <div className="mt-4 flex items-center border-0 rounded-full px-4 bg-gray-100">
                            <img src={password_icon} alt="" className="w-7" />
                            <input
                              id="password"
                              name="password"
                              type={showconfirmpass ? "text" : "password"}
                              autoComplete="password"
                              placeholder="تأكيد كلمة المرور الجديدة"
                              required
                              onChange={handlechange}
                              className="block w-full border-none  outline-none p-4 text-gray-400 shadow-sm bg-transparent  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                            <span onClick={toggleconfirmPasswordVisibility}>
                              {showconfirmpass ? (
                                <>
                                  <IoEyeOutline className="text-gray-400 text-2xl" />
                                </>
                              ) : (
                                <>
                                  <IoEyeOffOutline className="text-gray-400 text-2xl" />
                                </>
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="flex  mt-10  gap-4">
                          <button
                            type="button"
                            //    onClick={handleNext}
                            className="flex items-center gap-4 w-56 justify-center rounded-full bg-teal-500 p-2 lg:p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            إعادة التعيين
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="tab-pane fade"
                      id="favourite_sec"
                      role="tabpanel"
                      aria-labelledby="list-profile-list"
                    >
                      <div>
                        <h2 className="text-xl  text-blue-600 font-semibold	 mb-6">
                          المفضلة
                        </h2>
                        <hr />
                      </div>
                      <div className=" mt-3">
                        <Swiper
                          // install Swiper modules
                          modules={[Navigation, Pagination, Autoplay]}
                          spaceBetween={50}
                          slidesPerView={2}
                          navigation={false}
                          pagination={{ clickable: true }}
                          ref={SlideRef}
                          onSlideChange={onSlideChange}
                          //   autoplay={{ delay: 3000 }}
                          breakpoints={{
                            0: {
                              slidesPerView: 1,
                            },
                            390: {
                              slidesPerView: 1,
                            },
                            502: {
                              slidesPerView: 2,
                            },
                            802: {
                              slidesPerView: 2,
                            },
                            992: {
                              slidesPerView: 2,
                            },
                            1200: {
                              slidesPerView: 2,
                            },
                          }}
                        >
                          <SwiperSlide className="py-10">
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
                          </SwiperSlide>
                          <SwiperSlide className="py-10">
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
                          </SwiperSlide>
                          <SwiperSlide className="py-10">
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
                          </SwiperSlide>
                        </Swiper>
                        <div className="flex items-center justify-center gap-4">
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
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
