console.log(">index.js>");

const express = require("express");
const app = express();
app.set("view engine", "ejs");
const port = 4000;

const router=require("./router");
app.use(router);
app.use(express.static("public"));
app.use(express.static("public/css"));


/*
router.use(express.static("views"));
router.use(express.static("public/images"));
router.use(express.static("public/images_mini"));
*/





app.listen(port, () => console.log(`listening to http://localhost:${port}/`));
