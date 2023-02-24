import { Testimonials } from "../pages/Testimonials";
import { Portfolio } from "../pages/Portfolio";
import { Services } from "../pages/Services";
import { Contact } from "../pages/Contact";
import { Counter } from "../pages/Counter";
import { Footer } from "../common/Footer";
import { About } from "../pages/About";
import { Hero } from "./Hero";
import React from "react";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
