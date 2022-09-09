function diagonalDifference(arr) {
    const tamanho = arr.length;
    let sum1 = 0;
    let sum2 = 0;
    let resultado;
    for (let i = 0; i < tamanho; i++) {
        sum1 += arr[i][i]
        sum2 += arr[tamanho -1 -i][i]
    }
    resultado = sum1 - sum2
    return resultado < 0 ? resultado * -1 : resultado;
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])