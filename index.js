import BookManager from './modules/bookManager.js';
import BookForm from './modules/bookForm.js';
import ContentSections from './modules/contentSections.js';
import { updateDate } from './modules/dateUpdater.js'; // Import the updateDate function

/* eslint-disable no-new */
document.addEventListener('DOMContentLoaded', () => {
  const bookManager = new BookManager();
  new BookForm(bookManager);
  new ContentSections(bookManager);

  bookManager.displayBooks();
});

updateDate();
setInterval(updateDate, 60000);
