# Wildlife Rescue Application of Missouri and Kansas

## Description
_Duration: 2 Week Sprint_

Wildlife Rescue Application is a rehabilitation app that uses Missouri and Kansas as a test-market. The application allows users to register for an account, which allows them to use the application's Resource feature, add, edit, and delete the wildlife rehabilitation centers, and allows users to read read success stories.

The edit feature allows the user to add any extra information or experiences with the resources on their list.

To see the fully functional site, please visit: https://calm-castle-91238.herokuapp.com/

### Prerequisites
- [Node.js](https://nodejs.org/en/)

## Installation
1. Create a database named `wildlife`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
1. Register and/or Login to the application using the Login button on the landing page.
2. On the user page, click the images to read the full success story on each individual animal.
3. Click the 'Resources' tab in the navigation bar to view the list of resources provided- The user can add using the 'Add Resource' button.
4. Click the resource name to view more rescue information or edit the rescue information. Clicking 'Go Back' will return the user to return to the list.
5. Click the 'Delete' icon next to each resource to remove the resource from the list.
6. 'Log Out' tab in the navigation bar will log the user out, and send them back to the landing page.


## Built With
React.js,
Redux-Saga,
Express,
Node.js,
PostgresQL,
HTML,
CSS,
Material-UI,
and Sweet Alerts.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at brioverby@gmail.com (www.google.com).
