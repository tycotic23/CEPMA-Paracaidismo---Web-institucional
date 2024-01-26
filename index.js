/* animaciones de scroll que aparecen */
/* esta animacion aplica a cualquier elemento con la clase anim */

const mostrarElementos= elementos=>{
    elementos.forEach(elemento=>{
        if(elemento.isIntersecting){
            elemento.target.classList.add("in-anim");
        }
    });
};


const observerIn = new IntersectionObserver(mostrarElementos,{
    threshold:0.5
});


const animElementos=document.querySelectorAll(".anim");
animElementos.forEach((elemento)=>{
    observerIn.observe(elemento);
});



/* lazyload para img de fondo */

/* const revelarFondos= elementos=>{
    elementos.forEach(elemento=>{
        if(elemento.isIntersecting){
            elemento.target.classList.add("viewlazybk");
        }
    });
};



const observerBk = new IntersectionObserver(
    revelarFondos,
    { rootMargin: "100px" }
  );


  const fondosLazy=document.querySelectorAll(".lazyloadbk");
  fondosLazy.forEach((elemento)=>{
    observerBk.observe(elemento);
}); */