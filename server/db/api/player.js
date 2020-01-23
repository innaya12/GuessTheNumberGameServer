const connection = require('../config');
const playerQuery = 'insert into player(player_name, num_of_games) value(?,?)';
const gameQuery = 'insert into game(playerId, min_num_of_range, max_num_of_range, chosen_num, amount_of_guesses, list_of_guesses) value(?,?,?,?,?,?)';

function getAll() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM player',(error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

function addPlayer(player_name, num_of_games){
    return new Promise((resolve, reject) => {
        connection.query(playerQuery, [player_name, num_of_games], (error, results) => {
            console.log("query", query)
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

function addGame(playerId, min_num_of_range, max_num_of_range, chosen_num, amount_of_guesses, list_of_guesses){
    return new Promise((resolve, reject) => {
        connection.query(gameQuery, [playerId, min_num_of_range, max_num_of_range, chosen_num, amount_of_guesses, list_of_guesses], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {addPlayer, addGame, getAll}
