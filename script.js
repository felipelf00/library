let library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  let read = this.isRead ? "has been read" : "has not been read";
  return `${this.title} by ${this.author} is ${this.pages} pages long and ${read}.`;
};

//example book
const infiniteJest = new Book(
  "Infinite Jest",
  "David Foster Wallace",
  1000,
  true
);

const grandeSertao = new Book(
  "Grande Sertão Veredas",
  "Guimarães Rosa",
  720,
  true
);

function addBook(book) {
  library.push(book);
}

//example test
addBook(infiniteJest);
addBook(grandeSertao);

function createRow(book) {
  const table = document.getElementById("book-list");
  const tableRow = document.createElement("tr");
  table.appendChild(tableRow);
  const title = document.createElement("td");
  title.textContent = `${book.title}`;
  tableRow.appendChild(title);
  const author = document.createElement("td");
  author.textContent = `${book.author}`;
  tableRow.appendChild(author);
  const pages = document.createElement("td");
  pages.textContent = `${book.pages}`;
  tableRow.appendChild(pages);
  const read = document.createElement("td");
  if ((book.isRead = "true")) {
    read.textContent = "✓";
  } else read.textContent = "✗";
  tableRow.appendChild(read);
}

function display() {
  for (element of library) {
    createRow(element);
  }
}

display();
