var express = require('express');
var router = express.Router();
var postPlayer = require('../db/api/player');

router.post('/', async (req, res, next) =>{
  console.log("req.body", req.body)
  const {player_name, num_of_games, ave_num_of_guesses_per_player} = req.body;
  if(!player_name || !num_of_games || !ave_num_of_guesses_per_player) {
      res.send('all fields are required');
      return;
  }else{
      try{
          const player = await postPlayer.addPlayer(player_name, num_of_games, ave_num_of_guesses_per_player);
          res.status(200).json(player.data);
      }catch(error){
          res.status(401).json({status: 401, error: 'one or more of the inputs is invalid!'});
      }
  }
});

module.exports = router;