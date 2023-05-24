import axios from "axios";

const endpoind = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const getPosts = () => endpoind.get("/posts");
const getDetPosts = (payload) => endpoind.get("/posts/" + payload);
const api = {
  getPosts,
  getDetPosts,
};

export default api;
