const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const db = "mongodb://rani:rani123@ds155352.mlab.com:55352/videoplayer"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error! " + err);
    }
})

router.get('/', function(req, res){
    res.send('api works')
})

module.exports = router;