import CV from "../../data/Curriculum Vitae of Mogamat Naeem Carr.pdf";
import Typewriter from "typewriter-effect";
import { home } from "../../data/data";
import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContainer" key={i}>
            <h3>{val.text}</h3>
            <h1 className="typewriter">
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.web}`, `${val.mobile}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left" style={{ fontWeight: "bold" }}>
              {val.desc}
            </p>
            <a href={CV} download={"CV of Mogamat Naeem Carr.pdf"}>
              <button className="primaryBtn">Download CV</button>
            </a>
          </div>
        ))}
      </section>
    </>
  );
};
