console.log(">router.js>");

const express=require("express");
const {getAllEvents, getEventsByType, getEventsByTime, getEventsByPlace, getEventsBySpeakersName }=require("./modules");
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

router.get("/intervenant/:speaker", (req,res)=>{
    res.render("index", getEventsBySpeakersName(req.params.speaker));
})

module.exports=router;