const express = require('express');
const bodyParser = require('body-parser');

/**
 * Include the built-in path module that is a better alternative 
 * than string concatenation when joining paths.
 */
const path = require('path') ;

/**
 * Declaring the API route
 */
const api = require('./server/routes/api');

const port = 3000;

const app = express();

/**
 * Specify the folder where all the angular code is placed.
 */
app.use(express.static(path.join(__dirname, 'dist/VideoPlayerApp')));

/**
 * use bodyParser Middleware to parse the text as URL.
 */
app.use(bodyParser.urlencoded({extended: true}));

/**
 * use bodyParser Middleware to parse the text as JSON.
 */
app.use(bodyParser.json());

/**
 * Tell express to use the API route when navigating to http://localhost:3000/api
 */
app.use('/api', api)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/VideoPlayerApp/index.html'));
  });

/**
 * Listen to requests on port 3000
 */
app.listen(port, function() {
    console.log("Server running on localhost: " + port);
})