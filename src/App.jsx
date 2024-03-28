import { Suspense, lazy, useState } from "react";
import 'tailwindcss/tailwind.css';

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";


const Home = lazy(() => import("./Pages/Home/Home"));
const Laboratory = lazy(() => import("./Pages/Laboratories/Laboratory"));
const Offerpage = lazy(() => import("./Pages/OfferPage/Offerpage"));
const Contact = lazy(() => import("./Pages/Contactus/Contact"));
const Labdetails = lazy(() => import("./Pages/Labdetails/Labdetails"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const Forgetpass = lazy(() => import("./Pages/Auth/Forgetpass"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route
              path="login"
              element={
                <Suspense fallback={""}>
                  <Login />
                </Suspense>
              }
            />
             <Route
              path="register"
              element={
                <Suspense fallback={""}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="forget_password"
              element={
                <Suspense fallback={""}>
                  <Forgetpass />
                </Suspense>
              }
            />
        
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={""}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="labs"
              element={
                <Suspense fallback={""}>
                  <Laboratory />
                </Suspense>
              }
            />
             <Route
              path="lab_deatils"
              element={
                <Suspense fallback={""}>
                  <Labdetails />
                </Suspense>
              }
            />
            <Route
              path="offers"
              element={
                <Suspense fallback={""}>
                  <Offerpage />
                </Suspense>
              }
            />
            <Route
              path="Contact_Us"
              element={
                <Suspense fallback={""}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="Profile"
              element={
                <Suspense fallback={""}>
                  <Profile />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
