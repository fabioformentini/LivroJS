//? Funções de setas são utilizadas para simplificar a sintaxe das funções na ES2015
// Exemplo
var circleAreaES5 = function (r){
    var PI = 3.14;
    var area = PI * r * r;
    return area;
}
console.log(circleAreaES5(2))

//? Exemplo Utilizando Arrow Function
const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
}
console.log(circleArea(2));

//? Caso a função tenha apenas uma instrução , podemo utilizar uma versão mais simples, omitindo a palavra reservada
//? return e as chaves

// Exemplo
const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));

// Exemplo com funções que não recebem argumentos
const hello = ()=> console.log('Hello');
hello();


