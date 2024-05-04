import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AddProducts from "./pages/Admin/AddProducts";
import MyNavbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addProduct" element={<AddProducts />} />
      </Routes>
    </>
  );
};

export default connect((state) => ({ ...state }))(App);
