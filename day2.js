
function main() {
    alert("¡Bienvenido a la aplicación de preguntas!");

    // Pregunta 1: Nombre
    let nombre = prompt("¿Cuál es tu nombre?");

    // Pregunta 2: Edad
    let edad = prompt("¿Cuántos años tienes?");

    // Pregunta 3: Lenguaje de programación
    let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

    // Mostrar resumen de respuestas
    console.log("\nResumen de tus respuestas:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad} años`);
    console.log(`Lenguaje de programación: ${lenguaje}`);

    alert(`Hola ${nombre}, tienes ${edad} años y estas aprendiendo ${lenguaje} !`);

    //Preguntar si te gusta aprender el lenguaje
    let estudiarLenguaje = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SI O 2 para No`);

    if (estudiarLenguaje == 1) {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    }

    if (estudiarLenguaje == 2) {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    }
}

main();