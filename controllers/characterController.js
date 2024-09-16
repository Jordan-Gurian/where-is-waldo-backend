const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

exports.getAllCharacters = asyncHandler(async(req, res, next) => {
    try {
        const allCharacters = await prisma.character.findMany();
        return res.json(allCharacters)
    } catch(e) {
        return res.status(403).send(`Failed to get all characters: ${e}`)
    }
});

exports.getCharacter = asyncHandler(async(req, res, next) => {
    try {
        const oneCharacter = await prisma.character.findUnique({
            where: {
                id: req.params.characterId,
            }
        });
        return res.json(oneCharacter);
    } catch(e) {
        return res.status(403).send(`Failed to get character ${e}`);
    }     
});

exports.postCharacter = asyncHandler(async(req, res, next) => {
    try {
        const newCharacter = await prisma.character.create({
            data: {
                name: req.body.name, 
                imgURL: req.body.imgURL,
                x1: req.body.x1,
                x2: req.body.x2,
                y1: req.body.y1,
                y2: req.body.y2,
                gameId: req.body.gameId,
            },
        });
        return res.json(newCharacter);
    } catch(e) {
        return res.status(403).send(`Failed to add character ${e}`);
    }
});

exports.deleteCharacter = asyncHandler(async(req, res, next) => {
    try {
        const deleteCharacter = await prisma.character.delete({
            where: {
                id: req.params.characterId,
            }
        });
        return res.json(deleteCharacter);
    } catch(e) {
        return res.status(403).send(`Failed to delete character ${e}`);
    }
});