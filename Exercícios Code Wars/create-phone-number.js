function createPhoneNumber(numbers){
    const inicio = numbers[0]+''+numbers[1]+''+numbers[2];
    const meio = numbers[3]+''+numbers[4]+''+numbers[5];
    const fim = numbers[6]+''+numbers[7]+''+numbers[8]+''+numbers[9];
    const numeroCompleto = `(${inicio}) ${meio}-${fim}`;
    console.log(numeroCompleto);
    return numeroCompleto;
}
createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);


function createPhoneNumber2(numbers){
    var format = "(xxx) xxx-xxxx";

    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }

    return format;
}