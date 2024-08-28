import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Authentication/Login/login";
import RegisterPage from "./pages/Authentication/Register/register";
import SitesPages from "./pages/Admin/SitesPages";
import SingleSiteDashboardPage from "./pages/Admin/singleSiteDashboard";
import EditPage from "./pages/Admin/Edit";
function App() {
  // return <div>App</div>;

  //set up react router
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<SitesPages />} />
          <Route path="/dashboard/:id" element={<SingleSiteDashboardPage />} />
          <Route path="/edit/:id" element={<EditPage />} />

          {/* Add more routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
