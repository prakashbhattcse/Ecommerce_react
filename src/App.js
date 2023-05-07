import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import ErrorPage from "./Pages/ErrorPage";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./Components/Navbar/Header/Header"
import Cart from "./Pages/Cart/Cart"
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/id:" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer/>
    </Router>
  )
};

export default App;
