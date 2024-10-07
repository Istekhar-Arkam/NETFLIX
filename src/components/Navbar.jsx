import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="flex  fixed border-4 border-white w-full justify-between px-5 py-4">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-14" />
        <ul className="cursor-pointer flex gap-6 ml-5">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News And Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="flex cursor-pointer gap-6 items-center">
        <img src={search_icon} alt="search-icon"className="font-2xl" />
        <p>children</p>
        <img src={bell_icon} alt="bell-icon"className="" />
       <div className="flex gap-2 relative">
       <img src={profile_img} alt="profile-icon" className="rounded-lg hover:block"/>
       <img src={caret_icon} alt="caret_icon" className=""/>
       <div className="absolute top-10 w-36  right-0  bg-slate-900 rounded py-2 px-2 hidden">
        <p>Sign out of Netflix</p>
        <p>Sign out of Netflix</p>
        <p>Sign out of Netflix</p>

       </div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
