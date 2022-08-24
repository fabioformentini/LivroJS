function multiplicarElementos(arr: number[]): number {
    let total = 0;
    arr.forEach((el: number) => {
        el = 1;
    });
    console.log(arr);
    return total;
}

function multiplicarElementos2(arr: number[]): number{
    let total = 0;
    let respostas: number[] = arr.map((el: number) =>{
        return el * 2;
    });
    console.log([arr, respostas]);
    return total;
}

let array1: number[] = [1,2,3];
let array2: number[] = [1,2,3];

let arrayMultiplicado1: number = multiplicarElementos(array1);
let arrayMultiplicado2: number = multiplicarElementos2(array1);

console.log(arrayMultiplicado1);
console.log(arrayMultiplicado2);

// ====================================================================================

// let vetor = [{usuario: 'fabio'}, {usuario: 'victor'}, {usuario: 'leo'}]
// let vetorMudado = vetor.map((el: {usuario: string}) => {
//     // el.usuario = 'matheus';
//     // el['matricula'] = 1234567;
//     return {usuario: 'matheus', matricula: 123456};
// });
// console.log([vetor, vetorMudado])
// console.log(vetor == vetorMudado);