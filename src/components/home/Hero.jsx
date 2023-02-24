import { home } from "../../data/data";
import Typewriter from "typewriter-effect";
import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContainer">
            <h3>{val.text}</h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.web}`, `${val.mobile}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button className="primaryBtn" data-aos="fade-up-right">
              Download CV
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
