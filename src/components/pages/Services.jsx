import { Heading } from "../common/Heading";
import { services } from "../../data/data";
import React from "react";

export const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <Heading title="Services" />
          <div className="content grid3">
            {services.map((item, i) => (
              <div className="box" key={i} data-aos="flip-left">
                <img className="boxedImage" src={item.icon} alt="icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
                <p>{item.desc3}</p>
                <p>{item.desc4}</p>
                <p>{item.desc5}</p>
                <p>{item.desc6}</p>
                <p>{item.desc7}</p>
              </div>
            ))}
          </div>
          <br />
          <label>Download CV for more info</label>
        </div>
      </section>
    </>
  );
};
