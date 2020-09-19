import axios from "axios";

const instance = axios.create({
  baseURL: "https://criterion-api.herokuapp.com/",
});

export default instance;
