// array of objects
const myLibrary = [];
//object constructor
function books(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

function displayBooks() {
  myLibrary.forEach((book) => addToBookList(book));
}

function addToBookList(book) {
  const displayList = document.querySelector(".list");
  const card = document.createElement("div");

  card.innerHTML = `
  <button class= "delete">X</button>
  <h1>Book: ${book.title}</h1> <br>
  <h2>Author: ${book.author}</h2><br>
  <h2>Total Pages: ${book.numberOfPages}</h2><br>
  <h3>${book.isRead}</h3>`;
  displayList.appendChild(card);
}

//targeting the className 'delete' to remove book
function removeBook(target) {
  if (target.classList.contains("delete")) {
    target.parentElement.remove();
  }
}

const form = document.getElementById("book-form");
//listening to the submit event and adding book to list
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent form from being submitted
  //getting values from the form
  const bookTitle = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const numberOfPages = document.getElementById("num").value;
  const checked = document.getElementById("read").checked;

  if (checked === true) {
    isRead = "This book is Read";
  } else {
    isRead = "You haven't Read this book";
  }
  //calling object constructor
  const book = new books(bookTitle, author, numberOfPages, isRead);
  addToBookList(book);
  form.reset();
  showAlert("Book Added", "success");
});

document.addEventListener("DOMContentLoaded", displayBooks);

document.querySelector(".list").addEventListener("click", (e) => {
  removeBook(e.target);
  showAlert("Book Removed", "remove");
});

//display Alert message
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `${className}`;
  div.appendChild(document.createTextNode(`${message}`));
  const container = document.querySelector(".form-container");
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector(`.${className}`).remove(), 3000);
}
