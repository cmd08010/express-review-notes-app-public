# Express Review

- npm i
- nodemon server -e js

This application is partially built. The front end is completely built but the express backend is only partially built.

***Note - you shouldn't have to modify anything in the index.html file.***

Examine the back end routes that the front end is looking for.

Since this a CRUD app you will be looking for GET, POST, PUT, and DELETE requests.

The front end is also making axios posts and puts. You'll have to give your app the ability to parse JSON data

This front end is also looking for a styles.css in the assets folder. In order for your front end to access this file, you'll need a route for that as well. (Hint - express static route)

Consider having your backend api calls in their own file by using an express router.

Don't try and do everything at once.

Consider using the uuid module to generate unique ids

# Step One

- Add a static express route so the assets/styles.css

# Step Two

- Add some JSON data to notes.json

# Step Three

- Set up your GET route for for notes

# Step Four

- Set up your POST route for notes (make sure to include a body parser)

# Step Five

- Set up a DELETE route

# Step Six

- Set up a PUT route


