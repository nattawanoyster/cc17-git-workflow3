const express = require("express");
const getuserRoute = require("./routes/getuser-route");
const app = express();
app.use(getuserRoute);
app.listen(8000);
