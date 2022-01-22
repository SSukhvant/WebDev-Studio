import React from "react";
import seavideo from './video/video3.mp4';
import mask from './img/mask.jpg'
import Service from "./components/Service";
import { Gallery } from "./components/Gallery";
import MyAnime from "./components/MyAnime";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { FcGoogle } from "react-icons/fc";
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="main">
      <div className="icon-wrap">
      <div className="icon mt-5">
              <a to="/" className="social-btn d-block text-center">
                <FcGoogle/>
              </a>
              <a to="/" className="social-btn d-block linkedin text-center my-3">
                <FaLinkedinIn/>
              </a>
              <a to="/" className="social-btn d-block github text-center">
                <FaGithub/>
              </a>
              <a to="/" className="social-btn d-block behance text-center mt-3">
                <FaBehance/>
              </a>
              </div>
      </div>
      <video autoPlay loop muted>
                  <source src={seavideo} type="video/mp4" />
                </video>

                <img src={mask} className="mask" alt="mask" />
                <h2>WEBDEV STUDIO</h2>
      </section>

      <Service/>

      <MyAnime/>

      <Gallery/>
      <Contact/>

      <Footer/>
    </>
  );
};

export default Home;
