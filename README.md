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

## Displaying Video List

We are going to display an array of hard coded videos. Just like how we had a video represented by a model in express, we are going to represent a video using a class in angular. So, let's use angular cli to generate a video class; `ng g cl Video`.

We will be handling most of the functionality in the VideoCenter component. The VideoList component is responsible for just displaying the list of videos and then the VideoDetail component is responsible for just displaying a detailed view of that particular video. So, our array of hard-coded videos will be present in the VideoCenter component, and this array will be passed as an input to the VideoList component which will then display the list.

```TypeScript
@Component({
    //..
    inputs: ['videos']
})
export class VideoListComponent implements OnInit {
    //..
}
```

Therefore, we can now specify in the VideoCenter component template that there is an input to the VideoList Component using the property data binding on the VideoList Component selector.

```HTML
<app-video-list [videos]="videos"></app-video-list>
```

Now, we can display the list of videos in the VideoList component template using the ngFor directive.

Right now we have an array of videos in the VideoCenter component. We send this array as an input to the VideoList component, and then it is being displyed inside VideoList template

    VideoCenter -> input -> VideoList component -> Display in VideoList template.

## Displaying Video Detail

Now, when we click on a video, let's send an event as output from VideoList to VideoCenter and that event contains information about the clicked video. 

    VideoList -> output -> VideoCenter -> capture this video in VideoCenter component

After capture this video in VideoCenter component, we will send it as an input again but this time to the VideoDetail component where we will display the details.

    VideoCenter -> input -> VideoDetail component -> Display in VideoDetail template.