class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  info() {
    let read = this.isRead ? "has been read" : "has not been read";
    return `${this.title} by ${this.author} is ${this.pages} pages long and ${read}.`;
  }
}

class Library {
  library = [];

  addBook(book) {
    this.library.push(book);
  }

  createRow(book) {
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
    const buttons = document.createElement("td");
    const index = this.library.indexOf(book); //not used?
    buttons.innerHTML = `<button class="toggleRead">Read</button><button class="remove">Remove</button>`;
    tableRow.appendChild(buttons);
  }

  clearList() {
    const header = document.getElementById("book-list").firstElementChild;
    while (header.nextSibling) {
      document.getElementById("book-list").removeChild(header.nextSibling);
    }
  }

  display() {
    this.clearList();
    for (const element of this.library) {
      this.createRow(element);
    }

    const btnRemove = document.querySelectorAll(".remove");

    btnRemove.forEach((button, index) => {
      button.addEventListener("click", () => {
        this.removeBook(index);
      });
    });

    const btnRead = document.querySelectorAll(".toggleRead");

    btnRead.forEach((button, index) => {
      button.addEventListener("click", () => {
        this.toggleRead(index);
      });
    });
  }

  clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#isRead").checked = false;
  }

  removeBook(index) {
    this.library.splice(index, 1);
    this.display();
  }

  toggleRead(index) {
    if (this.library[index].isRead) {
      this.library[index].isRead = false;
    } else this.library[index].isRead = true;
    this.display();
  }
}

const library = new Library();

library.display();

const btnAddBook = document.querySelector("#add-book");

btnAddBook.addEventListener("click", (event) => {
  event.preventDefault();
  const newTitle = document.querySelector("#title");
  const newAuthor = document.querySelector("#author");
  const newPages = document.querySelector("#pages");
  const newIsRead = document.querySelector("#isRead").checked;
  const newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPages.value,
    newIsRead
  );

  library.addBook(newBook);
  library.display();
  library.clearForm();
});
