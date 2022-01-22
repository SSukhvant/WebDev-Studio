import React from "react";

function Contact() {
  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 border-0">
              <form className="row g-3 p-4">
                <div className="col-md-12">
                  <label for="validationDefault01" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Type here..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 border-0 p-4">
              <h1 className="">GET IN TOUCH</h1>
              <p>
                Whether you’re halfway through the editing process, or you
                haven’t even started, our post production services can put the
                finishing touches.Whether you’re halfway through the editing
                process, or you haven’t even started, our post production
                services can put the finishing touches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
