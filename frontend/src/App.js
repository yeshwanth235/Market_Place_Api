import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchApiData } from "./action/userAction";
// import Login from './components/Login';
import Home from "./pages/home/Home";
import Bgremover from "./pages/bgremover/Bgremover";
import Newapi from "./pages/newApi/Newapi";
import Myapi from "./pages/myapi/Myapi";
import Login from "./pages/Signup/Login";
import Register from "./pages/Signup/Register";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);
  return (
    <div>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bgremover" element={<Bgremover />} />
            <Route path="/newapi" element={<Newapi />} />
            <Route path="/myapi" element={<Myapi />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
