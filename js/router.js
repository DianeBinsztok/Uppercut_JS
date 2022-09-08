console.log(">router.js>");

const express=require("express");
const {getAllImages, getImagesByCategory, getImagesByTag, getImagesByYear, getContactPage, getOneImage, getImagesByTechnique }=require("./modules");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("gallery", getAllImages());
})

router.get("/galerie/itineraire", (req,res)=>{
    res.render("gallery", getImagesByCategory("sketchbook"));
})

router.get("/galerie/futur", (req,res)=>{
    res.render("gallery", getImagesByCategory("nude"));
})
router.get("/galerie/bouger", (req,res)=>{
    res.render("gallery", getImagesByCategory("nude"));
})

/*router.get("/image/:id", (req,res)=>{
    res.render("detail", getOneImage(req.params.id));
})*/

router.get("/galerie/tag-:tag", (req,res)=>{
    res.render("gallery", getImagesByTag(req.params.tag));
})
router.get("/galerie/year-:year", (req,res)=>{
res.render("gallery", getImagesByYear(req.params.year) );
})
router.get("/galerie/technique-:technique", (req,res)=>{
    res.render("gallery", getImagesByTechnique(req.params.technique) );
    })
router.get("/contact", (req,res)=>{
    res.render("contact", getContactPage() );
})

module.exports=router;