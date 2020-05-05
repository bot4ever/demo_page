import axios from "axios";

const api = axios.create({
  baseURL: "http://179.83.15.140:3333",
});

export default api;
