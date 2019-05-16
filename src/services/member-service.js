module.exports = {
    getAllMembers: getAllMembers,
    addMember: addMember,
    deleteMember: deleteMember,
};


function getAllMembers(callback) {
    const connection = databaseService.getConnection();

    const query = 'SELECT * FROM Members';

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}


function addMember(memberName) {
    const connection = databaseService.getConnection();

    const query = 'INSERT INTO Members (memberName) VALUES (?)';
    const parameters = [memberName];

    connection.query(query, parameters, function (error, results, fields) {
        if (error) throw error;
        callback();
    });
}


function deleteMember(memberId, callback) {
    const connection = databaseService.getConnection();

    const query = 'DELETE FROM Members WHERE id = ?';
    const parameters = [memberId];

    connection.query(query, parameters, function (error, results, fields) {
        if (error) throw error;
        callback();
    });
}
