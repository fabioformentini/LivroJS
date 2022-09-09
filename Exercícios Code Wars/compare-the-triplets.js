function compareTriplets(a, b) {
    const total = [0,0];
    a.forEach((elementoA, index) => {
        if (elementoA > b[index]){
            total[0]++;
        }
        if (b[index] > elementoA){
            total[1]++;
        }
    })
    return total;
}

compareTriplets([17, 28, 30], [99, 16, 8]);
