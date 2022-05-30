//? Desestruturação de arrays

let [x, y] = ['a', 'b'];

// O código anterior é o mesmo que o seguinte:
let x = 'a';
let y = 'b';

//? Fazendo SWAP sem utilizar variáveis temporárias
[a, b] = [b, a];

// O código anterior é o mesmo que:
var temp = a;
a = b;
b = temp;

//? Abreviação de propriedades
let [p, q] = ['a', 'b'];
let obj = {p, q};
console.log(obj); // {p: "a", q: "b"}

// O código anteior é o mesmo que:
var p = 'a';
var q = 'b';
var obj2 = {p: p, q: q};
console.log(obj2); // {p: "a", q: "b"}
