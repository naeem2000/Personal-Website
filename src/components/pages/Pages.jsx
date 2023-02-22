import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
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
        </Routes>
      </Router>
    </>
  );
};
