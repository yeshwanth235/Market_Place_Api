import React from "react";
import bg from "./bgr.svg";
import "./apis.css";
import { useSelector } from "react-redux";

const UserApi = () => {
  const userData = useSelector((state) => state.userData);
  const apidata = userData.ApiData;
  if (userData.loggedIn) {
    let formData = userData.login;
    console.log("formData from api", formData);
  }
  const emailId = localStorage.getItem("Email");
  console.log(emailId);
  let myapi = apidata.filter((e) => e.email === emailId);
  return (
    <div className="api">
      {myapi.map((i) => (
        <div key={i._id}>
          <div className="api-items">
            <img src={i.imgFile ? i.imgFile : bg} alt="bg" />
            <a href={i.endpoint}>
              <span>{i.name}</span>
            </a>
            <p>{i.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserApi;
