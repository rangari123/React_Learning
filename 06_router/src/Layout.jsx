// we are laying
//  <Header />;
//  <Layout/> --  <Home/> || <About/> dynamically rendering home,about comtnts using
// outlet form react routr dom
//  <Footer/>

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
