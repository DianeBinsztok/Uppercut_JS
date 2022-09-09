const search = document.querySelector("#filter-select");

const place =  document.querySelector("#place");
const type =  document.querySelector("#type");
const time =  document.querySelector("#time");

console.log("search => ", search);
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
    case 'horaire':
        time.classList.remove("hidden");
        place.classList.add("hidden");
        type.classList.add("hidden");
    break;
   }
}
