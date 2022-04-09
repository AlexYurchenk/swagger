const express = require('express');
const router = express.Router();
const {
    addBook,
    getBooks,
    removeBook,
    getBookById,
    updateBool,
} = require('../controllers/books.controller');
/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - _id
 *        - title
 *        - author
 *        - favorite
 *        - createdAt
 *        - updatedAt
 *      properties:
 *        _id:
 *          type: string
 *          description:  Auto-generated id
 *        title:
 *          type: string
 *          description:  The name of the book
 *        author:
 *          type: string
 *          description:  The author of the book
 *        updatedAt:
 *          type: Date
 *          description:  The Date when the book was updated
 *        createdAt:
 *          type: Date
 *          description:  The Date when the book was created
 *        favorite:
 *          type: boolean
 *          description:  The boole which shows, is this book favorite or not
 *      example:
 *        _id:  625158d179da910b3b1e700a
 *        title:  My favorite book ever
 *        author:  Oleksii Yurchenko
 *        favorite: false
 *        createdAt: "2022-04-09T16:09:52.344Z"
 *        updatedAt:  "2022-04-09T16:09:52.344Z"
 */
/**
 * @swagger
 * tags:
 *  name: Books
 *  description:  The books block
 */
/**
 * @swagger
 * /books:
 *  get:
 *    tags: [Books]
 *    summery:  Return the list with all books
 *    responses:
 *      "200":
 *        description:  The list of the books
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status code
 *                data:
 *                  types:  object
 *                  properties:
 *                    book:
 *                      types: array
 *                      items:
 *                        $ref: '#/components/schemas/Book'
 */
router.get('/', getBooks);

/**
 * @swagger
 * /books/{id}:
 *  get:
 *    summery:  Get book by id
 *    tags: [Books]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description:  The book id
 *    responses:
 *      "200":
 *        description:  The book which you looked by id for
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      "404":
 *        description:  The book was not founded
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status of operation
 *                message:
 *                  types:  string
 *                  description:  The error reason
 */

router.get('/:id', getBookById);

/**
 * @swagger
 * /books/{id}:
 *  delete:
 *    summery:  Delete book by id
 *    tags: [Books]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description:  The book id
 *    responses:
 *      "200":
 *        description:  The book which you tried to delete
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status of operation
 *
 *      "404":
 *        description:  The book was not founded
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status of operation
 *                message:
 *                  types:  string
 *                  description:  The error reason
 */

router.delete('/:id', removeBook);

/**
 * @swagger
 * /books:
 *  post:
 *    summery:  Created a new book
 *    tags: [Books]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                types:  string
 *                description:  The book title
 *              author:
 *                types:  string
 *                description:  The book author
 *              favorite:
 *                type: boolean
 *                description:  The boole which shows, is this book favorite or not
 *    responses:
 *      "201":
 *        description:  The book was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status of operation
 *                data:
 *                  types:  object
 *                  properties:
 *                    book:
 *                      $ref: '#/components/schemas/Book'
 *
 *      "500":
 *        description:  Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status of operation
 *                message:
 *                  types:  string
 *                  description:  The error reason
 */

router.post('/', addBook);

/**
 * @swagger
 * /books/{id}:
 *  patch:
 *    summery:  Update book by id
 *    tags: [Books]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description:  The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                types:  string
 *                description:  The book title
 *              author:
 *                types:  string
 *                description:  The book author
 *              favorite:
 *                type: boolean
 *                description:  The boole which shows, is this book favorite or not
 *    responses:
 *      "200":
 *        description:  The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status of operation
 *                data:
 *                  types:  object
 *                  properties:
 *                    book:
 *                      $ref: '#/components/schemas/Book'
 *
 *      "404":
 *        description:  The book was not founded
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status of operation
 *                message:
 *                  types:  string
 *                  description:  The error reason
 *      "500":
 *        description:  Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  types:  string
 *                  description:  The status of operation
 *                code:
 *                  type:  number
 *                  description:  The status of operation
 *                message:
 *                  types:  string
 *                  description:  The error reason
 */

router.patch('/:id', updateBool);

module.exports = router;
