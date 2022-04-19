import React, { useState, useEffect } from "react";
import "./signup.css";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const clear = () => {
    setUser({ email: "", password: "" });
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(LoginUser(user));
    } catch (e) {
      console.log("error in login");
    }
    clear();
  };

  useEffect(() => {
    if (userData.loggedIn === true) {
      console.log("login successful");
      navigate("/");
    }
  });

  return (
    <div>
      <Navbar status="0" />
      <div className="s-main">
        <div className="right">
          <div className="rcontent">
            <div className="layer">
              <img src={logo} alt="layer1" />
            </div>
            <h1>
              Welcome to your <br></br>Dashboard
            </h1>
            <p>
              Your uploaded APIs will be <br></br>displayed here once you loign
              to your <br></br>account
            </p>
          </div>
        </div>

        <div className="left">
          <div className="lcontent">
            <h3>Login to your account</h3>
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                value={user.email}
                placeholder="Email address"
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <br></br>
              <input
                name="password"
                value={user.password}
                placeholder="Password"
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                autoComplete="on"
              />
              <br></br>
              <a
                onClick={() => {
                  navigate("/register");
                }}
                id="link"
              >
                Register
              </a>
              <button>Login/Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
