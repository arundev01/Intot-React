import React, { useState } from "react";
import axios from "axios";


function SignUp() {
    const [input, setInput] = useState({
      name: '',
      email: '',
      phone: ''
    })
   
    function handleChange(event) {
      const {name, value} = event.target;
      setInput(prevInput => {
        return {
          ...prevInput,
          [name]:value
        }
      })
    }

    function handleClick(event) {
      event.preventDefault();
      const newUser = {
        name: input.name,
        email: input.email,
        phone: input.phone
      }

      axios.post('http://localhost:3000/register', newUser)
    }
    
    return (
        
        <React.Fragment>

      <section className="vh-100">
        
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>
      
                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">

                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" value={input.name} onChange={handleChange}/>
                            
                          </div>
                        </div>
                        <br/>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">

                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={input.email} onChange={handleChange}/>
                            
                          </div>
                        </div>
                        <br/>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">

                            <label className="form-label">Phone</label>
                            <input type="text" name="phone" className="form-control" value={input.phone}  onChange={handleChange}/>
                            
                          </div>
                        </div>
      
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <br/>
                          <button type="submit" className="btn btn-primary btn-lg" onClick={handleClick}>Register</button>
                        </div>
      
                    </form>
      
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image"/>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </React.Fragment>
    );
}

export default SignUp;
