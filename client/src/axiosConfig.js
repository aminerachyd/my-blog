// Configuration de axios, le proxy ne marche pas

import axios from "axios";

const instance = axios.create({
  // XXX Change backend URL
  baseURL: "http://localhost:5000/my-blog-21acb/us-central1/app",
});

export default instance;
