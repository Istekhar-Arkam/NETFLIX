import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";


const Navbar = () => {
  return (
    <div className="flex fixed border-4 border-white w-full justify-between px-5 py-4">
      <div className="flex items-center">
       <div className="ml-5">
        <img src={logo} alt="logo" className="h-9" />
        </div> 
        <ul className="cursor-pointer lg:flex gap-6 ml-5 hidden">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News And Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="flex cursor-pointer gap-6 items-center hidden md:block">
        <img src={search_icon} alt="search-icon" className="font-2xl" />
        <p>children</p>
        <img src={bell_icon} alt="bell-icon"/>
        </div>
        <div className="flex gap-2 block">
          <img src={profile_img} alt="profile-icon" className="rounded-lg"/>
          <img src={caret_icon} alt="caret_icon"/>
          <div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
