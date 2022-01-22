import React from "react";
import Footer from "./components/Footer";
import Service from "./components/Service";

const About = () => {
  return (
    <>
      <section className="about-section mb-5">
      <div className="container-fluid about-bg py-5 text-white">
      <div className="container">
                    <div className="row">
                    <div className="col-md-12 border-0 p-4">
                    <h1 className="text-center">About Us</h1>
                    </div>
                    </div>
      </div>
      </div>
      
      </section>
      <Service/>

      <Footer/>


    </>
  );
};

export default About;
