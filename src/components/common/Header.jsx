import { Twirl as Hamburger } from "hamburger-react";
import logo from "../../data/images/Naeem-logo.png";
import { navLink } from "../../data/data";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img width={"70%"} src={logo} alt="logo" data-aos="zoom-in-right" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navLink.map((links, i) => (
              <Link to={links.url} key={i} data-aos="zoom-in-left">
                <span> {links.text}</span>
              </Link>
            ))}
          </div>
          <div className="toggle">
            <Hamburger size={24} toggled={responsive} toggle={setResponsive} />
          </div>
        </div>
      </header>
    </>
  );
};
