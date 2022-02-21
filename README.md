# WEEKEND REACT GALLERY

## Description

_Duration: Weekend (3 Days)_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

This projects allows you to create a photo gallery! I used this format to create a Pokedex for your Pokemon you've caught

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Images

[Screenshot of Gallery](https://imgur.com/a/QANvAxl)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [PostGres](https://www.postgresql.org/)

## Installation

1. Create a database named `react_gallery`,
2. The queries in the `gallery.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries. (example data in `database.sql`)
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. DOM renders with existing images from the `react_gallery` database
2. User can click on image to conditionally render description of image
3. User can click `Catch!` to increment the "number caught" by +1
4. User can click `Delete` to remove image container from DOM & Database
5. User can also POST a new image by including `name`, `description`, and `url`.
    - Clicking `submit` will render a new image container to the DOM

## Built With

List technologies and frameworks here:

- Javascript
- React
- Axios

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality!

## Support
If you have suggestions or issues, please email me at [brant.mccarthy@me.com](mailto:brant.mccarthy@me.com)