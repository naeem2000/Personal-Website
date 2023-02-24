import logo from "../../data/images/Naeem-logo.png";
import { navLink } from "../../data/data";
import { Menu } from "@mui/icons-material";
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
                {links.text}
              </Link>
            ))}
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icon" />
          </button>
        </div>
      </header>
    </>
  );
};
