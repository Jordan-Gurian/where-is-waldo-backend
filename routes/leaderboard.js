var express = require('express');
const leaderboardController = require('../controllers/leaderboardController');
const router = express.Router();

// GET all leaderboard in server
router.get('/', leaderboardController.getAllLeaderboardEntries);

// GET leaderboard for specific game from server
router.get('/:gameId', leaderboardController.getOneEntireLeaderboardEntries);

// GET specific leaderboard entry from server
router.get('/:gameId/:leaderboardId', leaderboardController.getOneLeaderboardEntry);

// POST new leaderboard entry to server
router.post('/', leaderboardController.postLeaderboardEntry);

// DELETE leaderboard for specific game from server
router.delete('/:gameId', leaderboardController.deleteOneEntireLeaderboardEntries);

// DELETE specific leaderboard entry from server
router.delete('/:gameId/:leaderboardId', leaderboardController.deleteOneLeaderboardEntry);

module.exports = router;
