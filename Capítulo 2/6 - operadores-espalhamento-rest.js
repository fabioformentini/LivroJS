//? EcmaScript 6: spread operator ('...')
function sum (x = 1, y = 2, z = 3) {
    return x + y + z;
}

let params = [3, 4, 6];
console.log(sum(...params));

let numbers = [1, 2, ...params]; //pushing values into array
console.log(numbers);

//? EcmaScript 6: rest parameter ('...')
function restParamaterFunction (x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, "hello", true, 7)); //size of a = 3 -> output 9;

//? code above is the same as ES5:
function restParamaterFunction2 (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParamaterFunction2(1, 2, "hello", true, 7));


//* Testes
var frutas = ['banana', 'morango', 'uva'];
console.log(...frutas);
