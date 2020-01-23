var express = require('express');
var router = express.Router();
var history = require('../db/api/history');

router.get('/', function(req, res, next){
  history.getAll(req.query)
  .then(city => res.status(200).json(city))
  .catch(error => res.status(500).json({error: error.message}))
});

router.get('/:playerId', function(req, res, next){
  console.log(" req.params.playerId", req.params.playerId)
  history.getHistoryByPlayerId(req.params.playerId)
  .then(player => res.status(200).json(player))
  .catch(error => res.status(500).json({error: error.message}))
});

module.exports = router;
