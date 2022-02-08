function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i]
    }
  }
}

function findBookById(books, id) {
  const matchingBook = books.find( (book) => book.id === id);
  return matchingBook;
}

function partitionBooksByBorrowedStatus(books) {
  const booksCheckedOut = [];
  const booksReturned = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      booksCheckedOut.push(books[i]);
    } else {
      booksReturned.push(books[i]);
    }
  };
  booksByStatus = [];
  booksByStatus.push(booksCheckedOut);
  booksByStatus.push(booksReturned);
  return booksByStatus;
}


function getBorrowersForBook(book, accounts) {
  let borrowedBooks = [];
  const borrowed = book.borrows;
  borrowed.forEach( (book) => {
    let matchingAccount = accounts.find( (account) =>
      account.id === book.id);
    let macthingObject = matchingAccount;
    macthingObject['returned'] = book.returned;
    borrowedBooks.push(macthingObject);
    }
  )
  let tenBorrowerAccounts = borrowedBooks.slice(0,10);
  return tenBorrowerAccounts;
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
