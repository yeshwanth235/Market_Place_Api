/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Bg1 from "./Bg1.jpg";

import { useSelector } from "react-redux";
import download from "downloadjs";
import "./bg.css";

const BgDownloader = () => {
  const imgData = useSelector((state) => state.userData);
  const data1 = imgData.image;
  if (imgData) {
    const downloadImg = (e) => {
      download(data1.image, "bg_removed.jpeg", "image");
      imgData.imageData = false;
      console.log(imgData.imageData);
    };
    return (
      <div className="bg-main">
        <div className="bg-left">
          <div className="bgl">
            <p id="p1">
              Remove image <br></br>
              background
            </p>
            <p id="p2">100% automatic and free</p>
            <img src={Bg1} alt="bg1" />
          </div>
        </div>
        <div className="bg-right">
          <div className="bgr">
            <img src={data1.image} alt="img" /> <br />
            <p id="p3">Click to Download</p>
            <button onClick={downloadImg}>Download</button>
          </div>
        </div>
      </div>
    );
  }
};

export default BgDownloader;
