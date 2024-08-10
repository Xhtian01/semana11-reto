/*
Ejercicio 1
Crear una función que tome como parámetro un arreglo de números, retornar el
promedio de todos los elementos del arreglo. */

/*const numeros = [2, 6, 1, 8];

function promedio(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  const promedio = suma / numeros.length;

  return promedio;
}

console.log(promedio(numeros));*/

/*
Ejercicio 2
Crear una función que tome como parámetro un arreglo, retornar el último
elemento del arreglo. */

/*const numeros = [4, 8, 5, 3];

function ultimoNumero(numero) {
  
  return numero[numero.length - 1];
}

alert(ultimoNumero(numeros));*/
/*return numero[3];*/

/*
Ejerciio 3
Crear una función que tome como parámetro un arreglo de números, retornar la
suma de todos los números pares. */

/*const numeros = [1, 2, 5, 8, 9, 12, 2, 3];

function sumarPares(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      suma += array[i];
    }
  }

  return suma;
}

alert(sumarPares(numeros));*/

/*
Ejercicio 4
Calcular la factorial de un número*/

/*function factorial() {
  let i = 1;
  let factorial = 1;

  while (i <= 6) {
    factorial *= i;
    i++;
  }
  return factorial;
}

alert(factorial());*/

/*
Ejercicio 5
Escriba un programa en JavaScript que itere del 1 al 15. Para cada iteración,
verifica si el número actual es impar o par, y muestra un mensaje en la
pantalla.*/

/*function verificar() {
  for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`El número ${i} es par`);
    } else {
      console.log(`El número ${i} es impar`);
    }
  }
}

console.log(verificar());*/

/*
Ejercicio 6
Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente
mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”
solo al mostrar los números indicados por el usuario*/

/*const num1 = parseInt(prompt('Ingrese el primer numero'));
const num2 = parseInt(prompt('Ingrese el segundo numero'));

for (let i = 1; i <= 50; i++) {
  if (i === num1 || i === num2) {
    console.log(`¡Lotería!`);
  } else {
    console.log(i);
  }
}*/

/*
Ejercicio 7
Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para
múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco
imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz". */

/*for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}*/

/*
Ejercicio 8
Escribe un programa que responda a un usuario que quiere comprar un helado
en una conocida marca de comida rápida, cuánto le costará en función del
topping que elija*/

/*let helado = prompt('Desea comprar un heleado con o sin topping');
let precio_helado = 50;
let topping = '';
let total = 0;

switch (helado) {
  case 'con topping':
    topping = prompt('Con cuál de los siguientes topping desea: brownie u oreo');
    switch (topping) {
      case 'brownie':
        total = precio_helado + 20;
        alert(`El costo del helado con topping de brownie es ${total} MXN`);
        break;
      case 'oreo':
        total = precio_helado + 10;
        alert(`El costo del helado con topping de oreo es ${total} MXN`);
        break;
      default:
        alert(`No tenemos ese topping, lo sentimos. El costo del helado sin topping es ${precio_helado} MXN`);
        break;
    }
    break;

  case 'sin topping':
    total = precio_helado;
    alert(`El costo del helado sin topping es ${precio_helado} MXN`);
    break;

  default:
    alert('Solamente vendemos helados');
    break;
}*/

/*
Ejercicio 9
*/

/*const programa = prompt('A cuales de los siguientes programas quiere incribirse: Course, Carrera, Master');
let beca = '';

let precio_course = 4999;
let precio_carrera = 3999;
let precio_master = 2999;

let precio_final = 0;

switch (programa) {
  case 'Course':
    beca = prompt('Cuenta con alguna de las siguientes becas: Facebook, Google, Jesua');
    switch (beca) {
      case 'Facebook':
        precio_final = (precio_course * 2 * 0.2).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
      case 'Google':
        precio_final = (precio_course * 6 * 0.15).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
      case 'Jesua':
        precio_final = (precio_course * 12 * 0.5).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
    }
    break;

  case 'Carrera':
    beca = prompt('Cuenta con alguna de las siguientes becas: Facebook, Google, Jesua');
    switch (beca) {
      case 'Facebook':
        precio_final = (precio_carrera * 2 * 0.2).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
      case 'Google':
        precio_final = (precio_carrera * 6 * 0.15).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
      case 'Jesua':
        precio_final = (precio_carrera * 12 * 0.5).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
    }
    break;
  case 'Master':
    beca = prompt('Cuenta con alguna de las siguientes becas: Facebook, Google, Jesua');
    switch (beca) {
      case 'Facebook':
        precio_final = (precio_master * 2 * 0.2).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
      case 'Google':
        precio_final = (precio_master * 6 * 0.15).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
      case 'Jesua':
        precio_final = (precio_master * 12 * 0.5).toFixed(2);
        alert(`El precio total del programa educativo elegido es $ ${precio_final} MXN`);
        break;
    }
    break;

  default:
    alert('Por favor elija algunos de los programas educativos disponibles');
}*/

/*
Ejercicio 10
*/

const vehiculo = prompt('Elija cual de los siguientes es su vehículo: coche, moto, autobus');
const km_recorrido = parseInt(prompt('Cuántos kilometros ha recorrido'));
const litros = parseInt(prompt('Cuántos litros ha consumido su vehículo'));

let precio_km = 0;
let precio_adicional = 0;
let total = 0;
let subtotal = 0;

switch (vehiculo) {
  case 'coche':
    precio_km = 0.2;
    subtotal = precio_km * km_recorrido;
    break;

  case 'moto':
    precio_km = 0.1;
    subtotal = precio_km * km_recorrido;
    break;

  case 'autobus':
    precio_km = 0.5;
    subtotal = precio_km * km_recorrido;
    break;

  default:
    alert('Vehículo no reconocido. Por favor elija entre coche, moto o autobus.');
}

if (litros <= 100) {
  total = subtotal + 5;
  alert(`El total a pagar es ${total}`);
} else {
  total = subtotal + 10;
  alert(`El total a pagar es ${total}`);
}
