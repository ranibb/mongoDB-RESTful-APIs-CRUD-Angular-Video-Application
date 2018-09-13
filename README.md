# Video player application

Generate a new Angular project `ng new VideoPlayerApp --routing`.

Run the command `ng serve -o` to open the app in the browser.

## connect the Angular App with the express server

Run the following command `ng build`. This will create a distributable folder of the entire angular application.

Install the dependencies `npm install --save express body-parser`

## MongoDB

The server needs to interact with mongoDB to perform the required operation. For this interaction we make use of mongoose. It is a npm package that provides mongoDB object mapping. Or in simpler words mongoose translates data in the database to a JavaScript object for use in our application. Install it: `npm install --save mongoose`.

## RESTful APIs

Coding RESTful APIs to create, read, update and delete documents from the database and also simultaneously test using POSTMAN.

When we make a put request to localhost:3000/api/video/:id we are going to first log into the console "Update a video". Then we are going to get a hold of the video model and then apply the mongoose findByIdAndUpdate() method to update a video based on its id. This method takes 4 arguments:
* req.params.id : The id of the video we want to update, and this we are going to retrieve from the request '/video/:id'.
* $set : The set of new or updated values for the video that was fetched using the id.
* new : if this is true, the method returns the updated video that is the video with the new set of values. If this is false, it is going to return the original video, that is the video before the values were updated. So you can get both the original video and the updated video based on this parameter 
* A function: that is going to have either an error or the updated video.