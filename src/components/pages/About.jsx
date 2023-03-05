import Me from "../../data/images/me-avatar.jpg";
import { Heading } from "../common/Heading";
import { about } from "../../data/data";
import React from "react";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          <div className="left">
            <img
              width={"60%"}
              src={Me}
              alt="coverAbout"
              data-aos="fade-down-right"
            />
          </div>
          {about.map((val, i) => (
            <div className="right" data-aos="fade-up" key={i}>
              <Heading title="About me" />
              <p>{val.desc}</p>
              <p>{val.desc1}</p>
              <div className="buttonarea">
                <button className="primaryBtn">Download CV</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
