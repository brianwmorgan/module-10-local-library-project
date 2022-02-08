function findAccountById(accounts, id) {
  for (let i = 0 ; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i]
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort( (account1, account2) => 
    account1.name.last > account2.name.last ? 1 : -1 );
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0
  books.forEach( (book) => 
    {for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) {
        numberOfBorrows += 1;
      }
    }
  })
  return numberOfBorrows
}

//helper function
function getCheckedOutBooks(account, books) {
  const booksCheckedOut = [];
  books.forEach(book => {
    let borrow = book.borrows;
    if (borrow[0].id === account.id
      && borrow[0].returned === false) {
      booksCheckedOut.push(book);
    };
  });
  return booksCheckedOut;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOut = getCheckedOutBooks(account, books);
  booksCheckedOut.forEach(book => {
    let theAuthor = authors.find((author) => author.id === book.authorId);
    book["author"] = theAuthor;
  })
  return booksCheckedOut;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
