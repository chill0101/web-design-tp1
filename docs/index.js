document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.remove("transparent");
            header.classList.add("solid");
        } else {
            header.classList.remove("solid");
            header.classList.add("transparent");
        }
    });
});

//SCROL JS para la barra de navegación, el event listener toma el header y lo vuelve 
//sólido cuando se scrollea en el eje Y 
/*
La clase que se aplica es: 

.header.solid {
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
*/