# A Node + React + Bootstrap sample app

Just a simple small app that integrates Node.JS, React and Bootstrap.

React and Bootstrap for front-end and Node.JS for back-end service.

## Getting started

Follow the instructions to download and run the app on Node.JS and React development environment.

### Setup

* [Install Node.JS/NPM](https://nodejs.org/en/)
* Clone/download the repository to your local folder.
* Access nrb-sample/server-node
* Run 'npm install' to install Node side dependencies.

```
nrb-sample/server-node$ npm install
```

* Access nrb-sample/web-react
* Run 'npm install' to install React and its dependecies.

```
nrb-sample/web-react$ npm install
```

Or start your own Node and React environment doing the following:

* [Install Node.JS/NPM](https://nodejs.org/en/)
* [Install Express](https://expressjs.com/)
* [Set up your React development environment](https://reactjs.org/docs/add-react-to-a-new-app.html)
* Clone/download the repository and you'll figure it out. It's all just a simple React app. :)

### Running

First start the server.

* Access nrb-sample/server-node
* Run server.js

```
node server.js
```

Your Node server will run on localhost:3001. Go check it out on your browser.

Then, start your React development environment

* Access nrb-sample/server-node
* Run 'npm start'

```
npm start
```

Your React dev environment will run on localhost:3000. It'll probably open your browser with the app fully operational.

If it doesn't work out, take a look at the requirements, install them all and I'm sure you'll figure it out.

## How does it work?

Your React app is running on localhost:3000 and it's calling the back-end Node server that is running on localhost:3001. Maybe your localhost address isn't exctly 'localhost' but that local IP address.

You must be thinking 'where's Bootstrap?' Well, there's a full copy inside your React app source. It's on its pure CSS form, no JS included.

## Requirements

* [Node.JS](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [Bootstrap 4](https://getbootstrap.com/)
* [Express](https://expressjs.com/)
* [React Router](https://reacttraining.com/react-router/)