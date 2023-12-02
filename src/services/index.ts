import axios from "axios";

const api = axios.create({
  baseURL: "https://report-generator-dhbo.onrender.com",
  //baseURL: "http://127.0.0.1:3000",
});

export default api;
