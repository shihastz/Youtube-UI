import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPifpG24lFFaOW2tkDJdFjjqk5CA"
          alt=""
        />
        <span>30:00</span>
      </div>
      <div className="video__title">
        React JS - Complete React js Tutorial | Web Development
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m views •
        </span>
        <span> 5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwnhEkD5vdTDaY2WW3Dd3oxk-Tx1YlI5boXMov1FGSA=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Shihas t</p>
      </div>
    </div>
  );
};

export default Video;
