const navicon = document.querySelector(".navicon");
const nav = document.querySelector("nav");
const backdrop =document.querySelector(".backdrop");
const icon = document.querySelector(".icon");
navicon.onclick = show;

backdrop.onclick = show;
icon.onclick = show;

function show() {
   
      nav.classList.toggle("show-menu");
      navicon.classList.toggle("rotate");
    backdrop.classList.toggle("show");


}

