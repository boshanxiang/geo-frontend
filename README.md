<h2> GEO App </h2>

GEO App is a MERN stack application that allows the user to maintain a list of preferred restaurants, sort of as a personal bookmark manager for resturants. Its core functionality is to add/remove/update restaurants on the list. All restaurants schemas contain the following keys:

- name
- description
- rating (a number from 1 to 5)
- latitude
- longitude

<h4> Demo: </h4>

[Our Deployed App](https://morning-badlands-49933.herokuapp.com/)

The above link will take you to our app on Heroku. The front-end is a react based SPA (single page application) which depends on an API for providing the CRUD functionality. In addition to displaying reviews and allowing the user to add/update reviews, the front end also uses Google Maps to display the location of the review. This is found by taking the restaurant name input by the user, making an API request to google places for the restaurant closest to the IP address's location, and setting the value for latitude and longitude keys in the review object.

<h4>The core technologies:</h4>

- React
- Node
- Bootstrap
- React Star Ratings

<h4> Third party API:</h4>

- Google Maps Places API
- Google Maps React API

<h4> Future Improvements: </h4>

- Have user authentication.
- Have half stars for rating.
- Upvotes, downvotes, bookmarks, comments.
- Sort functionality.
- Map window updates as reviews change.
- Select from possible restaurant matches on API search.
- Display markers for restaurant location on map.
- See suggested nearby restaurants.
- Display image of restaurant in review show.
- Scroll functionality on right panel.

<h4>Planning Stages</h4>
<h6>Our oiginal vision for our app is displayed below. The main CSS challenges included having a scroll bar for restaurants that scrolled independent of the other content on the page and effectively formatting the mat in the center of the page.</h6>
<br>
<img src = "/ReadmeImages/Wireframe.png" >
<br>
<h6>To visually grasp how information would flow between different components, we created the below diagram to represent state, props, and in which component each would live.</h6>
<br>
<img src = "/ReadmeImages/StateProps.png" >
<br>
<h6>In order to make latitude and longitude values easily updatable and accessible to multiple components, we implemented context APIs. Context APIs store data in a separate location, wrap around a "provider", and then make that context available to all of the "consumers" within the context wrapper. The below graphic represents the flow of information between the context, the provider, and the consumers.</h6>
<br>
<img src = "/ReadmeImages/Context.png" >

NOTE: favicon from https://www.favicon-generator.org/search/---/Fork
