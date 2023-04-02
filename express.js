const express = require("express");
const app = express();
const process = require('process')
const Operations = require("./operations");
const ExpressError = require("./expressError");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required.", 400);
    };

    let numArr = req.query.nums.split(',');
    let x = new Operations(numArr);

    let invalidNum = numArr.find(num => isNaN(num) == true);
    if (invalidNum) {
        throw new ExpressError(`${invalidNum} is not a valid number.`, 400);
    };

    return res.json(x.mean());
});


app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required.", 400);
    };

    let numArr = req.query.nums.split(',');
    let x = new Operations(numArr);

    let invalidNum = numArr.find(num => isNaN(num) == true);
    if (invalidNum) {
        throw new ExpressError(`${invalidNum} is not a valid number.`, 400);
    };
    
    return res.json(x.median())
});


app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required.", 400);
    };

    let numArr = req.query.nums.split(',');
    let x = new Operations(numArr);

    let invalidNum = numArr.find(num => isNaN(num) == true);
    if (invalidNum) {
        throw new ExpressError(`${invalidNum} is not a valid number.`, 400);
    };

    return res.json(x.mode())
});


// this runs if no routes match
app.use((req, res, next) => {
    const err = new ExpressError("Page Not Found", 404);
    return next(err);
});


// displays custom error msg & sets status code
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.msg
    });
});


app.listen(3000, function(){
    console.log('App on port 3000');
});
