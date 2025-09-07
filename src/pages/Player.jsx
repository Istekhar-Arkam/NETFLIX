import React from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
const Player = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={back_arrow_icon}
          alt=""
          className="absolute w-12 cursor-pointer top-3 left-4"
        />
        <iframe
          src="https://www.youtube.com/embed/tYKrORILFOg"
          title="trailer"
          allowFullScreen
          frameBorder={0}
          className="w-50 h-40 sm:w-[90%] sm:h-[90%] rounded-lg"
        ></iframe>
        <div className="flex items-center justify-between w-full">
          <p>Published</p>
          <p>Name</p>
          <p>Type</p>
        </div>
      </div>
    </>
  );
};

export default Player;
