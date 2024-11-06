const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("database/db.json"))
}

function getBookById(id) {
    const books = getAllBooks();
    const book = books.map(book => book.id == id);
    return book;
}

function insertBook(newBook) {
    const books = getAllBooks();
    const newBooksList = [ ...books, newBook ];

    fs.writeFileSync("database/db.json", JSON.stringify(newBooksList));

    return true;
}

function updateBook(id, updates) {
    let currentBooks = getAllBooks();

    const oldBookId = currentBooks.findIndex(book => book.id == id);
    const updatedBook = { ...currentBooks[oldBookId], ...updates };
    
    currentBooks[oldBookId] = updatedBook;

    fs.writeFileSync("database/db.json", JSON.stringify(currentBooks));
    return true;
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBook
}