const express = require("express");

const app = express();

app.use("/register", (req, res) => {
  res.json({ message: "Register Successfully" });
});

app.listen(8000);
