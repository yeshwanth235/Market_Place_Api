/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import Modal from "react-modal";

import "./navbar.css";
import NewApi from "../../pages/newApi/Newapi";

const Navbar = ({ status }) => {
  const current_User = useSelector((state) => state.userData);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  if (status === "0") {
    return (
      <div className="navbar">
        <a href="/">
          <img id="logo" src={logo} alt="logo" />
        </a>
      </div>
    );
  }

  if (current_User.loggedIn === true) {
    return (
      <div className="navbar">
        <img id="logo" src={logo} alt="logo" />
        <div className="nav-items">
          <a
            onClick={() => {
              navigate("/myapi");
            }}
          >
            My APIs
          </a>
          <a
            onClick={() => {
              navigate("/myaccount");
            }}
          >
            My Account
          </a>

          <button onClick={() => setModal(true)}>+New API</button>
          <Modal
            className="modal"
            isOpen={modal}
            onRequestClose={() => setModal(false)}
          >
            <NewApi />
            <img
              id="cancel"
              onClick={() => setModal(false)}
              src="https://img.icons8.com/fluency/48/000000/delete-sign.png"
              alt="cancel"
            />
          </Modal>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <img id="logo" src={logo} alt="logo" />
        <div className="nav-items">
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
};

export default Navbar;
