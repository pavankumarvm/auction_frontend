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
import HomeCarousel from "./components/carousel/carouselComponent";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/wishlist" element={<ComingSoon />} />
      <Route path="/about" element={<ComingSoon />} />
      <Route path="/contact" element={<ComingSoon />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
