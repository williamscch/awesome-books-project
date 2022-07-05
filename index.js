/* eslint-disable max-classes-per-file */
const title = document.getElementById('title');
const author = document.getElementById('author');
const button = document.getElementById('button');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Storage {
  static getBooks() {
    let booksArray;
    if (localStorage.getItem('books') === null) {
      booksArray = [];
    } else {
      booksArray = JSON.parse(localStorage.getItem('books'));
    }
    return booksArray;
  }

  static addBookStorage(book) {
    const booksArray = Storage.getBooks();
    booksArray.push(book);
    localStorage.setItem('books', JSON.stringify(booksArray));
  }

  static removeBookStorage(bookTitle) {
    let booksArray = Storage.getBooks();
    booksArray = booksArray.filter((book) => book.title !== bookTitle);
    localStorage.setItem('books', JSON.stringify(booksArray));
  }
}

class Display {
  static displayList() {
    const booksArray = Storage.getBooks();
    booksArray.forEach((book) => Display.addBook(book));
  }

  static addBook(book) {
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

  static removeBook(eTarget) {
    if (eTarget.classList.contains('delete')) {
      eTarget.parentElement.remove();
    }
  }

  static clearInputFields() {
    title.value = '';
    author.value = '';
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Book(title.value, author.value);
  Display.addBook(book);
  Storage.addBookStorage(book);
  Display.clearInputFields();
});

document.getElementById('list').addEventListener('click', (e) => {
  Display.removeBook(e.target);
  Storage.removeBookStorage(e.target.parentElement.firstChild.textContent);
});

Display.displayList();

// full page events

const addNew = document.querySelector('.add-new');
const form = document.querySelector('.form');
const main = document.querySelector('.main');
const showMain = document.querySelector('.show-main');
const showContact = document.querySelector('.show-contact');
const contact = document.querySelector('.contact-section');

const date = document.querySelector('.date');

addNew.addEventListener('click', () => {
  if (!form.classList.contains('active')) {
    contact.classList.remove('active');
    main.classList.add('active');
    form.classList.add('active');
  }
});

showMain.addEventListener('click', () => {
  if (main.classList.contains('active')) {
    contact.classList.remove('active');
    form.classList.remove('active');
    main.classList.remove('active');
  }
});

showContact.addEventListener('click', () => {
  if (!contact.classList.contains('active')) {
    form.classList.remove('active');
    main.classList.add('active');
    contact.classList.add('active');
  }
});

date.innerHTML = Date();