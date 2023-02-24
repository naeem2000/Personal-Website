import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Testimonials } from "./Testimonials";
import { Header } from "../common/Header";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Home } from "../home/Home";
import { Contact } from "./Contact";
import { About } from "./About";
import React from "react";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
