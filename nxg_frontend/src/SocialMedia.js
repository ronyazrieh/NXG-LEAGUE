import React from "react";
import TikTok from "./icons/TTIcon.svg";
import Instagram from "./icons/InstagramIcon.svg";
import Twitter from "./icons/twitterIcon.svg";
import SUI from "./SUI.png";

const SocialMedia = ({ platform }) => {

    switch(platform.toLowerCase()){
        case 'tiktok':
      return <img src={TikTok}></img>;
    case 'twitter':
      return <img src={Twitter}></img>;
    case 'instagram':
      return <img src={Instagram}></img>;
    default:
      return <img src={SUI}></img>;
    }

};

export default SocialMedia