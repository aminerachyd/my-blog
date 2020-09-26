const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

global.XMLHttpRequest = require("xhr2");

// Middleware for uploading files
const fileMiddleware = require("express-multipart-file-parser");

const app = express();

// Middlewares
app.use(cors());
app.use(fileMiddleware);

// API Routes
app.use("/posts", require("./routes/posts"));
app.use("/about", require("./routes/about"));
app.use("/files", require("./routes/files"));
app.use("/mail", require("./routes/mail"));

exports.api = functions.https.onRequest(app);
