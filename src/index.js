import React from "react";
import ReactDOM from "react-dom";
import Aos from "aos";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";
import Navigation from "./components/navbar/navbarComponent";
import ComingSoon from "./components/comingsoon/comingsoonComponent";
import HomePage from "./pages/home/home";
import BuyPage from "./pages/buy/buy";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";
import Footer from "./components/footer/footer";
import ContactPage from "./pages/contact/contact";
import AboutPage from "./pages/about/about";
import Product from "./pages/product/product";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/sell" element={<ComingSoon />} />
      <Route path="/wishlist" element={<ComingSoon />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
