///////////////////////////////////////////////////////////////////////////


// simply return the number of objects in the 'books' array by
//    utilizing the .length method

function getTotalBooksCount(books) {
  return books.length;
};


///////////////////////////////////////////////////////////////////////////


// simply return the number of objects in the 'accounts' array by
//    utilizing the .length method

function getTotalAccountsCount(accounts) {
  return accounts.length;
};


///////////////////////////////////////////////////////////////////////////


// declare a new accumulator variable (borrowed books)
// loop through the 'books' array
// if a book is currently borrowed (the first 'returned' value is 'false'),
//    add '1' to the accumulator variable (and return it)

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      borrowedBooks += 1
    };
  };
  return borrowedBooks;
};


///////////////////////////////////////////////////////////////////////////


function getMostCommonGenres(books) {
  
  const genres = books.map(book => book.genre);
  let sortedGenres = genres.reduce( (numberOfBooks, book) => {
    if (numberOfBooks[book]) {
      numberOfBooks[book]++;
    } else {
      numberOfBooks[book] = 1;
    };
    return numberOfBooks;
  }, {});

let arrayOfNewGenre = [];
for (let genre in sortedGenres) {
  let typeOfGenre = genre;
  let numberOfGenre = sortedGenres[genre];
  let newGenreObject = {name: typeOfGenre, count: numberOfGenre};
  arrayOfNewGenre.push(newGenreObject);
};

let genresByQuantity = arrayOfNewGenre.sort( (book1, book2) => book2.count - book1.count);
let topGenres = genresByQuantity.slice(0,5);
return topGenres;

};


///////////////////////////////////////////////////////////////////////////


// create a new, empty array (mostPopularBooks)
// for each book in the 'books' array, create a new object that has two
//    keys ('name' and 'count') which will respectively have the values of
//    each book's title and the number of borrows
// push each of these new objects into the newly defined array
// create a new array (booksSortedByBorrowAmounts) that is the sorted version
//    of the old array - sorted from highest to lowest 'count'
// slice the array so it contains no more than 5 elements and return it

function getMostPopularBooks(books) {
  const mostPopularBooks = [];
  books.forEach( (book) => {
    let booksAndBorrowAmounts = {name: book.title, count: book.borrows.length};
    mostPopularBooks.push(booksAndBorrowAmounts);
  });
  let booksSortedByBorrowAmounts = mostPopularBooks.sort( (bookA, bookB) =>
    bookB.count - bookA.count);
  let mostBorrowedBooks = booksSortedByBorrowAmounts.slice(0,5);
  return mostBorrowedBooks;
};


///////////////////////////////////////////////////////////////////////////


function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  
  authors.forEach((author) => {
    let theAuthor = {name: `${author.name.first} ${author.name.last}`, count: 0}
    let authorBooks = books.filter((book) => book.authorId === author.id);
    authorBooks.forEach((book) => theAuthor.count += book.borrows.length);
    popularAuthors.push(theAuthor);
  });
  
  let sorted = popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);
  let topFive = sorted.slice(0, 5);
  
  return topFive;
};


///////////////////////////////////////////////////////////////////////////


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
