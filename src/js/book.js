export default class Book {
  constructor(title, author, isbn) {
    this._id = Book.incrementId();
    this._title = title;
    this._author = author;
    this._isbn = isbn;
  }

  // Autoincrement book id.
  static incrementId() {
    if (!this.latestId) {
      this.latestId = 1;
    }
    else {
      this.latestId++;
    }
    return this.latestId;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get isbn() {
    return this._isbn;
  }
}
