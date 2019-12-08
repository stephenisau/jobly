# React Jobly

Jobly is a full-stack application based on indeed.com 
The backend is built with node express and the frontend is built with React using a PostgreSQL database.

Jobly is live [here](https://jobly-app-frontend.herokuapp.com/)

# Table of Contents
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Features to add](#features-to-add)

## Setup

This application has a separate backend and frontend. Below are instructions on how to install and start each server.
### Backend
cd into /backend and type these following commands:

```
npm install
node server.js
```
The backend should now be starting on `http://localhost:3001/`

### Frontend
cd into /frontend from the root directory and type the following commands:

```
npm install
npm start
```
The frontend should now be starting on `http://localhost:3000/`

## Screenshots

<!-- ![Alt text](/frontend/public/images/jobly-home.png?raw=true "Home")
![Alt text](/frontend/public/images/jobly-companies.png?raw=true "Companies")
![Alt text](/frontend/public/images/jobly-company.png?raw=true "Single company and its' jobs")
![Alt text](/frontend/public/images/jobly-jobs.png?raw=true "Jobs")
![Alt text](/frontend/public/images/jobly-jobs-filtered.png?raw=true "Jobs filtered by salary and text simultaneously") -->


## Features

- User authentication and authorization
- Debounce live-search
- Apply to jobs
- Edit profile

## Technologies

- React
- Axios
- Bootstrap
- Node / Express 
- PostgreSQL
- Bcrypt

## Testing 

Front end unit tests are written with Enzyme. Run the tests with the following commands: 

```
cd frontend
npm test
```

## Features to add

- Infinite scrolling
- Autocomplete search
