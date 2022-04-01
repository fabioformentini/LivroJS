//*primeira forma de criar um objeto
var obj = new Object();

//console.log(obj);

//* Segunda forma de criar um objeto 
obj2 = {
    name: {
        first: 'Fábio',
        last: 'Formentini'
    },
    naturalidade: 'Brasileiro'
};
//console.log(obj2);

//* Criação de uma classe que representa um livro
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
//? Instanciando a classe criada:
var book = new Book('Minutos de Sabedoria', '200', '102030');
console.log(book);


//* Primeira forma de declarar um método de uma função
Book.prototype.printTitle = function(){
    console.log('Título: ',this.title);
}
book.printTitle();

//! Estudar e entender sobre prototypes

