import React from 'react'

export default function Depts() {
  return (

<section className="section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="card shadow text-center">
          <div
            className="position-relative rounded-top progress-wrapper"
            data-color="#fdb157"
            style={{ backgroundColor: "rgb(253, 177, 87)" }}
          >
            <div
              className="wave"
              data-progress="90%"
              style={{ bottom: "90%" }}
            />
          </div>
          <div className="card-footer bg-white">
            <h4 className="card-title">Web Design (90%)</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="card shadow text-center">
          <div
            className="position-relative rounded-top progress-wrapper"
            data-color="#9473e6"
            style={{ backgroundColor: "rgb(148, 115, 230)" }}
          >
            <div
              className="wave"
              data-progress="60%"
              style={{ bottom: "60%" }}
            />
          </div>
          <div className="card-footer bg-white">
            <h4 className="card-title">Logo Design (60%)</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="card shadow text-center">
          <div
            className="position-relative rounded-top progress-wrapper"
            data-color="#bdecf6"
            style={{ backgroundColor: "rgb(189, 236, 246)" }}
          >
            <div
              className="wave"
              data-progress="80%"
              style={{ bottom: "80%" }}
            />
          </div>
          <div className="card-footer bg-white">
            <h4 className="card-title">After Effects (80%)</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="card shadow text-center">
          <div
            className="position-relative rounded-top progress-wrapper"
            data-color="#ffbcaa"
            style={{ backgroundColor: "rgb(255, 188, 170)" }}
          >
            <div
              className="wave"
              data-progress="70%"
              style={{ bottom: "70%" }}
            />
          </div>
          <div className="card-footer bg-white">
            <h4 className="card-title">Web App (70%)</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




  )
}
