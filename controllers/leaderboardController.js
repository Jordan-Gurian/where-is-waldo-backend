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

exports.getOneEntireLeaderboardEntries = asyncHandler(async(req, res, next) => {
    try {
        const oneLeaderboard = await prisma.leaderboard.findMany({
            where: {
                gameId: req.params.gameId,
            }, 
            orderBy: [
                {
                    time: 'asc',
                }
            ],
        });
        return res.json(oneLeaderboard);
    } catch(e) {
        return res.status(403).send(`Failed to get leaderboard ${e}`)
    }     
});

exports.getOneLeaderboardEntry = asyncHandler(async(req, res, next) => {
    try {
        const oneLeaderboardEntry = await prisma.leaderboard.findUnique({
            where: {
                id: req.params.leaderboardId,
                gameId: req.params.gameId,
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

exports.deleteOneEntireLeaderboardEntries = asyncHandler(async(req, res, next) => {
    try {
        const leaderboard = await prisma.leaderboard.deleteMany({
            where: {
                gameId: req.params.gameId,
            }, 
        });
        return res.json(leaderboard);
    } catch(e) {
        return res.status(403).send(`Failed to delete leaderboard ${e}`)
    }     
});

exports.deleteOneLeaderboardEntry = asyncHandler(async(req, res, next) => {
    try {
        const deleteLeaderboard = await prisma.leaderboard.delete({
            where: {
                id: req.params.leaderboardId,
                gameId: req.params.gameId,
            }
        });
        return res.json(deleteLeaderboard);
    } catch(e) {
        return res.status(403).send(`Failed to delete leaderboard entry: ${e}`);
    }
});