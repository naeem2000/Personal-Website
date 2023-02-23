import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import React from "react";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";

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
        </Routes>
      </Router>
    </>
  );
};
