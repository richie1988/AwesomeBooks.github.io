export default class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = (title, author) => {
    if (title.trim() === '' || author.trim() === '') {
      return;
    }

    const newBook = {
      title,
      author,
    };

    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  };

  removeBook = (index) => {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  };

  displayBooks = () => {
    const bookList = document.querySelector('#book-list');
    bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.textContent = `${book.title} By ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });

      li.appendChild(removeButton);
      bookList.appendChild(li);
    });
  };
}