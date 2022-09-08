console.log(">modules.js>");

const eventsData = require('../json/events.json');

const handleImagesData={
    getAllEvents:()=>{
        return {events: eventsData, title: "Tous les évènements" };
        },

    getEventsByType:(typeSlug)=>{
        const eventsByType= eventsData.filter(event=>event.type_slug===typeSlug);
        let typeTitle = "";
        switch (typeSlug) {
            case 'conferences':
            typeTitle = "Toutes les conférences";
            break;
            case 'ateliers':
            typeTitle = "Tous les ateliers";
            break;
            case 'rencontres':
            typeTitle = "Toutes les rencontres";
            break;
            case 'debats':
            typeTitle = "Tous les débats";
            break;
            default:
            typeTitle = "Désolé, nous ne trouvons pas ce type d'évènement";
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
            case 'amphi4':
            placeTitle = "Tout le programme de l'amphi 4";
            break;
            case 'ecole-buissoniere-crous':
            placeTitle = "Tout le programme de l'école buissonnière - espace CROUS";
            break;
            case 'ecole-buissonniere-salle3':
            placeTitle = "Tout le programme de l'école buissonnière - salle 3";
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
            case 'librairie':
            placeTitle = "A la librairie";
            break;
            case 'bureaux':
            placeTitle = "Dans les bureaux";
            break;
            case 'barrack':
            placeTitle = "Dans la Barrack";
            break;
            default:
            placeTitle = "Désolé, nous ne trouvons pas ce lieu sur le Forum. Etes vous dans le bon immeuble? O.o";
        }
        return{events:eventsByPlace, title:placeTitle};
    },

    handleTime:(startTime)=>{
      return startTime;
    },

    getEventsByTime:(startTime)=>{
        const eventsByTime = eventsData.filter(event=>(event.horaire_debut).substring(0, 3)===startTime.substring(0, 3));
        return {events:eventsByTime, title: "En ce moment - à "+startTime +", dans le forum ..."};
    }

}
module.exports=handleImagesData;