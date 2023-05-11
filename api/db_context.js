const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:backend123@localhost:5432/Bibliotek')

async function selectAllBooks() {
    let data = await db.many('SELECT * FROM books')

    return data
}

async function insertBook(author, title, genre, year) {
    //   console.log('I db_context: ' + body);

    await db.none(
        `INSERT INTO books (author, title, genre, year)` +
            `VALUES ('${author}','${title}', '${genre}', '${year}')`
    )
}

async function updateBook(bookId, author, title, genre, year) {
    await db.none(
        `UPDATE books SET author = '${author}', title = '${title}', genre = '${genre}', year = '${year}' WHERE "bookId" = ${bookId}`
    )
}

async function selectBookByKeyword(keyword) {
    let data = await db.any(
        `SELECT * FROM books WHERE author LIKE '%${keyword}%'`
    )

    return data
}

async function deleteBook(bookId) {
    await db.none(`DELETE FROM books WHERE "bookId" = $1`, [bookId])
}

module.exports = {
    selectAllBooks,
    selectBookByKeyword,
    insertBook,
    updateBook,
    deleteBook
}
