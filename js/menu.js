const menu = document.querySelector('.menu');
const nav_menu = document.querySelector('.navigation-menu');

menu.addEventListener('click', ()=>{
    nav_menu.classList.toggle("spread");
})

window.addEventListener('click', e=>{
    if(nav_menu.classList.contains('spread') && e.target != nav_menu && e.target != menu) {
        nav_menu.classList.toggle("spread");
    }
})