const express = require("express");
const app = express();
const process = require('process')
const oper = require("./operations");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send("Hey there!")
})


app.get('/mean', (req, res) => {
    let x = new oper.Operations(req.query.nums)
    return res.json(x.mean())
})


app.get('/median', (req, res) => {
    let x = new oper.Operations(req.query.nums)
    return res.json(x.median())
})


app.get('/mode', (req, res) => {
    let x = new oper.Operations(req.query.nums)
    return res.json(x.mode())
})


app.listen(3000, function(){
    console.log('App on port 3000');
  })
