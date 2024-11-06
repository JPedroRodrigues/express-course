const { getAllBooks, getBookById, insertBook, updateBook, deleteBookById } = require("../services/bookServices")

function getBooks(req, res) {
    try {
        const bookList = getAllBooks();

        res.status(200);
        res.send(JSON.stringify({
            status: 200,
            hasError: false,
            data: bookList
        }));
    } catch (error) {
        res.status(500)
        res.send(JSON.stringify({
            status: 500,
            hasError: true,
            message: `Internal server error: ${error.toString()}`,
            stackTrace: error.stack
        }))
    }    
}

function getBook(req, res) {
    const id = req.params.id;

    if (!id || !Number(id)) {
        res.status(422)
        res.send(JSON.stringify({
            status: 422,
            hasError: true,
            message: `Unprocessable entity: ${id} is not a number`,
        }));
    }

    try {
        const book = getBookById(id);
    
        res.send(JSON.stringify({
            status: 200,
            hasError: false,
            data: book
        }));
    } catch (error) {
        res.status(500)
        res.send(JSON.stringify({
            status: 500,
            hasError: true,
            message: `Internal server error: ${error.toString()}`,
            stackTrace: error.stack
        }))
    }    
}

function postBook(req, res) {
    try {
        const book = req.body;

        if (!book.name) {
            res.status(422)
            res.send(JSON.stringify({
                status: 422,
                hasError: true,
                message: `Unprocessable entity: name does not exist`,
            }));
        }

        const result = insertBook(book);

        res.send(JSON.stringify({
            status: 200,
            hasError: !result,
            succes: result
        }));
    } catch (error) {
        res.status(500)
        res.send(JSON.stringify({
            status: 500,
            hasError: true,
            message: `Internal server error: ${error.toString()}`,
            stackTrace: error.stack
        }))
    }    
}

function patchBook(req, res) {
    const id = req.params.id;

    if (!id || !Number(id)) {
        res.status(422)
        res.send(JSON.stringify({
            status: 422,
            hasError: true,
            message: `Unprocessable entity: ${id} is not a number`,
        }));
    }
    try {
        const body = req.body;

        if (!body.name) {
            res.status(422)
            res.send(JSON.stringify({
                status: 422,
                hasError: true,
                message: `Unprocessable entity: name does not exist`,
            }));
        }

        const result = updateBook(id, body);

        res.send(JSON.stringify({
            status: 200,
            hasError: !result,
            succes: result
        }));
    } catch (error) {
        res.status(500)
        res.send(JSON.stringify({
            status: 500,
            hasError: true,
            message: `Internal server error: ${error.toString()}`,
            stackTrace: error.stack
        }))
    }    
}

function deleteBook (req, res) {
    const id = req.params.id;

    if (!id || !Number(id)) {
        res.status(422)
        res.send(JSON.stringify({
            status: 422,
            hasError: true,
            message: `Unprocessable entity: ${id} is not a number`,
        }));
    }

    try {
        const result = deleteBookById(id);

        res.send(JSON.stringify({
            status: 200,
            hasError: !result,
            succes: result
        }));
    } catch (error) {
        res.status(500)
        res.send(JSON.stringify({
            status: 500,
            hasError: true,
            message: `Internal server error: ${error.toString()}`,
            stackTrace: error.stack
        }))
    }  
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}