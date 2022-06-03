import React from "react";


function CarouselItem() {

    return (

        <div className="row">
                  
          <div className="col-md-3 offset-md-2 col-md-3 offset-md-2 container-fluid">
            <h1 className="big-heading">INNOVATIVE
              <span> SOLUTIONS</span>
            </h1>
            <p>We find the best solutions for you, we redesign your home and work places.
              Discover why over 5,100 home owners trust initiative</p>
            <a href="" role="button" className="btn btn-outline-light btn-md  download-button readMore">Read More</a>
          </div>
          
          <div className="col-md-7 col-md-7">
            <img src="images/slider-img.png" alt="" className="title-image"/>
          </div>
        </div>
    );
}

export default CarouselItem;