import Book from './book';
import UI from './ui';

document.addEventListener('DOMContentLoaded', function(e) {
  const form = document.getElementById('book-form');
  form.addEventListener('submit', formSubmit);
})

const formSubmit = (e) => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const isbn = document.getElementById('isbn');
  const book = new Book(title.value, author.value, isbn.value);
  const ui = new UI();
  ui.displayMessage('Book added', 'alert success');
  ui.addBookToList(book);

  const deleteLink = document.querySelector('.delete-book');
  if (deleteLink) {
    deleteLink.addEventListener('click', removeBookFromList);
  }

  e.preventDefault();
}

const removeBookFromList = (e) => {
  const ui = new UI();
  const trId = event.target.parentNode.id;
  ui.deleteBook(trId);
  ui.displayMessage('Book deleted', 'alert success');

  e.preventDefault();
  return false;
}