//find method to make sure id === id 
function findAuthorById(authors, id) {
  var found = authors.find((author) => author.id === id);
  return found
}
// find method to mak sure id === id 
function findBookById(books, id) {
  const found = books.find((book) => book.id === id);
  return found
}
//use spread method. Need to return books.filter that are checked out and returned.
// use some and every method on this
function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  const returnedBook = books.filter((book) => book.borrows.every((borrow) =>borrow.returned === true));
    let statusOfBook = [[...checkedOut], ...[returnedBook]];
  return statusOfBook

 // let statusOfBook = [];
  //statusOfBook.push(checkedOut);
  //statusOfBook.push(returnedBook);
  //return statusOfBook
  
}
// use spread method on this 
// find method needed 
// account and borrow id need to equal 
//.map is needed 
// going to have to use .slice at the end (0, 10)
function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrow) => { let account = accounts.find((account) => account.id === borrow.id);
                                    return {...borrow, ...account };})
return result.slice(0, 10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
