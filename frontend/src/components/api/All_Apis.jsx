import React from "react";
import bg from "./bgr.svg";
import "./apis.css";
import { useSelector } from "react-redux";

const Post = () => {
  const userData = useSelector((state) => state.userData);
  let apiData = userData.ApiData;
  return (
    <div className="api">
      {apiData.map((i) => (
        <div className="api-items" key={i._id}>
          <img src={i.imgFile ? i.imgFile : bg} alt="bg" />
          <a href={i.endpoint}>
            <span>{i.name}</span>
          </a>
          <p>{i.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
