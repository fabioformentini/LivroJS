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

const mensagem = () => {
    console.log("Teste de callback");
}
const array1 = [1, 2, 3]

let total1 = array1.forEach( el => {
    el * 2;
});

let total2 = array1.map( el => {
    el * 2;
})

function multiplicarElementos(arr){
    let total = 0;
    arr.forEach(el => {
        total += el * 2;
    });
    return total;
}

function multiplicarElementos2(arr){
    let total = [];
    arr.map(el =>{
        total.push(el*2);
    });
    return total;
}

arrayMultiplicado = multiplicarElementos(array1);
arrayMultiplicado2 = multiplicarElementos2(array1);

console.log(arrayMultiplicado);
console.log(arrayMultiplicado2);

setTimeout(mensagem, 3000);

