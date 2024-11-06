const { getAllBooks, getBookById, insertBook, updateBook } = require("../services/bookServices")

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
        const id = req.params.id;
        const book = getBookById(id);
    
        res.send(JSON.stringify({
            status: 200,
            hasError: false,
            data: book
        }));
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

function postBook(req, res) {
    try {
        const book = req.body;
        const result = insertBook(book);
    
        res.send(JSON.stringify({
            status: 200,
            hasError: !result,
            succes: result
        }));
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

function patchBook(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        const result = updateBook(id, body);

        res.send(JSON.stringify({
            status: 200,
            hasError: !result,
            succes: result
        }));
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

function deleteBook (req, res) {
    const id = req.params.id;
    
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}