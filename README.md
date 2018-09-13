# Video player application

Generate a new Angular project `ng new VideoPlayerApp --routing`.

Run the command `ng serve -o` to open the app in the browser.

## connect the Angular App with the express server

Run the following command `ng build`. This will create a distributable folder of the entire angular application.

Install the dependencies `npm install --save express body-parser`

## MongoDB

The server needs to interact with mongoDB to perform the required operation. For this interaction we make use of mongoose. It is a npm package that provides mongoDB object mapping. Or in simpler words mongoose translates data in the database to a JavaScript object for use in our application. Install it: `npm install --save mongoose`.