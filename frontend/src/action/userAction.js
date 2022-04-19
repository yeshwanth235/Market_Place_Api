/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as api from "../api/index";

export const fetchApiData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchApi();
    dispatch({ type: "FETCH_API", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const RegisterUser = (user) => async (dispatch) => {
  try {
    const response = await api.RegisterUser(user);
    console.log("New user created");
    dispatch({ type: "REGISTER", payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const LoginUser = (user) => async (dispatch) => {
  try {
    const response = await api.LoginUser(user);
    console.log("User login successful");
    dispatch({ type: "LOGIN", payload: response });
    localStorage.setItem("Email", user.email);
  } catch (err) {
    console.log(err);
  }
};

export const uploadImage = (base64) => async (dispatch) => {
  try {
    const { data } = await api.uploadImage(base64);
    console.log("image uploaded to server");
    dispatch({ type: "POSTIMG", payload: data });
    let img = data;
    localStorage.setItem("img", img.image);
  } catch (err) {
    console.log(`Error in action: ${err.message}`);
  }
};

export const apiData = (data) => async (dispatch) => {
  try {
    const { res } = await api.apiData(data);
    console.log("Api data is entered successfully");
    dispatch({ type: "API_DATA", payload: res });
  } catch (err) {
    console.log(err);
  }
};
