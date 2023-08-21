export default class BookForm {
  constructor(bookManager) {
    this.bookManager = bookManager;
    this.addForm = document.querySelector('#books');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');

    this.addForm.addEventListener('submit', this.handleFormSubmit);
  }

    handleFormSubmit = (e) => {
      e.preventDefault();
      const title = this.titleInput.value;
      const author = this.authorInput.value;
      this.bookManager.addBook(title, author);
      this.titleInput.value = '';
      this.authorInput.value = '';
    };
}