const connection = require('../config');
const query = 'select *, count(*) from game  where playerId = ?';
const queryAll = 'select * from game';

function getAll() {
    return new Promise((resolve, reject) => {
        connection.query(queryAll,(error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            console.log(results)
            resolve(results);
        });
    });
}

function getHistoryByPlayerId(playerId) {
    console.log("player id is", playerId)
    return new Promise((resolve, reject) => {
        connection.query(query,[playerId],(error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {
    getHistoryByPlayerId,
    getAll
};
