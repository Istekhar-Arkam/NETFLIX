import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <img
          src={hero_banner}
          alt="hero-banner"
          className="w-full h-full"
        />
        <div>
          <img src={hero_title} alt="caption image" className="" />
          <p>
            Discovering his tires to a secret ancient order, young man living in
            modern Istanbul embarks on quest to save the city from an immortal
            enemy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
