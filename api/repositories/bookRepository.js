const bookModel = require('../models/bookModel')
const db_context = require('../db_context')

async function getAllBooks() {
    let books = []

    let data = await db_context.selectAllBooks()

    data.forEach((book) => {
        books.push(
            new bookModel(
                book.bookId,
                book.author,
                book.title,
                book.genre,
                book.year
            )
        )
    })

    return books
}

async function getBookByKeyword(keyword) {
    let books = []

    let data = await db_context.selectBookByKeyword(keyword)

    data.forEach((book) => {
        books.push(
            new bookModel(
                book.bookId,
                book.author,
                book.title,
                book.genre,
                book.year
            )
        )
    })

    return books
}

async function addBook(author, title, genre, year) {
    db_context.insertBook(author, title, genre, year)
}

async function editBook(bookId, author, title, genre, year) {
    db_context.updateBook(bookId, author, title, genre, year)
}

async function deleteBook(bookId) {
    db_context.deleteBook(bookId)
}

module.exports = {
    getAllBooks,
    getBookByKeyword,
    addBook,
    editBook,
    deleteBook
}
