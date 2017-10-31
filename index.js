// Funcao
function ehPar(numero) {
  if (numero % 2 === 0) {
    return true;
  }
  
  return false;
}

console.log(ehPar(2));
console.log(ehPar(3));

// loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let arr = ['Teste', 1, 2, 3, 'Olá'];
for (let v of arr) {
  console.log(v);
}

arr = [...'Boa Noite'];
for (let v of arr) {
  console.log(v);
}

// Classes
var Jedi = require('./jedi.model');
var Sith = require('./sith.model');

let yoda = new Jedi('Yoda');
console.log(String(yoda));
console.log(yoda);

let maul = new Sith('Darth Maul');
console.log(String(maul));





// Exercicio
var Triangulo = require('./triangulo.model');
let tri1 = new Triangulo([2,3,4]);
console.log(String(tri1));

var Retangulo = require('./retangulo.model');
let ret1 = new Retangulo([2,4]);
console.log(String(ret1));

