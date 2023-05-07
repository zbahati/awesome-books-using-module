import Storage from './bookStorage.js';
import UI from './userInterface.js';

export default class BookList {
  constructor() {
    this.ui = new UI();
    this.storage = Storage;
    this.books = this.storage.getBooks() || [];
    this.ui.setAddBookHandler((title, author) => this.addBook(title, author));
    this.ui.setRemoveBookHandler((book) => this.removeBook(book));
    this.ui.displayBooks(this.books);
  }

  addBook = (title, author) => {
    this.books.push({ title, author });
    this.storage.setBooks(this.books);
    this.ui.displayBooks(this.books);
  }

 display = () => {
   this.ui.displayBooks(this.books);
 }

  removeBook = (book) => {
    this.books = this.books.filter((b) => b !== book);
    this.storage.setBooks(this.books);
    this.ui.displayBooks(this.books);
  }
}
