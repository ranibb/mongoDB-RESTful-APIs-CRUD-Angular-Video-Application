const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Video = require('../models/video')

const db = "mongodb://rani:rani123@ds155352.mlab.com:55352/videoplayer"
mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true }, function(err){
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

router.post('/video', function(req, res){
    console.log("Post a video");
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if (err) {
            console.log("Error saving video");
        } else {
            res.json(insertedVideo);
        }
    })
})

module.exports = router;