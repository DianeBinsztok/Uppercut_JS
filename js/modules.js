console.log(">modules.js>");

const eventsData = require('../json/events.json');
const slugify = require("slugify");

const handleEventsData={


    getAllEvents:()=>{
        return {events: eventsData, title: "Tous les évènements" };
        },

    getEventsByType:(typeSlug)=>{
        const eventsByType= eventsData.filter(event=>event.type_slug===typeSlug);
        let typeTitle = "";
        switch (typeSlug) {
            case 'tables-rondes':
            typeTitle = "Toutes les tables rondes";
            break;
            case 'ateliers':
            typeTitle = "Tous les ateliers";
            break;
            case 'workshops':
            typeTitle = "Tous les workshops entreprises";
            break;
            case 'rencontres':
            typeTitle = "Toutes les rencontres";
            break;
            default:
            typeTitle = "Désolé, nous ne trouvons pas ce format d'évènement";
        }
        return {events:eventsByType, title:typeTitle};
    },

    getEventsByPlace:(placeSlug)=>{
        const eventsByPlace = eventsData.filter(event=>event.lieu_slug===placeSlug);
        let placeTitle = "";
         switch (placeSlug) {
            case 'amphi1':
            placeTitle = "Tout le programme de l'amphi 1";
            break;
            case 'amphi2':
            placeTitle = "Tout le programme de l'amphi 2";
            break;
            case 'grand-amphi':
            placeTitle = "Tout le programme du grand amphi";
            break;
            case 'ecole-buissoniere-crous':
            placeTitle = "Tout le programme de l'école buissonnière - espace CROUS";
            break;
            case 'maison-etudiants':
            placeTitle = "À la Maison des étudiants";
            break;
            case 'place-engagement':
            placeTitle = "Sur la Place de l'Engagement";
            break;
            case 'co-quartier':
            placeTitle = "Dans le co-quartier";
            break;
            case 'bibli-auditorium':
            placeTitle = "Dans l'auditorium de la Bibli";
            break;
            case 'bibli-bar':
            placeTitle = "Au bar de la Bibli";
            break;
            case 'bibli-patio':
            placeTitle = "Dans le patio";
            break;
            case 'bibli-librairie':
            placeTitle = "À la librairie";
            break;
            case 'salle1':
            placeTitle = "Dans la salle 1";
            break;
            case 'salle2':
            placeTitle = "Dans la salle ";
            break;
            case 'barrack':
            placeTitle = "Dans la Barrack";
            break;
            default:
            placeTitle = "Désolé, nous ne trouvons pas ce lieu sur le Forum. Êtes vous dans le bon bâtiment? O.o";
        }
        return{events:eventsByPlace, title:placeTitle};
    },

    getEventsByTime:(startTime)=>{
        const eventsByTime = eventsData.filter(event=>(event.horaire_debut).substring(0, 3)===startTime.substring(0, 3));
        return {events:eventsByTime, title: "À "+startTime +", dans le forum ..."};
    },

    getEventsBySpeakersName:(speakerSlug)=>{

        const eventsBySpeakersName=[];
        for(let event of eventsData){
            for(let speaker of event.intervenants){
                if(speaker.hasOwnProperty("speaker_slug") && speaker.speaker_slug === speakerSlug){
                eventsBySpeakersName.push(event)
                }
            }
        };
        return {events:eventsBySpeakersName, title: "Toutes les interventions de "+ speakerSlug+ ":" };
    }
}
module.exports=handleEventsData;