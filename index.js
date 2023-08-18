const addForm = document.querySelector('.add-btn');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const bookList = document.querySelector('#book_Lists');
const books = JSON.parse(localStorage.getItem('books')) || [];

//  to remove books from  the books lists and localstorage
function removeBook(index) {
  books.splice(index, 1);
  updateDisplay();
}
// function to display books
function displayBooks() {
  bookList.innerHTML = books.map(function (book, index) {
    return `
      <li>
        ${book.title} by ${book.author}
        <button class="remove-btn" data-index="${index}">Remove</button>
      </li>
    `;
  }).join('');
}

function addBook(title, author) {
  if (title.trim() === '' || author.trim() === '') return;
  books.push({ title, author });
  updateDisplay();
}

function updateDisplay() {
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}
// function to handle events of books
function handleRemoveButtonClick(e) {
  if (e.target.classList.contains('remove-btn')) {
    const index = parseInt(e.target.getAttribute('data-index'));
    removeBook(index);
  }
}

addForm.addEventListener('click', function (e) {
  e.preventDefault();
  addBook(titleInput.value, authorInput.value);
  titleInput.value = authorInput.value = '';
});

bookList.addEventListener('click', handleRemoveButtonClick);

window.onload=displayBooks();
