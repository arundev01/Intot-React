import React from "react";
import PortfolioImage from "./PortfolioImages";


function Portfolio() {

    return (

      <section id="prtfolio">
        <div className="container">
          <h2>
            OUR PORTFOLIO
          </h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at
            its layout.
          </p>    
        </div>
        <PortfolioImage />
      </section>
      
    );
}

export default Portfolio;