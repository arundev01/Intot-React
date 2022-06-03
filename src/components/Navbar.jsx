import React from "react";
import { Link } from "react-router-dom";


function Nav() {

    return (

        <React.Fragment>
          <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="">INTOT</a>
          <div className="d-none d-lg-flex ms-auto flex-column flex-lg-row align-items-center menu"></div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img src="images/login.png" alt="" /><span><Link to="">Login</Link></span></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img src="images/signup.png" alt="" /><span><Link to="/SignUp" style={{Color: "#fefe"}}>Sign Up</Link></span></a>
                </li>
              </ul>
              <div className="search-img">
                <a href="/"><img src="images/search-icon.png" alt="" /></a>
              </div>
            </div>
        </nav>
        </React.Fragment>
    );
}

export default Nav;