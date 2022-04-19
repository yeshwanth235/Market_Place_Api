import React from "react";
import { useSelector } from "react-redux";

import Api from "../../components/api/UserApi";
import Navbar from "../../components/navbar/Navbar";
import "./myapi.css";

const Myapi = () => {
  const userData = useSelector((state) => state.userData);
  const apidata = userData.ApiData;
  if (userData.loggedIn) {
    let formData = userData.login;
    console.log(formData.data.email);
    const myapi = apidata.filter((e) => e.email === "tim@gmail.com");
    console.log(myapi);
  }
  return (
    <div className="myapi">
      <Navbar status="0" />
      <p id="myp">Your uploaded APIs</p>
      {apidata ? <Api /> : ""}
    </div>
  );
};

export default Myapi;
