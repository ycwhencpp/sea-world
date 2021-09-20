

const button=document.querySelectorAll(".btn");
const body=document.querySelector("body");
const navigation=document.querySelector(".navigation");


const theme = document.querySelector(".day_night");
theme.addEventListener("click",()=>{
        body.classList.toggle("dark_mode")
        theme.classList.toggle("toggle")
})
const menu = document.querySelector(".menu");
menu.addEventListener("click",()=>{
        menu.classList.toggle("toggle")
        navigation.classList.toggle("active")
        
})


// another approach for above js 
// button.forEach((func)=>{
//     func.addEventListener("click",()=>{
        
//         func.classList.toggle("toggle")
//     })
// })