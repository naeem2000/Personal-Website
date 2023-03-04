import React from "react";
import { social } from "../../data/data";

export const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item, i) => (
          <div key={i}>
            <i data-aos="zoom-in-left">{item.icon}</i>
          </div>
        ))}
        <p data-aos="zoom-in-right">All Rights Reserved 2023</p>
      </footer>
    </>
  );
};
