var express = require('express');
const leaderboardController = require('../controllers/leaderboardController');
const router = express.Router();

// GET all leaderboard from server
router.get('/', leaderboardController.getAllLeaderboardEntries);

// GET specific leaderboard entry from server
router.get('/:leaderboardId', leaderboardController.getOneLeaderboardEntry);

// POST new leaderboard entry to server
router.post('/', leaderboardController.postLeaderboardEntry);

// DELETE specific leaderboard entry from server
router.delete('/:leaderboardId', leaderboardController.deleteOneLeaderboardEntry);

module.exports = router;
