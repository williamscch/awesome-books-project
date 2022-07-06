import { getBooks } from './classstorage.js';
import { title, author } from './variables-fullpage.js';

export const addBook = (book) => {
  const list = document.getElementById('list');
  const bookCard = document.createElement('ul');
  const title = document.createElement('li');
  const author = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.classList.add('delete');

  title.innerHTML = book.title;
  author.textContent = `by ${book.author}`;
  removeButton.textContent = 'Remove';

  list.appendChild(bookCard);
  bookCard.append(title, author, removeButton);
};

export const displayList = () => {
  const booksArray = getBooks();
  booksArray.forEach((book) => addBook(book));
};

export const removeBook = (eTarget) => {
  if (eTarget.classList.contains('delete')) {
    eTarget.parentElement.remove();
  }
};

export const clearInputFields = () => {
  title.value = '';
  author.value = '';
};
