import { social } from "../../data/data";
import React from "react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="socials">
          {social.map((item, i) => (
            <div key={i}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <i data-aos="zoom-in-left">{item.icon}</i>
              </a>
            </div>
          ))}
        </div>
        <p data-aos="zoom-in-right">All Rights Reserved 2023</p>
      </footer>
    </>
  );
};
