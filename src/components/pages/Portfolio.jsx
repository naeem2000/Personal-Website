import { portfolio } from "../../data/data";
import { Visibility } from "@mui/icons-material";
import React from "react";
import { Heading } from "../common/Heading";

export const Portfolio = () => {
  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
        </div>
        <div className="content grid3">
          {portfolio?.map((items, i) => (
            <a href={items.handle} target="__blank" rel="noreferror" key={i}>
              <div className="box" data-aos="fade-up">
                <div className="img">
                  <img src={items.cover} alt="portfolio" />
                </div>
                <div className="overlay">
                  <h3>{items.title}</h3>
                  <span>{items.name}</span>
                  <Visibility />
                </div>
              </div>
            </a>
          ))}
        </div>
      </article>
    </>
  );
};
