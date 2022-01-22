import React from "react";
import $ from "jquery";
import { FcGoogle } from "react-icons/fc";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import About from "./About";

const Portfolio = () => {

  $(".home-section").mousemove(function(event) {
    var eye = $(".eye");
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad*(180/Math.PI)*-1)+100;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });

  return (
    <>
      <section className="home-section section">
        <div className="effect-wrap">
          <div className="effect effect-1"></div>
          <div className="effect effect-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="effect effect-3">
            <div className="outer-shadow"></div>
          </div>

          <div className="effect effect-3">
            <div className="outer-shadow"></div>
          </div>

          <div className="effect effect-4"></div>

          <div className="effect effect-5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="container align-items-center">
          <div className="home mt-0 mt-md-5 py-2 py-md-5 align-item-center">
            <div className="intro">
              <p className="mt-4 mt-md-5">Hello</p>
              <h2 className="my-2">I'm Sukhvant Singh</h2>
              <h1 className="mb-3 mb-md-4">Web Designer & Developer</h1>
              <a to="/" className="btn1">
                KNOW MORE
              </a>

              <div className="mt-5">
              <a to="/" className="social-btn d-inline-block text-center">
                <FcGoogle/>
              </a>
              <a to="/" className="social-btn d-inline-block linkedin text-center mx-4">
                <FaLinkedin/>
              </a>
              <a to="/" className="social-btn d-inline-block github text-center">
                <FaGithub/>
              </a>
              <a to="/" className="social-btn d-inline-block behance text-center ms-4">
                <FaBehance/>
              </a>
              </div>
            </div>

            <div className="profile">
              <div className="img-box">
                {/* <img src={Profile} alt="ssukhvant" className="outer-shadow"/> */}
                <div className="face outer-shadow">
                  <div className="eyes">
                    <div className="eye"></div>
                    <div className="eye"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
};

export default Portfolio;
