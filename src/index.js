import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navigation from "./components/navbar/navbarComponent";
import ComingSoon from "./components/comingsoon/comingsoonComponent";
import HomePage from "./pages/home/home";
import BuyPage from "./pages/buy/buy";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/wishlist" element={<ComingSoon />} />
      <Route path="/about" element={<ComingSoon />} />
      <Route path="/contact" element={<ComingSoon />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
