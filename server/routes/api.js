const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Video = require('../models/video')

const db = "mongodb://rani:rani123@ds155352.mlab.com:55352/videoplayer"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error! " + err);
    }
})

router.get('/videos', function(req, res){
    console.log("Get request for all videos.");
    Video.find({}).exec(function(err, videos){
        if(err) {
            console.log("Error retrieving videos");
        } else {
            res.json(videos)
        }
    })
})

router.get('/videos/:id', function(req, res){
    console.log("Get request for a single video.");
    Video.findById(req.params.id).exec(function(err, video){
        if(err) {
            console.log("Error retrieving video");
        } else {
            res.json(video)
        }
    })
})

module.exports = router;