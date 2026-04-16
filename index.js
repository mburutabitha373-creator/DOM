const bookStoreTitle = document.getElementById("header");
const bookList = document.getElementById("book-list");

bookStoreTitle.textContent = bookStore.name;

bookStore.books.forEach((book) => {
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = "https://via.placeholder.com/150";
  bookImage.alt = book.title;

  // IMPORTANT: append in correct structure
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  bookList.appendChild(bookContainer);
});