import { DateTime } from 'luxon';
import BookList from './modules/constructors.js';
import { showBooks } from './modules/navigation.js';

const dt = DateTime.local();
const formattedDate = dt.toFormat('MMMM dd yyyy, h:mm:ss a');

const time = document.getElementById('date_time');
time.innerHTML = ` ${formattedDate}`;

const lists = new BookList();
lists.display();
showBooks();
