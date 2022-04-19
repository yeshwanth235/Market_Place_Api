import axios from "axios";

// https://stormy-sea-89324.herokuapp.com/
// http://localhost:5050

const url = "https://stormy-sea-89324.herokuapp.com";

export const RegisterUser = (userData) =>
  axios.post(`${url}/register`, userData);

export const LoginUser = (userData) => axios.post(`${url}/login`, userData);

export const uploadImage = (base64) => axios.post(`${url}/upload`, base64);

export const apiData = (data) => axios.post(`${url}/apiData`, data);

export const fetchApi = () => axios.get(`${url}/fetchApi`);

export const UsersApi = (data) => axios.get(`${url}/UsersApi`, data);
