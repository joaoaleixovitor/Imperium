const buttonHamburguerMenu = document.querySelector("#buttonHamburguerMenu");
const header = document.querySelector("#header");
const menu = document.querySelector("#menu-hamburguer");
const head = document.querySelector("#premium_make_collection")

buttonHamburguerMenu.addEventListener("click", ()=>{
    menu.classList.toggle("opened");
    menu.classList.toggle("closed");
    header.classList.toggle("actived");
})
