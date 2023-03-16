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
              Web
            </button>
            <button
              className={
                !page ? "buttonSectionbutton1" : "buttonSectionbuttonActive1"
              }
              onClick={() => setPage(true)}
            >
              Mobile
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
                  <div key={i}>
                    <a href={items.handle} target="__blank" rel="noreferror">
                      <div className="box" data-aos="fade-up">
                        <div className="mobileimg">
                          <img
                            src={items.cover}
                            alt="portfolio"
                            className="mobile-apps"
                          />
                        </div>
                        <div className="overlay-mobile">
                          <h3 style={{ textAlign: "center" }}>{items.title}</h3>
                          <h3>{items.subtitle}</h3>
                          <span style={{ textAlign: "center" }}>
                            {items.name}
                            <Visibility />
                          </span>
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
