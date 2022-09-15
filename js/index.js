console.log(">index.js>");

const express = require("express");
const app = express();
app.set("view engine", "ejs");
const PORT = 4000;
if (PORT == null || PORT == "") {
  PORT = 8000;
}

const router=require("./router");
app.use(router);
app.use(express.static("public"));
app.use(express.static("public/css"));


app.listen(proces.env.PORT, () => console.log(`listening to http://localhost:${PORT}/`));
