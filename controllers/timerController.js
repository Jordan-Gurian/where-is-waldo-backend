const asyncHandler = require('express-async-handler');

exports.startTimer = asyncHandler(async(req, res, next) => {
    return res.json(Date.now())
});

exports.stopTimer = asyncHandler(async(req, res, next) => {
    const millis = Date.now() - req.body.start;
    let mins = Math.floor(millis / 60000);
    let seconds = (Math.floor(millis/1000) - (mins * 60));
    
    if (seconds < 10) {
        seconds = `0${seconds}`;
    } 

    if (mins < 10) {
        mins = `0${mins}`;
    } else if (mins > 99) { // Do not allow times above 99:59
        mins = `99`;
        seconds = `59`;
    }

    return res.json(`${mins}:${seconds}`)
});