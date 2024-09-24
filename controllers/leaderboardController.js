const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

exports.getAllLeaderboardEntries = asyncHandler(async(req, res, next) => {
    try {
        const allLeaderboards = await prisma.leaderboard.findMany();
        return res.json(allLeaderboards);
    } catch(e) {
        return res.status(403).send(`Failed to get all leaderboards ${e}`);
    }
});

exports.getOneLeaderboardEntry = asyncHandler(async(req, res, next) => {
    try {
        const oneLeaderboardEntry = await prisma.leaderboard.findUnique({
            where: {
                id: req.params.leaderboardId,
            }
        });
        return res.json(oneLeaderboardEntry);
    } catch(e) {
        return res.status(403).send(`Failed to get leaderboard entry: ${e}`);
    }     
});

exports.postLeaderboardEntry = asyncHandler(async(req, res, next) => {
    try {
        const newLeaderboard = await prisma.leaderboard.create({
            data: {
                name: req.body.name,
                time: req.body.time,
                gameId: req.body.gameId,
            }
        });
        return res.json(newLeaderboard);
    } catch {
        return res.status(403).send(`Failed to add leaderboard entry: ${e}`);
    }
});

exports.deleteOneLeaderboardEntry = asyncHandler(async(req, res, next) => {
    try {
        const deleteLeaderboard = await prisma.leaderboard.delete({
            where: {
                id: req.params.leaderboardId,
            }
        });
        return res.json(deleteLeaderboard);
    } catch(e) {
        return res.status(403).send(`Failed to delete leaderboard entry: ${e}`);
    }
});