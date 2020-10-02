// Configuration de axios, le proxy ne marche pas

import axios from "axios";

const instance = axios.create({
  // XXX Change backend URL
  // baseURL: "http://localhost:5001/my-blog-21acb/us-central1/api",
  baseURL: "https://us-central1-my-blog-21acb.cloudfunctions.net/api",
});

export default instance;
