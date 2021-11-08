import React from "react";
import NavBar from "../../SharedPage/NavBar/NavBar";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <header style={{ height: "700px", background: "#FFF8F5" }}>
      <NavBar></NavBar>
      <Banner></Banner>
    </header>
  );
};

export default Header;
