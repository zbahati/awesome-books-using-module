import { DateTime } from '../node_modules/luxon/src/luxon.js';

const time = document.getElementById('date_time');
const dt = DateTime.local();
const formattedDate = dt.toFormat("MMMM dd'th 'yyyy', 'hh:mm:ss a");
time.innerHTML = ` ${formattedDate}`;