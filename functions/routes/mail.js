const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

const {
  USER,
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  ACCESS_TOKEN,
} = require("../config/mailConfig");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: USER,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    accessToken: ACCESS_TOKEN,
    refreshToken: REFRESH_TOKEN,
    scope: "https://mail.google.com/",
    tokenType: "Bearer",
    expires: 3599,
  },
});

router.post("/", (req, res) => {
  let mail = {
    from: USER,
    to: USER,
    priority: "high",
    subject: "Mail from " + (req.body.email ? req.body.email : " Anonymous"),
    text: req.body.message ? req.body.message : "No message",
  };

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Server error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent: " + info.response);
    }
  });
});

module.exports = router;
