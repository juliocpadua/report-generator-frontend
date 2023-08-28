import axios from "axios";

const api = axios.create({
  baseURL: "https://report-generator-dhbo.onrender.com",
});

export default api;
