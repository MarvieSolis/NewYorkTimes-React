# New York Times on ReactJS

## Description
This website allows users to view and save articles from [The New York Times](https://www.nytimes.com/) via their API. Users enter a topic of their choice, the start year, and the end year in the search component. The New York Times API then returns results regarding that topic between the specified window of years entered in the Results component. Each article displays their title, date, and a green save button. Clicking on the save button will save the article into the MongoDB database. Refreshing the page will cause the search results to disappear, but the articles that were saved previously to appear in the Saved component. Articles in the Saved component present the same data as in the Results component, but are equipped with a delete button instead, which will remove the article from the database.


## Functionality
This website utilizes **MongoDB**, **Express**, **ReactJS**, and **NodeJS** (MERN) to create the website's client-side and server-side functionality.

MongoDB is used to create a database to store all the user saved articles. Functionality within the React components allows users to also delete articles that have previously been saved. `Article.js` contains the schema for the articles, which only consists of the title, date, and URL to the article.

Express and Node are used to hook up the backend with the frontend, as well as set up routes that the site can hit in order to perform the API and database functions. `server.js` sets up the server that the site will run on. Also on `server.js`, routes are used via Router to access `api/articles` to perform the necessary actions.

With ReactJS, the site is created using 5 main components. These components are `Header.js`, `Search.js`, `Results.js`, `Saved.js`, and `Main.js`. `Header.js` contains the banner for the site. `Search.js` performs the search functionality of the site by accessing the New York Times API via Axios. `Results.js` is where the results from the search are displayed. `Saved.js` renders the saved articles within the database. `Main.js` compiles all of the components together and exports them into `App.js`.


## Screenshots
- This is the layout of the site, consisting of the Header, Search, Results, and Saved sections.
![home](https://user-images.githubusercontent.com/36168517/45614168-75532000-ba1d-11e8-9002-e1453db6b942.PNG)

- In the search component, a user enters a topic, start year, and end year.
![search](https://user-images.githubusercontent.com/36168517/45614171-75532000-ba1d-11e8-917d-95dfca0be853.PNG)

- The results are rendered on this component. Clicking the green save button will store that articles in the database.
![results](https://user-images.githubusercontent.com/36168517/45614169-75532000-ba1d-11e8-8083-bcb81901dd62.PNG)

- Saved articles are rendered here. The red delete button can be clicked in order to remove an article from the database.
![saved](https://user-images.githubusercontent.com/36168517/45614170-75532000-ba1d-11e8-8bb5-bad5bba736c2.PNG)


## Technologies Used
- [ReactJS](https://reactjs.org/): Used to create the client-side funcitonality such as the HTML, CSS, page layout, and site components.
- [Bootstrap](https://getbootstrap.com/): Used to assist in establishing a uniform layout throughout the site.
- [MongoDB](https://www.mongodb.com/): Used to store articles saved, storing articles from the New York Times API, to the MongoDB database.
- [Express](https://expressjs.com/): Used within Node to set up routes to execute backend funtionality such as Creating Reading, Updating, and Deleting from the database.
- [Node](https://nodejs.org/en/): Used to create a connection between the site, server, and New York Times API.
- [Axios](https://www.npmjs.com/package/axios): Used within Node to perform the GET, POST, and DELETE requests.
- [New York Times API](https://developer.nytimes.com/)


## The Site is live!
[Click here to see the page on Heroku!](https://marvie-c-solis-nyt-react.herokuapp.com/)