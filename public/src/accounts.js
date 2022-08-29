//use find() and check id === id 
function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found
}
//sort() and have last name in order ? 1 : -1
function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return accounts
}
//need borrow id to match account id...then need to add them up...use for loop
function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++){
  for ( let j = 0; j < books[i].borrows.length; j++){
  if (account.id === books[i].borrows[j].id){
    total += 1;
  }
  }
  }
  return total 
}
// let result final array 
// let borrower match 
// need to loop through books and borrowed array..use the forEach that you read about 
//need to make a var for borrowed 
//  const book (here you can destruct the book object)
// check if id match and if returned is false 
// now write a if condition that will push the result of book 

function getBooksPossessedByAccount(account, books, authors) {
  let result = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false && borrow.id === account.id));
  result.map((book) => { let author = authors.find((author) => author.id === book.authorId)
  book.author = author;
                        return book;
  } )
    return result 
}
  //let result = [];
 // let borrower = [];
 // books.forEach((item) => {
  //  const borrowed = item.borrows;
  //  const book = {
  //    id: item.id 
    //  title: item.title
      //genre: item.genre
      //authorId: item.authorId
      //author: {}
      //borrows: {}
    //};
      //          const { id, title, genre, authorId, author, borrows} = book;
//borrowed.forEach((borrow) => {
  //if (borrow.id === account.id && borrow.returned === false){
    //result.push(book);
    //borrower.push(borrow);
    //book.borrows = borrower;
    ///book.author = authors.filter((writer) => writer.id === book.authorId);
  //}
//});
 // });
//return result;


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
