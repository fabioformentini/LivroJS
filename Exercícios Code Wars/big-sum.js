function aVeryBigSum(ar) {
    return ar.reduce((elementoAtual, total)=> elementoAtual+total)
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
