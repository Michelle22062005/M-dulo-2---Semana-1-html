const parrafo = document.getElementById("title");
const boton = document.getElementById("button");
const mensaje = document.getElementById("mensaje");
const extra = document.getElementById("extra");

parrafo.textContent="Bienvenido a la página de las mascota";
boton.addEventListener("click", () => {
    parrafo.textContent = "!Nice¡ Has echo click en el boton";

    if (extra.style.display === "none") {
        extra.style.display = "block";
        boton.textContent = "Ocultar información";
    } else {
        extra.style.display = "none";
        boton.textContent = "Mostrar información";
    }
});
