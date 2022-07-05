export default class Storage {
    static getBooks = () => {
      let booksArray;
      if (localStorage.getItem('books') === null) {
        booksArray = [];
      } else {
        booksArray = JSON.parse(localStorage.getItem('books'));
      }
      return booksArray;
    }

    static addBookStorage = (book) => {
      const booksArray = Storage.getBooks();
      booksArray.push(book);
      localStorage.setItem('books', JSON.stringify(booksArray));
    }

    static removeBookStorage = (bookTitle) => {
      let booksArray = Storage.getBooks();
      booksArray = booksArray.filter((book) => book.title !== bookTitle);
      localStorage.setItem('books', JSON.stringify(booksArray));
    }
}
