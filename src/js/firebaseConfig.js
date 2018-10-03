import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBsndGqy5z7GrZcvFr65N9XppWGxX5MsHc",
  authDomain: "book-2aebd.firebaseapp.com",
  databaseURL: "https://book-2aebd.firebaseio.com",
  projectId: "book-2aebd",
  storageBucket: "book-2aebd.appspot.com",
  messagingSenderId: "669158963997"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;