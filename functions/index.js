const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const path = require("path");

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

// FIXME Serve static assets ?
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
// });

exports.api = functions.https.onRequest(app);
