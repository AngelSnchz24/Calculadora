// Agregar números y operadores al campo de entrada
function agregar(valor) {
    const pantalla = document.querySelector("input[name='pantalla']");
    if (pantalla.value === "0") {
        pantalla.value = valor; // Reemplaza el 0 inicial
    } else {
        pantalla.value += valor; // Agrega el valor al final
    }
}

// Limpiar el campo de entrada
function limpiar() {
    const pantalla = document.querySelector("input[name='pantalla']");
    pantalla.value = "0"; // Reinicia el campo a 0
}

// Retroceder un carácter
function retroceder() {
    const pantalla = document.querySelector("input[name='pantalla']");
    pantalla.value = pantalla.value.slice(0, -1) || "0"; // Elimina el último carácter
}

function inicio(valor) {
    const pantalla = document.querySelector("input[name='pantalla']");
    if(pantalla == null || pantalla ==[]){
        pantalla.value = null;
    }
    if(pantalla != null || pantalla !=[]){
        pantalla.value += valor
    }

}

function calcular() {
    const pantalla = document.querySelector("input[name='pantalla']");
    const resultado = document.getElementById("resultado");
    try {
        const valor = eval(pantalla.value); // Evalúa la expresión matemática
        resultado.textContent = `Resultado: ${valor}`; // Muestra el resultado en el párrafo
    } catch (error) {
        resultado.textContent = "Resultado: Error"; // Muestra "Error" si la expresión no es válida
    }
}