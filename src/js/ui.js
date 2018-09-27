export default class UI {
  constructor() {
  }

  displayMessage(mssg, className) {
    const container = document.getElementsByClassName('container');
    const divAlert = document.createElement('div');
    divAlert.setAttribute('class', className);
    divAlert.textContent = mssg;
    container[0].insertBefore(divAlert, container[0].firstChild);

    // Remove message after 3 seconds.
    const alertInterval = setInterval(function() {
      const alertDisplay = document.querySelector('.alert');
      // If we have a div.alert remove it and exit the setInterval loop.
      if (alertDisplay !== undefined) {
        document.querySelector('.alert').remove();
        clearInterval(alertInterval);
      }
    }, 3000);
  }

  addBookToList(book) {
    const bookList = document.getElementById('book-list');
    const tr = document.createElement('tr');
    tr.setAttribute('id', `book-${book.id}`);
    const rowContent = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><a class="delete-book" href="#">Delete from list</a>`;
    tr.innerHTML = rowContent;
    bookList.appendChild(tr);
  }

  deleteBook(bookId) {
    document.getElementById(bookId).remove();
  }
}
