const express = require("express");
const getuserRoute = require("./routes/getuser-route");
const loginRouter = require("./routes/login-route");

const app = express();
app.use("/login", loginRouter);
app.use(getuserRoute);

app.listen(8000);
