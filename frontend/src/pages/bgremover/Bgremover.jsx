/* eslint-disable no-undef */
import React from "react";
import { useSelector } from "react-redux";
import BgUploader from "./BgUploader";
import BgDownloader from "./BgDownloader";
import Navbar from "../../components/navbar/Navbar";

const Bgremover = () => {
  const imgData = useSelector((state) => state.userData);

  let render = imgData.imageData === true ? <BgDownloader /> : <BgUploader />;

  return (
    <div>
      <Navbar status="0" />
      {render}
    </div>
  );
};

export default Bgremover;
