//? Com templates literais é possível criar string sem a necessidade de concatenar valores

const book = {
    name: 'Minutos de Sabedoria'
};
console.log('Estou lendo ' + book.name + '.\n e esta é uma nova linha\n e essa também')

//? Reproduzindo o mesmo exemplo utilizando template strings

console.log(`Estou lendo ${book.name}.,
    e esta é uma nova linha
        e essa também`);
