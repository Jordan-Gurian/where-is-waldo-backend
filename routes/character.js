var express = require('express');
const characterController = require('../controllers/characterController');
const router = express.Router();

// GET all characters from server
router.get('/', characterController.getAllCharacters);

// GET specific character from server
router.get('/:characterId', characterController.getCharacter);

// POST new character to server
router.post('/', characterController.postCharacter);

// DELETE character from server
router.delete('/:characterId', characterController.deleteCharacter);

module.exports = router;
