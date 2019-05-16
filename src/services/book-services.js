module.exports = {
    getAllBooks: getAllBooks,
    addBook: addBook,
    deleteBook: deleteBook
}



function getAllBooks(callback) {
    const connection = databaseService.getConnection();

    const query = 'SELECT * FROM Books';

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}


function addBook(Author, Title, Genre, Category) {
    const connection = databaseService.getConnection();

    const query = 'INSERT INTO Books (Author, Title, Genre, Category) VALUES (?, ?, ?, ?)';
    const parameters = [Author, Title, Genre, Category];

    connection.query(query, parameters, function (error, results, fields) {
        if (error) throw error;
        callback();
    });
}


function deleteBook(bookId, callback) {
    const connection = databaseService.getConnection();

    const query = 'DELETE FROM Books WHERE id = ?';
    const parameters = [bookId];

    connection.query(query, parameters, function (error, results, fields) {
        if (error) throw error;
        callback();
    });
}
