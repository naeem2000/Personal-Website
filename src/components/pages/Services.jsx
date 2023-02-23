import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../../data/data";

export const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <Heading title="Services" />
          <div className="content grid3">
            {services.map((item, i) => (
              <div className="box" key={i}>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
