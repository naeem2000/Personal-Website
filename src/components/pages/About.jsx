import { about } from "../../data/data";
import { Heading } from "../common/Heading";
import Me from "../../data/images/me-avatar.jpg";
import React from "react";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => (
            <>
              <div className="left">
                <img
                  width={"60%"}
                  src={Me}
                  alt="coverAbout"
                  data-aos="fade-down-right"
                />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
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
