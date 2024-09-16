var express = require('express');
const gameController = require('../controllers/gameController');
const router = express.Router();

// GET all games in server
router.get('/', gameController.getAllGames);

// // GET specific game from server
router.get('/:gameId', gameController.getGame);

// POST new game to server
router.post('/', gameController.postGame);

// DELETE game from server
router.delete('/:gameId', gameController.deleteGame);

module.exports = router;
