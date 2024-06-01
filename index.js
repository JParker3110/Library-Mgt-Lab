"use strict";

function Books(title, author, isbn, availableCopies) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.availableCopies = availableCopies;

  this.borrowBook = function () {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      console.log("You have borrowed this book");
    }
  };

  this.returnBook = function () {
    this.availableCopies++;
    console.log("You have returned this book");
  };
}

function Library(name, books) {
  this.name = name;
  this.books = books;

  this.addBook = function (book) {
    this.books.push(book);
  };

  this.removeBook = function (isbn) {
    this.books.splice(this.books.indexOf(isbn), 2);
  };

  const findBookByTitle = [book1, book2];
  findBookByTitle.forEach((book) => {
    console.log(book.title);
  });

  this.listAllBooks = function () {
    return this.books.map((book) => book.map);
  };
}

const book1 = new Books(
  "Realtionship Goals",
  "Pastor Micheal Todd",
  "978-0-59319-257-3",
  6,
);
const book2 = new Books(
  "Power Moves",
  "Sarah Jake Roberts",
  "978-0785291909",
  10,
);

const library = new Library("Books", [book1, book2]);

// find a book by title

// const powerMoves = library.findBookByTitle("Power Moves")

//console.log powerMoves
//console.log(book1,book2)
//book1.borrowBook()
//book2.returnBook()
//library.addBook(book1)
//library.removeBook(book2.isbn) // pass in an isbn of a book obj-works
console.log(library);

library.listAllBooks(Books);
