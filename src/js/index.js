import Book from './book';
import UI from './ui';
import firebaseApp from './firebaseConfig';

document.addEventListener('DOMContentLoaded', function(e) {
  const form = document.getElementById('book-form');
  form.addEventListener('submit', formSubmit);
  const dbbooks = getDBbooks(2); // get all books for user 2.
})

const formSubmit = (e) => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const isbn = document.getElementById('isbn');
  const uid = document.getElementById('uid');
  const book = new Book(title.value, author.value, isbn.value);
  insertDB(book, uid.value);

  const deleteLink = document.querySelector('.delete-book');
  if (deleteLink) {
    deleteLink.addEventListener('click', removeBookFromList);
  }

  e.preventDefault();
}

const insertDB = (book, uid) => {
  const ref = firebaseApp.db.ref('books/' + uid);
  ref.push().set(book)
        .then(function(snapshot) {
          const ui = new UI();
          ui.displayMessage('Book added', 'alert success');
          ui.addBookToList(book);
          // console.log('success');
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

const getDBbooks = (uid) => {
  var fref = firebaseApp.db.ref().child('books/' + uid);
  fref.on('value', function(datasnapshot) {
    document.getElementById('db-book-list').innerText = datasnapshot.val();
    console.log(datasnapshot.val());
  })
  

  // var user = firebase.auth().currentUser;
  // commentsRef.orderByChild("owner/uid").equalTo(user.uid).on("child_added", function (snap) {
  //   console.log(snap)
  // });
}


// @todo: subsequent calls to this function do not do anything; first time a boog gets deleted from list, but after that nothing happens when clicking...
const removeBookFromList = (e) => {
  const ui = new UI();
  const trId = event.target.parentNode.id;
  ui.deleteBook(trId);
  ui.displayMessage('Book deleted', 'alert success');

  e.preventDefault();
  return false;
}