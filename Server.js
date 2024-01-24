const { log, error } = require("console");
const express = require("express");
const app = express();
const port = 8000;

const middleWare = (req, res, next) => {
  const date = new Date();
  if (
    date.getDay() > 0 &&
    date.getDay() < 6 &&
    date.getHours() > 8 &&
    date.getHours() < 17
  ) {
    next();
  } else {
    res.status(400).send({ msg: "Sorry we are Closed now!!!" });
  }
};

app.listen(port, console.log("server is runing on port 8000"));
app.use(middleWare);
app.use(express.static(__dirname + "/public"));
