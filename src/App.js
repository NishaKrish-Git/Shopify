import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import AllProducts from "./Components/AllProducts";
import Home from "./Components/Home";
import AddToCart from "./Components/AddToCart";
import { ToastContainer, toast } from "react-toastify";
import SearchProducts from "./Components/SearchProduct";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <>
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/allproducts" element={<AllProducts />}></Route>
          <Route path="/addtocart" element={<AddToCart />}></Route>
          <Route
            path="/searchproducts/:search"
            element={<SearchProducts />}
          ></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
