import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

import bg from "./bgr.svg";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Post from "../../components/api/All_Apis";

const Home = () => {
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  let apiData = userData.ApiData;
  return (
    <div>
      <Navbar status="1" />
      <div className="h-main">
        <div className="bgremover">
          <div className="bgmain">
            <img src={bg} alt="bg" />
            <div id="semi"></div>
            <div className="content">
              <div className="content-items">
                <h5>BACKGROUND IMAGE REMOVE</h5>
                <p>100% automatic and free</p>
              </div>

              <button
                onClick={() => {
                  navigate("/bgremover");
                }}
              >
                View App
              </button>
            </div>
          </div>
        </div>
        <div className="ApiD">
          <p id="api-p">All APIs</p>
          {apiData ? <Post /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
