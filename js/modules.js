console.log(">modules.js>");

const eventsData = require('../json/events.json');

const handleImagesData={
    getAllImages:()=>{

        return {events: eventsData, title: "Tous les évènements" };
        },

   /* getOneImage:(selectedId)=>{
            const selectedImage = imagesData.find(element=>element.id===selectedId);
            return {image:selectedImage};
        },*/

    getImagesByCategory:(category)=>{
        const imagesByCategory= eventsData.filter(image=>image.theme===category);
        return {events:imagesByCategory, title:category};
    },

    getImagesByTag:(tag)=>{
        const imagesByTag = eventsData.filter(image=>image.tags.includes(tag));
        return {events:imagesByTag, title:tag};
    },

    getImagesByTechnique:(lieu)=>{
        const imagesByTechnique = eventsData.filter(image=>image.lieu.includes(lieu));
        return{events:imagesByTechnique, title:"Tous les évènements de la salle : "+lieu};
    },

    getImagesByYear:(horaire_debut)=>{
        const imagesByYear = eventsData.filter(image=>image.horaire_debut===horaire_debut);
        return {events:imagesByYear, title: "En ce moment - à "+ horaire_debut +", dans le forum ..."};
    }, 
    getContactPage:()=>{
        return {events:[], title: "Contactez-moi "};
    }

}
module.exports=handleImagesData;