// Com a ES2015 é possível definir valores default para os parâmetros das funções

function sum(x = 5, y = 25, z = 55){
    return x + y + z;
}

console.log(sum(4,2));
// 4 + 2 + 55  = 61
