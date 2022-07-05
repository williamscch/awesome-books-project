import Storage from './classstorage.js';
import { title, author } from './variables-fullpage.js';

export default class Display {
    static displayList = () => {
      const booksArray = Storage.getBooks();
      booksArray.forEach((book) => Display.addBook(book));
    }

    static addBook = (book) => {
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
    }

    static removeBook = (eTarget) => {
      if (eTarget.classList.contains('delete')) {
        eTarget.parentElement.remove();
      }
    }

    static clearInputFields = () => {
      title.value = '';
      author.value = '';
    }
}