import axios from "axios";

const api = axios.create({
  baseURL: "https://report-generator-dhbo.onrender.com",
  // baseURL: "http://localhost:3000",
});

export default api;
