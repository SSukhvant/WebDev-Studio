import React from "react";

function Footer() {
  return (
    <>
      <section className="bg-primary">
        <div className="container mt-5">
          <div className="row">
            <div className="text-white col-md-6 border-0 p-4">
              <h4 className="text-white">About us</h4>
              <p>Whether you’re halfway through the editing process. Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.</p>
            </div>
            <div className="col-md-6 border-0">
              <div className="row">
                <div className="col-md-5 border-0 p-4">
                  <h4 className="text-white">Who we are?</h4>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-primary text-white border-0">Team</li>
                    <li class="list-group-item bg-primary text-white border-0">Career</li>
                    <li class="list-group-item bg-primary text-white border-0">Portfolio</li>
                    <li class="list-group-item bg-primary text-white border-0">Contact</li>
                  </ul>
                </div>

                <div className="col-md-5 border-0 p-4">
                  <h4 className="text-white">Our work</h4>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-primary text-white border-0">Feature</li>
                    <li class="list-group-item bg-primary text-white border-0">Latest</li>
                    <li class="list-group-item bg-primary text-white border-0">Blogs</li>
                    <li class="list-group-item bg-primary text-white border-0">Videos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
