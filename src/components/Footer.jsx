import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="">
      <div  className="">
        <img src={youtube_icon} alt="youtube_icon" />
        <img src={twitter_icon} alt="twitter_icon" />
        <img src={instagram_icon} alt="instagram_icon" />
        <img src={facebook_icon} alt="facebook_icon" />
      </div>
      <ul>
       <li>Audio Description</li>
       <li>Help center</li>
       <li>gift cards</li>
       <li>media centre</li>
       <li>investor relations</li>
       <li>jobs</li>
       <li>term of use</li>
       <li>privacy</li>
       <li>legal notices</li>
       <li>cookie preference</li>
       <li>corporate information</li>
       <li>contact us</li>
</ul>
<p>1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
