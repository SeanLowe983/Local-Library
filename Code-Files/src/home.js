//need to use the reduce method 
function getTotalBooksCount(books) {
  let result = books.reduce((total) => total + 1, 0);
  return result 
}
//simple just use .length
function getTotalAccountsCount(accounts) {
  return accounts.length;
}
//use the filter method on this one 
function getBooksBorrowedCount(books) {
  let totalCheckedOut = books.filter((book) =>
   book.borrows.filter((broughtBack) => broughtBack.returned === false).length > 0);
 return totalCheckedOut.length;
}
  //books.forEach((book) => { if (result[book.genre]) { result[book.genre] ++} else...


// need to sort a,b to b -a...and slice (0, 5) at the end 
function getMostCommonGenres(books) {
  let result = {};
   books.forEach((book) => { if (result[book.genre]) { result[book.genre] ++ } else { result[book.genre] = 1; }})
  let countArray = [];
  for (const [key, value] of Object.entries(result))
    {countArray.push({ 'name' : key, 'count' : value}); }
  countArray.sort((a, b) => b.count - a.count);
return countArray.slice(0, 5); }

                                   
function getMostPopularBooks(books) {
   return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}
function getMostPopularAuthors(books, authors) {
        let result = [];
        authors.forEach((author) => { let theWriter = { name: `${author.name.first} ${author.name.last}`,
        count: 0
        };
         booksForEach(books, author, theWriter);
     result.push(theWriter);
      }
      )
                        
      
      return result.sort((a, b) => b.count - a.count).slice(0, 5);
      }

function booksForEach(books, author, theWriter) {
  books.forEach((book) => {
    if (book.authorId === author.id) {
      theWriter.count += book.borrows.length;
    }
  });
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};