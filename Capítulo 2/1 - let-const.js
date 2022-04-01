//? Let: substitui o Var, que são variáveis que podem sofrer alterações em seus valores
let book = 'Estrutura de dados';
console.log(book);
book = 'Algoritmos';
console.log(book)

//? Const: uma variável definida como const tem um valor somente para leitura, ou seja, constante.
const PI = 3.141593;
//PI = 3.0; //! não é possível reatribuir o valor
console.log(PI)

//? Const: variáveis constantes em objetos
const jsFramework = {
    name: 'Angular'
}
jsFramework.name = 'VueJS'; //Em caso de objetos, uma const permite que as propriedades do objeto recebam novos valores

//! Não é possível atribuir uma nova referência ao objeto, apenas alterar os valores de suas propriedades
// jsFramework =
//     name: 'React'
//}








