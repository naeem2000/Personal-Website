import { portfolio1, portfolio2 } from "../../data/data";
import { Visibility } from "@mui/icons-material";
import { Heading } from "../common/Heading";
import React, { useState } from "react";

export const Portfolio = () => {
  const [page, setPage] = useState(false);

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="buttonSection">
            <button
              className={
                page ? "buttonSectionbutton" : "buttonSectionbuttonActive"
              }
              onClick={() => setPage(false)}
            >
              1
            </button>
            <button
              className={
                !page ? "buttonSectionbutton1" : "buttonSectionbuttonActive1"
              }
              onClick={() => setPage(true)}
            >
              2
            </button>
          </div>
        </div>
        <div>
          {!page ? (
            <>
              <div className="content grid3">
                {portfolio1?.map((items, i) => (
                  <a
                    href={items.handle}
                    target="__blank"
                    rel="noreferror"
                    key={i}
                  >
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
            </>
          ) : (
            <>
              <div className="content grid3">
                {portfolio2?.map((items, i) => (
                  <div>
                    <a
                      href={items.handle}
                      target="__blank"
                      rel="noreferror"
                      key={i}
                    >
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
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </article>
    </>
  );
};
