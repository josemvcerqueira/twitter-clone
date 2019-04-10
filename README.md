# Simple Twitter App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This web application allows the user to:

-   View all Tweets
-   Create a new Tweet
-   Reply to an existing Tweet
-   Like an existing Tweet

## Technology Stack

-   React for the view library
-   Redux for state management
-   React Router for routing

## TL;DR

To run the project right away:

-   clone the repo with `git clone https://github.com/josemvcerqueira/twitter-clone.git`
-   install all project dependencies with `npm install`
-   start the development server with `npm start`

## What You're Getting

The app is organized using the "Rails Style"

```bash
├── public
├── src
│   ├── components
    │   ├── actions # Includes files for actions to be dispatched
    │   ├── components # Includes files for components to be rendered
    │   ├── middleware # Includes files for the middleware to the redux store
    │   ├── reducers # Includes files for the reducers to the redux store
    │   ├── utils # Folder that includes a fake database, helper functions and API-like functions
    │   ├── index.css # A file with the global styles
    │   └── index.js # Index file where the store is created
├── .gitignore # Simple file to prevent unnedded files to be stored on GitHub.
├── README.md - This file.
├── package-lock.json # npm package manager file.
└── package.json # npm package manager file.

```

## Pseudo Backend Server

The provided file [`api.js`](src/utils/api.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getInitialData`] - fetches the data to be rendered by the Home Page
-   [`saveLikeToggle`] - allows a user to like or dislike a tweet
-   [`saveTweet`] - push a tweet to the database

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Purpose

This repository is for educational purposes and part of the udacity curriculum. 


