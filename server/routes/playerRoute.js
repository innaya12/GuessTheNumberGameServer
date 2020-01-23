var express = require('express');
var router = express.Router();
var Players = require('../db/api/player');

router.get('/', function(req, res, next){
    Players.getAll(req.query)
    .then(player => res.status(200).json(player))
    .catch(error => res.status(500).json({error: error.message}))
  });

router.post('/', async (req, res, next) =>{
  console.log("req.body", req.body)
  const {player_name ,num_of_games} = req.body;
  if(!player_name) {
      res.send('player_name is required');
      return;
  }else{
      try{
          console.log("before added")
          const player = await player.addPlayer(player_name, num_of_games);
          console.log("player added!")
          res.status(200).json(player.data);
      }catch(error){
          res.status(401).json({status: 401, error: 'one or more of the inputs is invalid!'});
      }
  }
});

module.exports = router;