import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import NoPage from "./pages/NoPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Weather from "./pages/Weather";
import Counter from "./pages/Counter";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="weather" element={<Weather />} />
            <Route path="counter" element={<Counter />} />

            <Route path="signup" element={<Registration />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
