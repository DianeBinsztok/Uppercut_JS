console.log(">router.js>");

const express=require("express");
const {getAllEvents, getEventsByType, getImagesByTag, getImagesByYear, getContactPage, getImagesByTechnique }=require("./modules");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("index", getAllEvents());
})

router.get("/type/:type", (req,res)=>{
    res.render("index", getEventsByType(req.params.type));
})



router.get("/galerie/tag-:tag", (req,res)=>{
    res.render("index", getImagesByTag(req.params.tag));
})
router.get("/galerie/year-:year", (req,res)=>{
res.render("index", getImagesByYear(req.params.year) );
})
router.get("/galerie/technique-:technique", (req,res)=>{
    res.render("index", getImagesByTechnique(req.params.technique) );
    })
router.get("/contact", (req,res)=>{
    res.render("contact", getContactPage() );
})

module.exports=router;