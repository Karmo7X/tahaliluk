import { Suspense, lazy, useState } from "react";
import 'tailwindcss/tailwind.css';

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";


const Home = lazy(() => import("./Pages/Home/Home"));
const Laboratory = lazy(() => import("./Pages/Laboratories/Laboratory"));
const WhoUs = lazy(() => import("./Pages/Whous/WhoUs"));
const Contact = lazy(() => import("./Pages/Contactus/Contact"));
const Labdetails = lazy(() => import("./Pages/Labdetails/Labdetails"));

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
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
              path="Who_US"
              element={
                <Suspense fallback={""}>
                  <WhoUs />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
