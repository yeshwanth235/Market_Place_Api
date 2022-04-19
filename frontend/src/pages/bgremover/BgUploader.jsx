import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./bg.css";
import Bg1 from "./Bg1.jpg";
import Bg2 from "./Bg2.svg";
import FileBase from "react-file-base64";
import { uploadImage } from "../../action/userAction";

const BgUploader = () => {
  const [img, setImage] = useState({ imgFile: "" });
  const imgData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("In handleSubmit");
    console.log(img);
    dispatch(uploadImage(img));
    if (!imgData.imageDate) {
      setImage({ imageFile: "" });
    }
  };

  return (
    <div>
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
          <form onSubmit={handleSubmit}>
            <div className="bgr">
              <img src={Bg2} alt={Bg2} id="Bg2i" />
              <p id="p3">
                File should be png, jpg and
                <br></br>
                less than 5mb
              </p>
              <FileBase
                id="uploader"
                type="file"
                onDone={({ base64 }) => setImage({ imgFile: base64 })}
              />
              <button type="submit">Upload Image</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BgUploader;
