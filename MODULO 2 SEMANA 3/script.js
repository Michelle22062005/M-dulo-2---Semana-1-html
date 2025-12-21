// Selecciona el elemento del título usando su id
const parrafo = document.getElementById("title");

// Selecciona el botón que activará la interactividad
const boton = document.getElementById("button");

// Selecciona el párrafo donde se mostrará el mensaje
const mensaje = document.getElementById("mensaje");

// Selecciona el contenedor que se mostrará u ocultará
const extra = document.getElementById("extra");

// Mensaje de bienvenida que se muestra al cargar la página
parrafo.textContent = "Bienvenido a la página de las mascotas";

// Se agrega un evento al botón cuando se hace click
boton.addEventListener("click", () => {

    // Cambia el texto del título al hacer click en el botón
    parrafo.textContent = "¡Nice! Has hecho click en el botón";

    // Estructura condicional para mostrar u ocultar contenido
    if (extra.style.display === "none") {

        // Muestra el contenido oculto
        extra.style.display = "block";

        // Cambia el texto del botón
        boton.textContent = "Ocultar información";

    } else {

        // Oculta el contenido nuevamente
        extra.style.display = "none";

        // Cambia el texto del botón
        boton.textContent = "Mostrar información";
    }
});
