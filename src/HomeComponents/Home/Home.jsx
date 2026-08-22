import React from "react";

import Navbar from "../Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer";
import FloatingChat from "../../Components/FloatingChat/FloatingChat";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>

      <FloatingChat></FloatingChat>
    </div>
  );
};

export default Home;
