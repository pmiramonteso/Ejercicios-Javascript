'use strict'

//Arrow function
const sumar = (a, b) => {
    return a + b;
}
console.log(1 + 2)

const aleatorio = () => Math.random() * 100;
console.log(aleatorio())

const persona = new Person('Juan');
persona.greet(); 

const printNumbers = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
printNumbers()

setTimeout(() => {
    console.log('El rap es rápido');
}, 4000);

//Operador ternario

function puedeConducir(edad) {
    return edad >= 18 ? 'Puedes conducir' : 'No puedes conducir'
}   
console.log(puedeConducir(17));
console.log(puedeConducir(29));


let num1 = 5;
let num2 = 20;
let resultado = num1 > num2 ? 'num1 es mayor' : 'num2 es mayor'

console.log(resultado)

function determinarSigno(numero) {
    return numero > 0 ? 'positivo' : (numero < 0 ? 'negativo' : 'cero');
}
console.log(determinarSigno(8));
console.log(determinarSigno(0));
console.log(determinarSigno(-5));

function encontrarMaximo (a, b, c) {
    return (a > b) ? (a > c ? a : c) : (b > c ? b : c)
}
console.log(encontrarMaximo(1, 2, 3))

function parOImpar(numero) {
    return (numero % 2 === 0) ? 'par' : 'impar';
}
console.log(parOImpar(2))
console.log(parOImpar(9))

//Callbacks
