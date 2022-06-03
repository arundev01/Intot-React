import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';


function RouterPage() {
  return (
    <div>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} exact/>
              <Route path="/SignUp" element={<SignUp />} exact/>
            </Routes>
        </Router>
    </div>
  );
}

export default RouterPage;

