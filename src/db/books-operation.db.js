const Books = require('../models/book.model');

const getAllBooks = async () => await Books.find({});

const getBookById = async (contactId) => await Books.findById(contactId);

const removeBook = async (contactId) =>
  await Books.findByIdAndRemove({ _id: contactId });

const addBook = async (body) => await Books.create(body);

const updateBool = async (contactId, body) =>
  await Books.findByIdAndUpdate({ _id: contactId }, { ...body }, { new: true });

module.exports = {
  getAllBooks,
  getBookById,
  removeBook,
  addBook,
  updateBool,
};
