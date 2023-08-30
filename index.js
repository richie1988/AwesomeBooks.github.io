import BookManager from './modules/bookManager.js';
import BookForm from './modules/bookForm.js';
import ContentSections from './modules/contentSections.js';
import updateDate from './modules/dateUpdater.js'; // Import the updateDate function

document.addEventListener('DOMContentLoaded', () => {
  const bookManager = new BookManager();
  const bookForm = new BookForm(bookManager);
  const contentSections = new ContentSections(bookManager);

  // Display the books AFTER the form and content sections
  const displayBooks = () => {
    bookManager.displayBooks();
  };

  bookForm.addForm.addEventListener('submit', displayBooks); // Use addForm here
  contentSections.showContent(contentSections.listContent);

  contentSections.initComplete(displayBooks); // Call displayBooks here
  this.displayBooks();
});

// Call updateDate and set up the interval
updateDate();
setInterval(updateDate, 60000);
