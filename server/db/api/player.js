const connection = require('../config');
const playerQuery = 'insert into player(player_name, num_of_games, ave_num_of_guesses_per_player) value(?,?,?)';
const gameQuery = 'insert into game(playerId, min_num_of_range, max_num_of_range, chosen_num, amount_of_guesses, list_of_guesses) value(?,?,?,?,?,?)';


function addPlayer(player_name, num_of_games, ave_num_of_guesses_per_player){
    return new Promise((resolve, reject) => {
        connection.query(playerQuery, [player_name, num_of_games, ave_num_of_guesses_per_player], (error, results) => {
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

module.exports = {addPlayer, addGame}
