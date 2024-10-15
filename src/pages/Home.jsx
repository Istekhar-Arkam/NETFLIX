import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
   <>
  
    <div className="relative">
      <Navbar />
      <div className="">
        <img
          src={hero_banner}
          alt="hero-banner"
          className="w-screen md:h-screen"
        />
        <div className="absolute bottom-0 ml-2 sm:ml-10 sm:mb-8 lg:ml-12">
          <img
            src={hero_title}
            alt="caption image"
            className="w-2/4 sm:w-2/4"
          />
          <p className="pt-1 text-sm leading-none md:text-lg md:leading-none">
            Discovering his tires to a secret ancient order, young man living in
            modern Istanbul embarks on quest to save the city from an immortal
            enemy
          </p>
          <div className="flex gap-3 py-1 cursor-pointer sm:mt-2">
            <button className="flex items-center justify-center w-auto h-5 px-2 text-xs font-bold text-black bg-white rounded md:w-24 md:text-lg md:py-4 md:px-4 hover:bg-opacity-80">
              <img src={play_icon} alt="play_icon" className="w-4 md:w-5" />
              Play
            </button>
            <button className="flex items-center justify-center w-auto h-5 px-2 text-xs font-bold rounded md:w-36 md:text-lg md:py-4 md:px-3 bg-opacity-90 bg-slate-600 hover:bg-opacity-60">
              <img src={info_icon} alt="info_icon" className="w-4 md:w-8" />
              More Info
            </button>
          </div>
        </div>
      </div>
      
    </div>
    
    <div className="">
    <TitleCard title={"Blockbuster"}/>
    <TitleCard title={"Only on Netflix"}/>
    <TitleCard title={"Upcoming"}/>
    <TitleCard title={"Top Pics for you"}/> 
    </div>
    <div className="border-4 border-white sm:mt-10 sm:ml-12">
    <Footer/>
    </div>
     </>
  );
};

export default Home;
