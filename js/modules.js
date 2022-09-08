console.log(">modules.js>");

const eventsData = require('../json/events.json');

const handleImagesData={
    getAllEvents:()=>{
        return {events: eventsData, title: "Tous les évènements" };
        },

   /* getOneImage:(selectedId)=>{
            const selectedImage = imagesData.find(element=>element.id===selectedId);
            return {image:selectedImage};
        },*/

    getEventsByType:(type)=>{
        const eventsByType= eventsData.filter(event=>event.type===type);
        return {events:eventsByType, title:type};
    },


    getEventsByPlace:(lieu)=>{
        const eventsByPlace = eventsData.filter(image=>image.lieu===lieu);
        return{events:eventsByPlace, title:"Tous les évènements de la salle : "+lieu};
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