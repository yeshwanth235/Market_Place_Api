/* eslint-disable react/react-in-jsx-scope */
import "./signup.css";
import logo from "./logo.png";

import Navbar from "../../components/navbar/Navbar";

const Signup = () => {
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
      </div>
    </div>
  );
};

export default Signup;
