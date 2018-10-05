export default class UI {
  constructor() {
  }

  displayMessage(mssg, className) {
    const bookEntry = document.getElementById('book-entry');
    const divAlert = document.createElement('div');
    divAlert.setAttribute('class', className);
    divAlert.textContent = mssg;
    bookEntry.insertBefore(divAlert, bookEntry.firstChild);

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

  // Given a firebase dataSnapshot object that contains all found results, iterate through and render them.
  displayBooks(firebaseObj) {
    // Iterate through object properties. 
    for (let index in firebaseObj) {
      const bookList = document.getElementById('db-book-list');
      const divBook = document.createElement('div');
      divBook.setAttribute('class', 'four columns');
      divBook.innerHTML = `<h2>${firebaseObj[index]._title}</h2><p>Author: ${firebaseObj[index]._author}</p>`;
      bookList.appendChild(divBook);
    }
    document.getElementById('loader').remove();

  }

  deleteBook(bookId) {
    document.getElementById(bookId).remove();
  }
}
