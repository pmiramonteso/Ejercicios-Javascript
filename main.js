'use strict'

console.log('--- Arrow Functions ---');

console.log('--- Ejercicio 1 ---');
const sumar = (a, b) => {
    return a + b;
}
console.log(sumar(1, 2))

console.log('--- Ejercicio 2 ---');
const aleatorio = () => Math.floor(Math.random() * 100);
console.log(aleatorio())

console.log('--- Ejercicio 3 ---');
const persona = new Person('Juan');
persona.greet(); 

console.log('--- Ejercicio 4 ---');
const printNumbers = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const printNumber = (n) => console.log(n);
        printNumber(nums[i]);
    }
}
printNumbers([4, 9, 13, 22])

console.log('--- Ejercicio 5 ---');
setTimeout(() => {
    console.log('El rap es rápido');
}, 4000);

console.log('--- Operador ternario ---');

console.log('--- Ejercicio 1 ---');
function puedeConducir(edad) {
    return edad >= 18 ? 'Puedes conducir' : 'No puedes conducir'
}   
console.log(puedeConducir(17));
console.log(puedeConducir(29));

console.log('--- Ejercicio 2 ---');
let num1 = 5;
let num2 = 20;
let resultado = num1 > num2 ? 'num1 es mayor' : 'num2 es mayor'
console.log(resultado)

console.log('--- Ejercicio 3 ---');
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

console.log('--- Ejercicio 4 ---');
function parOImpar(numero) {
    return (numero % 2 === 0) ? 'par' : 'impar';
}
console.log(parOImpar(2))
console.log(parOImpar(9))

console.log('--- Callbacks ---');

console.log('--- Ejercicio 1 ---');
function procesar(num, callback){
    return callback(num);
}
console.log(procesar(5, (num) => num * num));

console.log('--- Ejercicio 2 ---');
function calculadora(num1, num2, callback) {
    callback(num1, num2);
}
calculadora(4, 6, (a, b) => {
    console.log(a + b);
});

console.log('--- Ejercicio 3 ---');
function aSaludar(nombre, callback) {
    callback(nombre);
}
setTimeout(() => {
    aSaludar('Paola', (nombre) => {
        console.log('Hola, ' + nombre);
    });
}, 2000);

console.log('--- Ejercicio 4 ---');
function procesarElementos(artistas, callback) {
    for (let i = 0; i < artistas.length; i++) {
        callback(artistas[i]);
    }
}
const artistas = ['SFDK', 'Ayax', 'Hard GZ']
function imprimirArtistas(artistas) {
    console.log(artistas);
}
procesarElementos(artistas, imprimirArtistas)

console.log('--- Ejercicio 5 ---');
function procesarCadena(cadena, callback) {
    const cadenaMayus = cadena.toUpperCase();
    callback(cadenaMayus);
}
let cadena = 'Yo tampoco sé vivir, estoy improvisando'
function impirmirCadena(cadena) {
    console.log(cadena);
}
procesarCadena(cadena, impirmirCadena)

console.log('--- Rest & Spread operators ---');

console.log('--- Ejercicio 1 ---');
const artistas1 = ['Sharif', 'Mxrgxn', 'Recycled']
const artistas2 = [...artistas1, 'FernandoCosta', 'KaseO', 'ToteKing']
console.log(artistas2)

console.log('--- Ejercicio 2 ---');
function suma(...valores){
let resultado = 0
valores.forEach(function(valor){
    resultado = resultado + valor;
})
return resultado;
}
console.log(suma(1, 2, 3, 4, 5))

console.log('--- Ejercicio 3 ---');
const objeto1 = {
    instrumentos: 'piano, guitarra, bateria',
    escenarios: 'CaldesDeMontbui, Luarca, RibesDeFreser'
}
const objeto2 = {
    ...objeto1
}
objeto2.escenarios = 'Aiguafreda'
console.log(objeto1);
console.log(objeto2);

console.log('--- Ejercicio 4 ---');
const raperosUruguayos = ['DosTresCinco', 'Zeballos', 'DiegoArquero', 'GamaStoner'];
const [primero, segundo, ...resto] = raperosUruguayos;
console.log(primero);
console.log(segundo);
console.log(resto);

console.log('--- Ejercicio 5 ---');
function crearRecetas(a, b, c) {
    return (a + ', ' + b + ' y ' + c)
}
const ingredientes = ['pistacho', 'fresas', 'nata']
console.log(crearRecetas(...ingredientes))

console.log('--- Ejercicio 6 ---');
const caminosASantiago = {
    nombres : ['Portugues', 'delNorte', 'Primitivo'],
    caracteristicas : ['costa', 'montaña', 'ciudad'],
    etapas: ['+10km', '+20km', '+30km', '+40km']
}
const clima = {
    estacion : ['Invierno', 'Primavera', 'Verano', 'Otono'],
    caracteristicas : ['lluvioso', 'soleado', 'nublado'],
    temperaturas : ['0º','+10º', '+20º', '+30º']
}
const viaje = {...caminosASantiago, ...clima}
console.log(viaje)

console.log('--- Array transformations ---');

console.log('--- Ejercicio 1 ---');
const acuadrar = [1, 2, 3, 4]
const cuadrados = acuadrar.map(x => x * x)
console.log(cuadrados)

console.log('--- Ejercicio 2 ---');
const numbers = [1, 2, 3, 4]
const numPairs = numbers.filter(x => x % 2 === 0)
console.log(numPairs)

console.log('--- Ejercicio 3 ---');
const array1 = [1, 10 , 8, 11]
const mayor10 = array1.find(x => x > 10);
console.log(mayor10)

console.log('--- Ejercicio 4 ---');
const array2 = [13, 7, 8, 21]
const valorInicial = 0;
const reduce = array2.reduce((accumulator, valorActual) => accumulator + valorActual, valorInicial,);
console.log(reduce);

console.log('--- Ejercicio 5 ---');
const array3 = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9]
function calcular() {
let filter = array3.filter (x => x >= 10)
let multi = filter.map(x => x*2)
let sumo = multi.reduce((accumulator, valorActual) => accumulator + valorActual)
return sumo
}
console.log(calcular())

console.log('--- Ejercicio 6 ---');
const array4 = [11, 12, 13, 14]
const someWhere = array4.some(x => x > 10);
console.log(someWhere)
const everyOne = array4.every(x => x > 10);
console.log(everyOne)

console.log('--- Array Loops ---');

console.log('--- Ejercicio 1 ---');
let nombres = ['Anna', 'Bernat', 'Clara'];
nombres.forEach((x) => console.log(x))

console.log('--- Ejercicio 2 ---');
for (const valor of nombres) {
    console.log(valor)
}

console.log('--- Ejercicio 3 ---');
let obj = {
    Nombre: 'Ola',
    Edad: 25,
    Ciudad: 'Barcelona'
};
for (const clave in obj) {
    console.log(`${clave}: ${obj[clave]}`)
}

console.log('--- Ejercicio 4 ---');
let numeros = [1, 2, 3, 4, 5, 6]
 for (let numero of numeros) {
    if (numero > 5) {
        break;
    }
    console.log(numero)
 }

 console.log('--- Ejercicio 5 ---');
 for (let [indice, valor] of nombres.entries()) {
    console.log(`Indice: ${indice}, Nombre: ${valor}`);
 }

 console.log('--- Promesas & Async/Await ---');

 console.log('--- Ejercicio 1, 2, 4 y 5---');
 let promesa = new Promise((resolve, reject) => {
       setTimeout(() => {
      let compromiso = true;
      if (compromiso) {
        resolve("Hola, Mundo");
      } else {
        reject("Ouch, no has podido realizar tu promesa :(");
      }
    }, 2000);
  });
  
  promesa.then((mensaje) => {
    console.log(mensaje);
  }).catch((error) => {
    console.error(error);
  });
  async function imprimirResultado() {
    try {
      const mensaje = await promesa;
      console.log(mensaje);
    } catch (error) {
      console.error(error);
    }
  }
  imprimirResultado();
  
  console.log('--- Ejercicio 3 ---');
  function saludar(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === 'Hola') {
          resolve("Hola, mundo");
        } else {
          reject("No es correcto");
        }
      }, 2000);
    });
  }
  saludar('Hola').then((mensaje1) => {
    console.log(mensaje1);
  }).catch((error1) => {
    console.error(error1);
  });
  
  console.log('--- Ejercicio 6 ---');
  let promesa1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolviendo promesa1");
    }, 2000);
  });
  
  let promesa2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolviendo promesa2");
    }, 3000);
  });
  
  Promise.all([promesa1, promesa2])
    .then((resultados) => {
      console.log(resultados);
    })
    .catch((error) => {
      console.error(error);
    });