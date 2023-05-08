import BookList from './modules/constructors.js';
import { showBooks } from './modules/navigation.js';

const lists = new BookList();
lists.display();
showBooks();
