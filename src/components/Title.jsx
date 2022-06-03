
import React from "react";
import CarouselItem from "./CarouselItem";
import Nav from "./Navbar";

function Title() {

    return ( <div>
      <section id="title" className="title-background">
        <Nav />
          <section>        
            <div id="title-carousel" className="carousel slide carousel-section" data-ride="true">
              <ol className="carousel-indicators">
                <li data-target="#title-carousel" data-slide-to="0" className="active">01</li>
                <li data-target="#title-carousel" data-slide-to="1">02</li>
              </ol>
    
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <CarouselItem />
                </div>
                <div className="carousel-item">
                  <CarouselItem />
                </div>
    
                <div className="carousel-slider">
                  <a className="carousel-control-prev" role="button" href="#title-carousel" data-slide="prev">
                  </a>
                  <a className="carousel-control-next" role="button" href="#title-carousel" data-slide="next">
                  </a>
                </div>
              </div>
            </div>
          </section>    
      </section>
    </div>
  );

}

export default Title;