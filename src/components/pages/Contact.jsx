import { useForm, ValidationError } from "@formspree/react";
import { Heading } from "../common/Heading";
import Typewriter from "typewriter-effect";
import { contact } from "../../data/data";
import React from "react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xdovzykr");
  if (state.succeeded) {
    return (
      <div className="heroContainer">
        <h1 className="heading" style={{ paddingTop: "50px" }}>
          <Typewriter
            options={{
              strings: [
                `Thanks for getting in touch, I will get back to you ASAP!`,
              ],
              autoStart: true,
              loop: false,
              deleteSpeed: 10000000,
              delay: 2,
            }}
          />
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Keep In Touch" />
          <div className="content flexsb">
            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    data-aos="flip-left"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    data-aos="flip-right"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <input
                  id="subject"
                  type="subject"
                  name="subject"
                  placeholder="Subject"
                  data-aos="flip-up"
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
                <textarea
                  id="message"
                  placeholder="Message"
                  type="text"
                  name="message"
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  data-aos="zoom-in-up"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="left">
              {contact.map((item, i) => (
                <div className="box" data-aos="zoom-in" key={i}>
                  <i>{item.icon}</i>
                  <a href={item.link}>
                    <p>{item.text1}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
