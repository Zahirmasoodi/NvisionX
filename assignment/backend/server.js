const express = require("express");
const port = process.env.PORT || 5000;
const fs = require("fs");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "yoltlab",
  auth: {
    user: "zahir@xyz.com.com",
    pass: "11111111111"
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    if (!err && data) {
      res.send(data);
    }
  });
});

app.post("/purchase", function(req, res) {
  console.log(req.body);
  var data = req.body;
  const mailOptions = {
    from: "zahir@xyz.com",
    to: "basittammy@gmail.com",
    subject: "Peripheral invoice",
    text: data
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.end("sent");
});

app.listen(port, () => {
  console.log("Listening on port :" + port);
});
