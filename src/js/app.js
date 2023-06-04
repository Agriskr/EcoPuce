import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../node_modules/spotlight.js/dist/spotlight.bundle.js'; 
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();



window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        var navigationBar = document.getElementById("myNavbar")
        navigationBar.classList.remove('navbar-transparent')
        navigationBar.classList.add('navbar-transparent-dark');
    } else {
        var navigationBar = document.getElementById("myNavbar")
        navigationBar.classList.remove('navbar-transparent-dark')
        navigationBar.classList.add('navbar-transparent')


    }
}
//navbārā parāda pašreizējo lapu. 
// document.querySelectorAll('.nav-link').forEach(link => {
//     if(link.href === window.location.href){
//       link.setAttribute('aria-current', 'page')
//     }
//   })
  
// //parallax
// const translate = document.querySelectorAll(".translate");
// const big_title = document.querySelector(".big-title");
// const header = document.querySelector("header");
// const shadow = document.querySelector(".shadow");
// const content = document.querySelector(".content");
// const section = document.querySelector("section");
// const image_container = document.querySelector(".imgContainer");
// const opacity = document.querySelectorAll(".opacity");
// const border = document.querySelector(".border");

// let header_height = header.offsetHeight;
// let section_height = section.offsetHeight;

// window.addEventListener('scroll', () => {
//     let scroll = window.pageYOffset;
//     let sectionY = section.getBoundingClientRect();
    
//     translate.forEach(element => {
//         let speed = element.dataset.speed;
//         element.style.transform = `translateY(${scroll * speed}px)`;
//     });

//     opacity.forEach(element => {
//         element.style.opacity = scroll / (sectionY.top + section_height);
//     })

//     big_title.style.opacity = - scroll / (header_height / 2) + 1;
//     shadow.style.height = `${scroll * 0.5 + 300}px`;

//     content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
//     image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

//     border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
// })