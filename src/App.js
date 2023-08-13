import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// Components
import Layout from "./components/Layout"

// Pages
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

// CSS
import './sass/main.scss';


export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}