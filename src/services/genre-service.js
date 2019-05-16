module.exports = {
    getAllForSingleGenre: getAllForSingleGenre,
    addGenre: addGenre,
    deleteGenre: deleteGenre
};


function getAllForSingleGenre(callback) {
    const connection = databaseService.getConnection();

    const query = 'SELECT * Books JOIN Genre on Genre.Name = Books.Genre Where Genre.Name = (?)';

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}


function addGenre(genre) {
    const connection = databaseService.getConnection();

    const query = 'INSERT INTO Books (genre) VALUES (?)';
    const parameters = [genre];

    connection.query(query, parameters, function (error, results, fields) {
        if (error) throw error;
        callback();
    });
}


function deleteGenre(genreId, callback) {
    const connection = databaseService.getConnection();

    const query = 'DELETE FROM Genre WHERE id = ?';
    const parameters = [genreId];

    connection.query(query, parameters, function (error, results, fields) {
        if (error) throw error;
        callback();
    });
}
