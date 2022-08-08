
# Video Creator Platform - Nicasource Assesment

Create a full-stack application from scratch, creating the backend and frontend independently, and then, integrating both projects. This project is a “Videos Creator Platform”, where new video creators can upload (video URL) new videos, sign up, list the available videos and video creators. You’ll have the ability to like videos and follow other video creators.


## Authors

- [@juanpabloCamus](https://www.github.com/juanpabloCamus)


## How to start

To start you must have installed postgreSQL and Node.js
## Start Backend
First inside ./api you should create an .env file of environment variables.
I leave you this template with the variables

`DB_HOST`
`DB_PORT`
`DB_USER`
`DB_PASS`
`DB_NAME`
`JWT_SECRET`

Then in Postgre remember to create the database with the name you prefer

Then let's run
```bash
  npm install
```

With all this we should be able to raise our backend through
```bash
  npm start
```
The server will run in port 3001
## Start Frontend
First in /client do 
```bash
  npm install
```
With all this we should be able to raise our frontend through
```bash
  npm start
```
## Seed database
On the landing page below the login button, i created a button that is responsible for loading the database, remember to have created it and have the server running before using it
Please, before registering a user, first load the database so that everything works correctly

