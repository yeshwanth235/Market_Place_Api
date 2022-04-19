/* eslint-disable no-labels */
const userData = (state = [], action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, user: action.payload, registered: true };
    case "LOGIN":
      return { ...state, login: action.payload, loggedIn: true };
    case "POSTIMG":
      return { ...state, image: action.payload, imageData: true };
    case "API_DATA":
      return { ...state, apidata: action.payload };
    case "FETCH_API":
      return {
        ApiData: action.payload,
      };
    default:
      return state;
  }
};
export default userData;
