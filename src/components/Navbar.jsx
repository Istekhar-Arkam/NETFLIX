import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="fixed flex justify-between w-full px-5 py-4 border-4 border-white">
      <div className="flex items-center">
        <div className="ml-5">
          <img src={logo} alt="logo" className="h-9" />
        </div>
        <ul className="hidden gap-6 ml-20 text-lg cursor-pointer lg:flex">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News And Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="hidden gap-6 text-lg cursor-pointer lg:flex lg:items-center lg:ml-80">
        <img src={search_icon} alt="search-icon" className="font-2xl" />
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" />
      </div>
      <div className="flex items-center gap-2 ">
        <img
          src={profile_img}
          alt="profile-icon"
          className="rounded-lg h-7 w-7"
        />
        <img src={caret_icon} alt="caret_icon" />
      </div>
    </div>
  );
};

export default Navbar;
