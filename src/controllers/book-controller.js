const bookService = require('../services/book-service');


module.exports = {
    register: setupThisController
};


function setupThisController(app) {


    app.get('/books', function (req, res) {

        bookService.getAllBooks(function (getAllBooks) {
            let model = {
                books: allBooks
            };

            res.render('books', model);
        });

    });


    app.post('/add-book', function (req, res) {

        let bookAuthor = req.body.author;
        let bookTitle = req.body.title;
        let bookGenre = req.body.genre;
        let bookCategory = req.body.category;

        bookService.addBook(bookAuthor, bookTitle, bookGenre, bookCategory, function () {
            // Redirect the user to the URL: /about
            res.redirect('/book');
        })

    });


    app.get('/add-book', function (req, res) {

        let bookIdToDelete = req.query.bookId;

        bookService.deleteBook(bookIdToDelete, function () {
            // Redirect the user to the URL: /about
            res.redirect('/book');
        });

    });


}