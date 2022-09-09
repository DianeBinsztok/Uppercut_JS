console.log(">router.js>");

const express=require("express");
const {getAllEvents, getEventsByType, getEventsByTime, getEventsByPlace }=require("./modules");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("index", getAllEvents());
})

router.get("/type/:type", (req,res)=>{
    res.render("index", getEventsByType(req.params.type));
})

router.get("/heure/:time", (req,res)=>{
res.render("index", getEventsByTime(req.params.time) );
})


router.get("/lieu/:place", (req,res)=>{
    res.render("index", getEventsByPlace(req.params.place));
})

module.exports=router;