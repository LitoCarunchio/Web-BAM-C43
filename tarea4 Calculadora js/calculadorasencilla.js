//Primer Prompt: Ingreso del primero numero.
let numUno = parseInt(prompt("Ingrese el primer número: "))
let operacion = prompt("Ingrese la operación a realizar (+ - * /): ")
let numDos = parseInt(prompt("Ingrese el segundo número: "))
let resultado;

let suma = numUno + numDos;
let resta = numUno - numDos;
let division = numUno / numDos;
let multiplicacion = numUno * numDos;

if (operacion === "/" && numUno === 0 || numDos === 0) {
    alert("Su numero no puede ser dividido por 0")
} else { if (operacion != "+" && operacion != "-" && operacion != "/" && operacion != "*") {
    alert("Operación inválida")
}

switch (operacion) {
    case "+":
            resultado = (numUno + numDos);
            alert("El resultado es: " + suma)
            break;
    case "-":
            resultado = (numUno - numDos);
            alert("El resultado es: " + resta)
            break;
    case "/":
            resultado = (numUno / numDos);
            alert("El resultado es: " + division)
            break;
    case "*":
            resultado = (numUno * numDos);
            alert("El resultado es: " + multiplicacion)
            break;
        }   
        }
