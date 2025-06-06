"use strict";

const myLibrary = [];
let id = Symbol("The id of this book");

function Book(name, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the new operator to call the constructor");
  }

  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read === "true" ? true : false;
  this[id] = crypto.randomUUID();
  this.readText = () => {
    return this.read ? "Already read" : "Not read";
  };
}

function addBookToLibrary(name, author, pages, read) {
  let newBook = new Book(name, author, pages, read);

  myLibrary.push(newBook);
}

function displayLibrary() {
  myLibrary.forEach((element) => {
    console.log(element);
  });
}

function deleteBook(bookId) {
  const bookIndex = myLibrary.findIndex((book) => book[id] === bookId);

  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    displayBooks();
  }
}

function changeBookStatus(bookId) {
  const bookIndex = myLibrary.findIndex((book) => book[id] === bookId);

  myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
  displayBooks();
}

function addDeleteButtonListeners(deleteButton) {
  deleteButton.addEventListener("click", () => {
    const bookCard = deleteButton.parentElement.parentElement;
    const bookId = bookCard.getAttribute("data-id");

    deleteBook(bookId);
  });
}

function addChangeStatusListeners(changeStatus) {
  changeStatus.addEventListener("click", () => {
    const bookCard = changeStatus.parentElement.parentElement;
    const bookId = bookCard.getAttribute("data-id");

    changeBookStatus(bookId);
  });
}

function displayBooks() {
  library.innerHTML = "";

  if (myLibrary.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No books in your library";
    library.appendChild(emptyMessage);
  }

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList = "book-card";
    bookCard.setAttribute("data-id", book[id]);

    const title = document.createElement("h2");
    title.textContent = book.name;

    const author = document.createElement("p");
    author.textContent = "Author : " + book.author;

    const pages = document.createElement("p");
    pages.textContent = "Pages : " + book.pages;

    const readStatus = document.createElement("p");
    readStatus.textContent = "Status : " + book.readText();

    const deleteButton = document.createElement("div");
    deleteButton.classList = "delete-button";
    deleteButton.textContent = "Delete";

    const row = document.createElement("div");
    row.classList = "row";

    const changeStatus = document.createElement("div");
    changeStatus.classList = "change-status-button";
    changeStatus.textContent = "Status";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readStatus);
    row.appendChild(deleteButton);
    row.appendChild(changeStatus);
    bookCard.appendChild(row);

    library.appendChild(bookCard);
    addDeleteButtonListeners(deleteButton);
    addChangeStatusListeners(changeStatus);
  });
}

function getImg(event) {
  if (event.target.files.length > 0) {
    return URL.createObjectURL(event.target.files[0]);
  }
}

const openDialog = document.querySelector("#newBook");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector("dialog button");
const confirmBtn = document.querySelector("#confirmBtn");
const library = document.querySelector("#library");

var bookName = document.querySelector("#name");
var authorName = document.querySelector("#author");
var pagesNumber = document.querySelector("#pages");
var readBook = document.getElementsByName("read-state");
var deleteButtons = document.querySelectorAll(".delete-button");

if (myLibrary.length === 0) {
  const emptyMessage = document.createElement("p");
  emptyMessage.textContent = "No books in your library";
  library.appendChild(emptyMessage);
}

openDialog.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  var isRead = false;
  readBook.forEach((element) => {
    if (element.checked) return (isRead = element.value);
  });

  if (bookName.value && authorName.value && pagesNumber.value) {
    addBookToLibrary(
      bookName.value,
      authorName.value,
      pagesNumber.value,
      isRead,
    );
    alert("Added");
  }

  displayBooks();
  bookName.value = "";
  authorName.value = "";
  pagesNumber.value = "";
  isRead = false;
});

//CLI TEST
displayLibrary();
