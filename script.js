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
// const infiniteJest = new Book(
//   "Infinite Jest",
//   "David Foster Wallace",
//   1000,
//   true
// );

// const grandeSertao = new Book(
//   "Grande Sertão Veredas",
//   "Guimarães Rosa",
//   720,
//   false
// );

function addBook(book) {
  library.push(book);
}

//example test
// addBook(infiniteJest);
// addBook(grandeSertao);

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
  if (book.isRead) {
    read.textContent = "✓";
  } else read.textContent = "✗";
  tableRow.appendChild(read);
}

function clearList() {
  const header = document.getElementById("book-list").firstElementChild;
  while (header.nextSibling) {
    document.getElementById("book-list").removeChild(header.nextSibling);
  }
}

function display() {
  clearList();
  for (element of library) {
    createRow(element);
  }
}

display();

function clearForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#isRead").checked = false;
}

const btnAddBook = document.querySelector("#add-book");

btnAddBook.addEventListener("click", (event) => {
  event.preventDefault();
  const newTitle = document.querySelector("#title");
  const newAuthor = document.querySelector("#author");
  const newPages = document.querySelector("#pages");
  const newIsRead = document.querySelector("#isRead").checked;

  addBook(new Book(newTitle.value, newAuthor.value, newPages.value, newIsRead));
  display();
  clearForm();
});
