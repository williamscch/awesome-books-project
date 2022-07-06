export const getBooks = () => {
  let booksArray;
  if (localStorage.getItem('books') === null) {
    booksArray = [];
  } else {
    booksArray = JSON.parse(localStorage.getItem('books'));
  }
  return booksArray;
};

export const addBookStorage = (book) => {
  const booksArray = getBooks();
  booksArray.push(book);
  localStorage.setItem('books', JSON.stringify(booksArray));
};

export const removeBookStorage = (bookTitle) => {
  let booksArray = getBooks();
  booksArray = booksArray.filter((book) => book.title !== bookTitle);
  localStorage.setItem('books', JSON.stringify(booksArray));
};
