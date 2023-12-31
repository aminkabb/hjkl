import React from 'react'

export default function Ser() {
  return (
    <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">Services</h2>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="card hover-shadow shadow">
            <div className="card-body text-center px-4 py-5">
              <i className="ti-palette icon mb-5 d-inline-block" />
              <h4 className="mb-4">Software Education</h4>
              <p>
              Teaching software using the online or online system in Egypt and the world
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="card active-bg-primary hover-shadow shadow">
            <div className="card-body text-center px-4 py-5">
              <i className="ti-vector icon mb-5 d-inline-block" />
              <h4 className="mb-4">Graphic Education</h4>
              <p>
              Teaching graphics on all electronic platforms
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="card hover-shadow shadow">
            <div className="card-body text-center px-4 py-5">
              <i className="ti-panel icon mb-5 d-inline-block" />
              <h4 className="mb-4">Teaching artificial intelligence</h4>
              <p>
              To make young people able to challenge the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
