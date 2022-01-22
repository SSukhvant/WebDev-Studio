import React from "react";
import $ from 'jquery';

const Skills = () => {
    
    document.addEventListener('DOMContentLoaded', function () {

        const aboutSection = document.querySelector(".skills-section"),
        tabsContainer = document.querySelector(".about-tabs");

        tabsContainer.addEventListener("click", (event) =>{
            const next = event.target;
            if(next.classList.contains("tab-item") && !next.classList.contains("active-content")){
                const target = next.getAttribute("data-target");

                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                event.target.classList.add("active", "outer-shadow");
                aboutSection.querySelector(".tab-content.active-content").classList.remove("active-content");
                aboutSection.querySelector(target).classList.add("active-content");
            }
        })
    })

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

    return(
        <>
        <div className="skills-section">
               <div className="about-tabs my-5 text-center">
                   <span className="tab-item outer-shadow active" data-target=".skills">Skills</span>
                   <span className="tab-item mx-4" data-target=".experience">Experience</span>
                   <span className="tab-item" data-target=".education">Education</span>
               </div>

               <div className="row">
                   <div className="skills tab-content active-content">
                       <div className="row">
                           <div className="col-12 col-md-6 skill-item">
                               <p>HTML</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-50">
                                       <span>50%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-12 col-md-6 skill-item">
                               <p>Java Script</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-60">
                                       <span>60%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-12 col-md-6 skill-item">
                               <p>CSS</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-90">
                                       <span>90%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-12 col-md-6 skill-item">
                               <p>React JS</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-70">
                                       <span>70%</span>
                                   </div>
                               </div>
                           </div>


                           
                           <div className="col-12 col-md-6 skill-item">
                               <p>Node JS</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-70">
                                       <span>70%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-12 col-md-6 skill-item">
                               <p>Bootstrap</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-90">
                                       <span>90%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-12 col-md-6 skill-item">
                               <p>JQuery</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-60">
                                       <span>60%</span>
                                   </div>
                               </div>
                           </div>


                           
                           <div className="col-12 col-md-6 skill-item">
                               <p>C++</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-90">
                                       <span>90%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-12 col-md-6 skill-item">
                               <p>C</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-70">
                                       <span>70%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-12 col-md-6 skill-item">
                               <p>Python</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-50">
                                       <span>50%</span>
                                   </div>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>


               {/********** Experience ************/}

               <div className="row mt-5">
                   <div className="experience tab-content">
                       <div className="row">
                           <div className="timeline">
                               <div className="row">

                                   <div className="timeline-item">
                                       <div className="timeline-item-inner outer-shadow">
                                           <i className="fa fa-briefcase icon">[]</i>
                                           <span>Sep, 2018 - Present </span>
                                           <h3>Front End Developer</h3>
                                           <h4>Company name, India</h4>
                                           <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                                       </div>
                                   </div>

                                   <div className="timeline-item">
                                       <div className="timeline-item-inner outer-shadow">
                                           <i className="fa fa-briefcase icon">[]</i>
                                           <span>Sep, 2018 - Present </span>
                                           <h3>Web Designer</h3>
                                           <h4>Company name, India</h4>
                                           <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                                       </div>
                                   </div>

                                   <div className="timeline-item">
                                       <div className="timeline-item-inner outer-shadow">
                                           <i className="fa fa-briefcase icon">[]</i>
                                           <span>Sep, 2018 - Present </span>
                                           <h3>Front End Developer</h3>
                                           <h4>Company name, India</h4>
                                           <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                                       </div>
                                   </div>



                               </div>
                           </div>
                       </div>
                   </div>
               </div>


                              {/********** Education ************/}

                              <div className="row">
                   <div className="education tab-content">
                       <div className="row">
                           <div className="timeline">
                               <div className="row">

                                   <div className="timeline-item">
                                       <div className="timeline-item-inner outer-shadow">
                                           <i className="fa fa-briefcase icon">[]</i>
                                           <span>2017 - 2021</span>
                                           <h3>Bachelor of Technology</h3>
                                           <h4>Company name, India</h4>
                                           <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                                       </div>
                                   </div>

                                   <div className="timeline-item">
                                       <div className="timeline-item-inner outer-shadow">
                                           <i className="fa fa-briefcase icon">[]</i>
                                           <span>2014 - 2015</span>
                                           <h3>Intermediate</h3>
                                           <h4>P. P. S. V. M. Inter Collage Nanakmatta, Uttarakhand, India</h4>
                                           <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                                       </div>
                                   </div>

                                   <div className="timeline-item">
                                       <div className="timeline-item-inner outer-shadow">
                                           <i className="fa fa-briefcase icon">[]</i>
                                           <span>2012 - 2013</span>
                                           <h3>High School</h3>
                                           <h4>SMT K. J. M. Inter Collage Nanakmatta, Uttarakhand, India</h4>
                                           <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                                       </div>
                                   </div>



                               </div>
                           </div>
                       </div>
                   </div>
               </div>

               </div>
        </>
    )
};

export default Skills;