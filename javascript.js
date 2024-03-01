const navbarhamburger = document.querySelector('.navbarhamburger');

navbarhamburger.addEventListener('click', () => {
  navbarhamburger.classList.toggle('clicked');
});


const mobile_nav= document.querySelector(".navbarhamburger");
const nav_sidebar=document.querySelector("nav")

function togglenavbar(argument) {
  // body...
  nav_sidebar.classList.toggle('active')
}


mobile_nav.addEventListener('click', ()=> togglenavbar());