import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/Authentication/Login/login";
import RegisterPage from "./pages/Authentication/Register/register";

function App() {
  // return <div>App</div>;

  //set up react router
return(
  <>
    <Router>
      <Routes>
          {/* <Route path = '/' element ={ <LoginPage/> } /> */}
          <Route path = '/login' element ={ <LoginPage/> } />
          <Route path = '/register' element ={ <RegisterPage/> } />

           {/* Add more routes here */}
      </Routes>
    </Router>
   </>
);
}

export default App;
