const { getAllBooks, getBookById } = require("../services/book")

function getBooks(req, res) {
    try {
        const bookList = getAllBooks()
        res.send(JSON.stringify({
            status: 200,
            hasError: false,
            data: bookList
        }))
        res.status(200)
    } catch (error) {
        res.send(JSON.stringify({
            status: 500,
            hasError: true,
            message: `Internal server error: ${error.toString()}`,
            stackTrace: error.stack
        }))
        res.status(500)
    }    
}

function getBook(req, res) {
    try {
        const book = getBookById()
        const id = req.params.id

        res.send(JSON.stringify({
            status: 200,
            hasError: false,
            data: book
        }))
    }
}

module.exports = {
    getBooks,
    getBook
}