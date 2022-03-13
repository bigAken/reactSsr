import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.31.187:4000/ssr",
  baseURL: "http://127.0.0.1:4000/ssr",
});

export default instance;
