const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set a name for the book'],
    },
    author: {
      type: String,
      required: [true, 'Set an author for the book'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Books = model('book', bookSchema);

module.exports = Books;
