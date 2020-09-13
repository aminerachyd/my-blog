const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
// TODO Make the backend

const app = express();

app.use(cors());

// API Routes
app.use("/posts", require("./routes/posts"));

exports.app = functions.https.onRequest(app);
