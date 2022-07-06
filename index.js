import Classbook from './modules/classbook.js';

import { addBookStorage, removeBookStorage } from './modules/classstorage.js';

import {
  addBook,
  displayList,
  removeBook,
  clearInputFields,
} from './modules/classdisplay.js';

import {
  title,
  author,
  button,
  addNew,
  form,
  main,
  showMain,
  showContact,
  contact,
  date,
} from './modules/variables-fullpage.js';

import { DateTime } from './node_modules/luxon/src/luxon.js';

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Classbook(title.value, author.value);
  addBook(book);
  addBookStorage(book);
  clearInputFields();
});

document.getElementById('list').addEventListener('click', (e) => {
  removeBook(e.target);

  removeBookStorage(e.target.parentElement.firstChild.textContent);
});

displayList();

// full page events

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

const now = DateTime.local().toLocaleString(DateTime.DATETIME_MED);
date.innerHTML = now;
