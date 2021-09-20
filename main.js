// toogling theme on click

const theme=document.querySelector(".day_night");
const body=document.querySelector("body");
theme.addEventListener("click",()=>{
    theme.classList.toggle("dark_mode");
    body.classList.toggle("dark_mode");
});

const menu =document.querySelector(".menu");
menu.addEventListener("click",()=>{
    menu.classList.toggle("toggle");
});