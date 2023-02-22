import { about } from "../../data/dummydata";
import { Heading } from "../common/Heading";
import React from "react";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => (
            <>
              <div className="left">
                <img src={val.cover} alt="coverAbout" />
              </div>
              <div className="right">
                <Heading title="About me" />
                <p>{val.desc}</p>
                <p>{val.desc}</p>
                <button>Download CV</button>
                <button className="primaryBtn">Download CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
