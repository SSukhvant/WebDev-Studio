import React from "react";
import work1 from "../img/work/work-1.jpg";
import work2 from "../img/work/work-5.jpg";
import work3 from "../img/work/work-6.jpg";
import work4 from "../img/work/work-2.jpg";
import work5 from "../img/work/work-3.jpg";
import work6 from "../img/work/work-7.jpg";
import work7 from "../img/work/work-4.jpg";



export const Gallery = () => {
  return (
    <>
      <div className="row g-2 mt-5">
        <div className="col-md-4">
          <div className="row g-2">
            <div className="col-md-12"><img src={work1} alt="work" /></div>
            <div className="col-md-6"><img src={work2} alt="work" /></div>
            <div className="col-md-6"><img src={work3} alt="work" /></div>
          </div>
        </div>

        <div className="col-md-4">
        <div className="row g-2">
            <div className="col-md-6"><img src={work4} alt="work" /></div>
            <div className="col-md-6"><img src={work5} alt="work" /></div>
            <div className="col-md-12"><img src={work6} alt="work" /></div>
          </div>
        </div>

        <div className="col-md-4"><img src={work7} alt="work" /></div>
      </div>
    </>
  );
};
