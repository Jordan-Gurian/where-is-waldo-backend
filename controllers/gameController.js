const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

exports.getAllGames = asyncHandler(async(req, res, next) => {
    try {
        const allGames = await prisma.game.findMany();
        return res.json(allGames)
    } catch(e) {
        return res.status(403).send(`Failed to get all games ${e}`)
    }
});

exports.getGame = asyncHandler(async(req, res, next) => {
    try {
        const oneGame = await prisma.game.findUnique({
            where: {
                id: req.params.gameId,
            }
        });
        return res.json(oneGame);
    } catch(e) {
        return res.status(403).send(`Failed to get game: ${e}`)
    }     
});

exports.postGame = asyncHandler(async(req, res, next) => {
    try {
        const newGame = await prisma.game.create({
            data: {
                name: req.body.name,
                imgURL: req.body.imgURL,
            },
        });
        return res.json(newGame);
    } catch(e) {
        return res.status(403).send(`Failed to add game: ${e}`);
    }
});

exports.deleteGame = asyncHandler(async(req, res, next) => {
    try {
        const deleteGame = await prisma.game.delete({
            where: {
                id: req.params.gameId,
            }
        });
        return res.json(deleteGame);
    } catch(e) {
        return res.status(403).send(`Failed to delete game: ${e}`);
    }
});