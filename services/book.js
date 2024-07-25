const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("database/db.json"))
}

function getBookById() {
    const books = getAllBooks()
    
}

module.exports = {
    getAllBooks
}