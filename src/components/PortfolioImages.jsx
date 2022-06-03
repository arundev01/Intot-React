import React from "react";


function PortfolioImage() {

    return (

        <div className="container-img">
            <div className="row">
                <div className="col-md-8">
                    <div className="portfolio-img">
                        <img src="images/portfolio-img-1.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="portfolio-img">
                        <img src="images/portfolio-img-2.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="portfolio-img">
                        <img src="images/portfolio-img-3.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="portfolio-img">
                        <img src="images/portfolio-img-4.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PortfolioImage;