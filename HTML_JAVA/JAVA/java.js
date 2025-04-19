

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", function() {
        alert("Has hecho click");
    });

    document.getElementById("boton").addEventListener("dblclick", function() {
        alert("Doble click detectado");
    });

    document.getElementById("inputTexto").addEventListener("focus", function() {
        this.style.backgroundColor = "lightyellow";
    });

    document.getElementById("inputTexto").addEventListener("blur", function() {
        this.style.backgroundColor = "white";
    });

    document.getElementById("inputTexto").addEventListener("change", function() {
        console.log("Valor cambiado: " + this.value);
    });

    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulario enviado correctamente");
    });

    document.getElementById("cuadro").addEventListener("mouseenter", function() {
        this.style.backgroundColor = "green";
    });

    document.getElementById("cuadro").addEventListener("mouseleave", function() {
        this.style.backgroundColor = "blue";
    });

    window.addEventListener("scroll", function() {
        console.log("¡Has hecho scroll en la página!");
    });

    window.addEventListener("resize", function() {
        console.log("El tamaño de la ventana ha cambiado");
    });
});
