import { portfolio } from "../../data/data";
import { Visibility } from "@mui/icons-material";
import React, { useState } from "react";
import { Heading } from "../common/Heading";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
export const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);
    setCategory();

    if (category === "all") {
      setList(portfolio);
    }
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="catButton">
            {category.map((category) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="content grid3">
          {list.map((items, i) => (
            <a href={items.handle} target="__blank" rel="noreferror">
              <div className="box" data-aos="fade-up">
                <div className="img" key={i}>
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
