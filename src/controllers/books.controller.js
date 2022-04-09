const Books = require('../db/books-operation.db');

const getBooks = async (_, res) => {
    const books = await Books.getAllBooks();
    res.json({ status: 'success', code: 200, data: { books } });
};
const getBookById = async (req, res) => {
    if (!req.params.id) {
        res.json({
            status: 'error',
            code: 404,
            message: 'Book id was not founded',
        });
        return;
    }
    const book = await Books.getBookById(req.params.id);
    if (!book) {
        res.json({
            status: 'error',
            code: 404,
            message: 'Book was not founded',
        });
        return;
    }
    res.json(book);
};
const removeBook = async (req, res) => {
    if (!req.params.id) {
        res.json({
            status: 'error',
            code: 404,
            message: 'Book id was not founded',
        });
        return;
    }
    const book = await Books.removeBook(req.params.id);
    if (!book) {
        res.status(404).json({
            status: 'error',
            code: 404,
            message: 'Book  was not founded',
        });
        return;
    }
    res.json({ status: 'success', code: 200 });
};

const addBook = async (req, res) => {
    try {
        const book = await Books.addBook(req.body);
        res.status(201).json({ status: 'success', code: 201, data: { book } });
    } catch (e) {
        res.status(500).json({
            status: 'error',
            code: 500,
            message: `${e}`,
        });
    }
};
const updateBool = async (req, res) => {
    try {
        if (!req.params.id) {
            res.json({
                status: 'error',
                code: 404,
                message: 'Book id was not founded',
            });
            return;
        }
        const book = await Books.updateBool(req.params.id, req.body);
        res.json({ status: 'success', code: 200, data: { book } });
    } catch (e) {
        res.status(500).json({
            status: 'error',
            code: 500,
            message: `${e}`,
        });
    }
};
module.exports = { addBook, getBooks, removeBook, getBookById, updateBool };
