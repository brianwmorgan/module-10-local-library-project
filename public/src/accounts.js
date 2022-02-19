///////////////////////////////////////////////////////////////////


//you can use a for loop (see below), 
//but the .find() method is more concise and does the same thing

/*
function findAccountById(accounts, id) {
  for (let i = 0 ; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i];
    };
  };
};
*/

function findAccountById(accounts, id) {
  return accounts.find(account => id === account.id);
};


/////////////////////////////////////////////////////////////////////


// this function uses the standard .sort() syntax for ascending order
// if account1 is > account2, it will come first in the new array

function sortAccountsByLastName(accounts) {
  accounts.sort( (account1, account2) => 
    account1.name.last > account2.name.last ? 1 : -1 );
  return accounts;
};


/////////////////////////////////////////////////////////////////////


// define a new variable for the number of borrows
// for each book object, loop through all of the borrows
// if any id's in each borrows array match the given account id, add 1 to the new variable

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
  books.forEach( (book) => 
    {for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) {
        numberOfBorrows += 1;
      }
    }
  })
  return numberOfBorrows;
}


//////////////////////////////////////////////////////////////////////


// helper function
// returns a new array of all the books currently checked out by a given account id
// define a new, empty array (booksCheckedOut)
// for each book object, check if the current status is 'checked out'
//      AND if the borrower id matches the given account id
// if both conditions are met, add the whole book object to the new array
function getCheckedOutBooks(account, books) {
  const booksCheckedOut = [];
  books.forEach(book => {
    if (book.borrows[0].returned === false
      && book.borrows[0].id === account.id) {
      booksCheckedOut.push(book);
    };
  });
  return booksCheckedOut;
};

// define a new variable (booksCheckedOut) by the output of 
//    the helper function above - which is an array of checked out books
// for each book object in that array, add an "author" property that is
//    the author object in the authors dataset that matches the author id
//    in the book object


function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOut = getCheckedOutBooks(account, books);
  booksCheckedOut.forEach(book => {
    let theAuthor = authors.find((author) => author.id === book.authorId);
    book["author"] = theAuthor;
  })
  return booksCheckedOut;
};


///////////////////////////////////////////////////////////////////////


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
