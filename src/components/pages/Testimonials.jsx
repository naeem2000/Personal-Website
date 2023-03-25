import { FormatQuote } from "@mui/icons-material";
import { testimonials } from "../../data/data";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React from "react";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="testimonials hero">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((val, i) => (
              <div key={i}>
                <div className="box" key={i}>
                  <i data-aos="zoom-out-up">
                    <FormatQuote />
                  </i>
                  <p style={{ fontWeight: "bold" }} data-aos="zoom-out-down">
                    {val.text}
                  </p>
                  <div className="img">
                    <img src={val.image} alt="img" data-aos="zoom-out-right" />
                  </div>
                  <h3 data-aos="zoom-out-left">{val.name}</h3>
                  <label data-aos="zoom-out">{val.post}</label>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
