import React from "react";


function About() {

    return (

        <div>
          <section className="white-section" id="about">

          <div className="about-heading">
            <h2>
              WHY INITIATIVE COMPANY
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at
              its layout.
            </p>
          </div>
          <div className="row">
              
            <div className="col-lg-4 col-md-6">
              <div className="about-card shadow p-3 mb-5 bg-white rounded">
                <div className="card-img">
                  <img src="images/card-img-1.png" alt=""/>
                </div>
                <div className="card-body">
                  <h4>
                    10 YEARS EXPERIENCE
                  </h4>
                  <p>
                    Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus.
                  </p>
                </div>
              </div>
            <a href="" role="button" className="btn btn-outline btn-md  download-button readMore">Read More</a>      
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="about-card shadow p-3 mb-5 bg-white rounded">
                <div className="card-img">
                  <img src="images/card-img-2.png" alt=""/>
                </div>
                <div className="card-body">
                  <h4>
                    A PRO ARCHITECTS TEAM
                  </h4>
                  <p>
                    Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus.
                  </p>
                </div>
              </div>
            <a href="" role="button" className="btn btn-outline btn-md  download-button readMore">Read More</a>
            </div>
              
            <div className="col-lg-4 col-md-12">
              <div className="about-card shadow p-3 mb-5 bg-white rounded">
                <div className="card-img">
                  <img src="images/card-img-3.png" alt=""/>
                </div>
                <div className="card-body">
                  <h4>
                    1000+ HAPPY CUSTOMERS
                  </h4>
                  <p>
                    Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus.
                  </p>
                </div>
              </div>
            <a href="" role="button" className="btn btn-outline btn-md  download-button readMore">Read More</a>
            </div>   
          </div>

          </section>
        </div>
    );
}

export default About;