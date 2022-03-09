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
  const ul = document.createElement("ul");

  ul.innerHTML = `<li>${book.title}</li>`;
  displayList.appendChild(ul);
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
