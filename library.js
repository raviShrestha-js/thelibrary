// array of objects
const myLibrary = [
  {
    title: "The Hobbit",
    author: "Ravi",
    numberOfPages: 234,
  },
  {
    title: "The Avengers",
    author: "Steeve",
    numberOfPages: 1024,
  },
];

function books(title, author, numberOfPages) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;

  //   this.isBookRead = isBookRead;
}
function displayBooks() {
  myLibrary.forEach((book) => addToBookList(book));
}

function addToBookList(book) {
  const displayList = document.querySelector(".list");
  const card = document.createElement("div");

  card.innerHTML = `
  <button class= "delete">X</button>
  <h1>${book.title}</h1> <br>
  <h2>${book.author}</h2><br>
  <h2>${book.numberOfPages}</h2>`;
  displayList.appendChild(card);
}

function removeBook(target) {
  if (target.classList.contains("delete")) {
    target.parentElement.remove();
  }
}

const form = document.getElementById("book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent form from being submitted
  //getting values from the form
  const bookTitle = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const numberOfPages = document.getElementById("num").value;
  //calling object constructor
  const book = new books(bookTitle, author, numberOfPages);
  addToBookList(book);
  form.reset();
});

document.addEventListener("DOMContentLoaded", displayBooks);

document
  .querySelector(".list")
  .addEventListener("click", (e) => removeBook(e.target));
