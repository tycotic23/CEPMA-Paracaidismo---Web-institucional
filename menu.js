/* 
*
*
*
*/

/* eventos del icono del menu hamburguesa */
/* obtengo elementos */
/* icono */
let menuIcon=document.querySelector(".menu-icon");
/* menu a mostrar/ocultar */
let menu=document.querySelector(".menu");

/* toggle del menu al tocar el icono */
menuIcon.addEventListener('click',()=>{
    menu.classList.toggle("toggle-menu");
    menu.classList.toggle("ocultar");
});

/* ocultar el menu al elegir una opcion */
menu.addEventListener('click',()=>{
        menu.classList.remove("toggle-menu");
        menu.classList.add("ocultar");
});


/* 
*
*
*
*/

/* cambiar menu con el scroll y demas animaciones de scroll*/

let nav=document.querySelector("nav");
let animados=document.querySelectorAll(".anim");
let auxiliarTop=0;

window.addEventListener('scroll',()=>{
    /* menu */
    nav.classList.toggle("scroll-menu",window.scrollY>50);

});

/* 
*
*
*
*/