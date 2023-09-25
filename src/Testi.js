import React from 'react';

export default function Testi() {
  return (
    <section className="section bg-primary position-relative testimonial-bg-shapes">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title text-white mb-5">Testimonials</h2>
          </div>
          <div className="col-lg-10 mx-auto testimonial-slider">
            {/* slider-item */}
            <div className="text-center testimonial-content">
              <i className="ti-quote-right text-white icon mb-4 d-inline-block" />
              <p className="text-white mb-4">
              I have reliable certificates from the Central Bank in entrepreneurship and a certificate {" "} 
                <strong>
                from the ITI Institute in the field of 
                </strong>{" "}
                software and information security
              </p>
              <img
                className="img-fluid rounded-circle mb-4 d-inline-block"
                src="images/testimonial/client-2.png"
                alt="client-image"
              />
              <h4 className="text-white">Amin Elshishiny</h4>
              <h6 className="text-light mb-4">IT manager</h6>
            </div>

            {/* slider-item */}
            
       
           
          </div>
        </div>
      </div>
      {/* bg shapes */}
      <img src="images/backgrounds/map.png" alt="map" className="img-fluid bg-map" />
      <img src="images/illustrations/dots-group-v.png" alt="bg-shape" className="img-fluid bg-shape-1" />
      <img src="images/illustrations/leaf-orange.png" alt="bg-shape" className="img-fluid bg-shape-2" />
      <img src="images/illustrations/dots-group-sm.png" alt="bg-shape" className="img-fluid bg-shape-3" />
      <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" className="img-fluid bg-shape-4" />
      <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" className="img-fluid bg-shape-5" />
    </section>
  );
}
