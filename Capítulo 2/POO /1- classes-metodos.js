class Book{

    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn(){
        console.log(this.isbn)
    }
}

let book = new Book('Estrutura de dados', 250, 2020122760250);
console.log(book.title);

book.title = 'Estrutura de dados e Algoritmos';
console.log(book.title);

class Gatos{
    constructor(nome, cor, idade) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }

}

let astrix = new Gatos('Astrix', 'preto', 1);
console.log('Gato1: ', astrix);
