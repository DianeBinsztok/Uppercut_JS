const search = document.querySelector("#filter-select");
//const modules = fetch("../../js/modules").then((response)=>console.log("response =>", response));
const lieu =  document.querySelector("#place");
const type =  document.querySelector("#type");
const heure =  document.querySelector("#time");
let url1 ="";
let url2 ="";

let searchLink = document.getElementById("specialUrl"); 
   

function showFilter(){
   let value = search.value;
    
   switch (value) {
    case 'lieu':
        place.classList.remove("hidden");
        type.classList.add("hidden");
        time.classList.add("hidden");
        
    break;
    case 'type':
        type.classList.remove("hidden");
        place.classList.add("hidden");
        time.classList.add("hidden");
    break;
    case 'heure':
        time.classList.remove("hidden");
        place.classList.add("hidden");
        type.classList.add("hidden");
    break;
    default:
        time.classList.add("hidden");
        place.classList.add("hidden");
        type.classList.add("hidden");
    break;
   }
   url1 =value;

}

function dispatch(){
     let value = url1;

        switch (value) {
    case 'lieu':
    url2 = lieu.value;
    break;
    case 'type':
    url2 = type.value;
    break;
    case 'heure':
    url2 = heure.value;
    break;
    default:
        console.log("error ");
    break;
   }
  let url = "/"+url1+"/"+url2; 
  searchLink.setAttribute("href", url); 
}

function clearURL(){
   searchLink.setAttribute("href", ""); 
}
