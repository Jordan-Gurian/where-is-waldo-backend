var express = require('express');
const timerController = require('../controllers/timerController');
const router = express.Router();

// GET all games in server
router.get('/start', timerController.startTimer);

// // GET specific game from server
router.post('/stop', timerController.stopTimer);

module.exports = router;
