// Configuration de axios, le proxy ne marche pas

const axios = require("axios");

module.exports = instance = axios.create({
  // XXX Change backend URL
  baseURL: "http://localhost:5000/my-blog-21acb/us-central1/api",
});
