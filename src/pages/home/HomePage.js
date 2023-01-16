import React from "react";
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/navbar/SideBar";
import image from "./image2.webp";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SideBar />
        <img className="bgimage" src={image} alt="react"></img>
    </>
  );
};

export default HomePage;
