const {
    getAllBooks,
    addBook,
    getBookByKeyword,
    editBook,
    deleteBook
} = require('../repositories/bookRepository')

async function get(req, res) {
    let data = await getAllBooks()

    return res.json(data)
}

async function search(req, res) {
    let data = await getBookByKeyword(req.query.keyword)

    console.log(data)

    return res.json(data)
}

async function add(req, res) {
    await addBook(
        req.body.author,
        req.body.title,
        req.body.genre,
        req.body.year
    )

    res.sendStatus(200)
}

async function edit(req, res) {
    await editBook(
        req.body.bookId,
        req.body.author,
        req.body.title,
        req.body.genre,
        req.body.year
    )

    res.sendStatus(200)
}

async function remove(req, res) {
    await deleteBook(req.body.bookId)

}

module.exports = {
    get,
    add,
    edit,
    search,
    remove
}
