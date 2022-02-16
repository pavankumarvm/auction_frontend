import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.css";
import Navigation from "./components/navbar/navbarComponent";
import ComingSoon from "./components/comingsoon/comingsoonComponent";
import HomePage from "./pages/home/home";
import BuyPage from "./pages/buy/buy";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";
// import Footer from "./components/footer/footer";
import ContactPage from "./pages/contact/contact";
import AboutPage from "./pages/about/about";
import ProductPage from "./pages/product/product.page";
import SellPage from "./pages/sell/sell.page";
import ProfilePage from "./pages/profile/profile";
import withSplashScreen from "./components/splashScreen/splashScreenComponent";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/wishlist" element={<ComingSoon />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/">
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default withSplashScreen(App);
