# The Wholesome App
 A project that allows you to upload images directly to MongoDB Atlas into your collection, a faster cloud database.
 
 1. To begin with, you need to clone the repository.
 2. Open the repository in a code editor like VSCode, Atom, etc.
 3. Create a file as `config.js` in the home directory where `server.js is present`.
 4. Create your database and collection on MongoDB Atlas.
 5. Once done correctly insert the following to the `config.js`
```
const config = {
  MONGO_URI: "mongodb+srv://admin:<password>@uploadercluster.4t32d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}

module.exports = config;
```

6. Now run the server with `npm start` or `yarn start`.
7. Once started open a browser go to `http://localhost:3000/`, you'll see the following in browser

![This is an image](https://github.com/Seek4samurai/The-Wholesome-App/blob/main/public/imgs/image-1.png)

8. Now you're cool to upload images just by selecting any image from directory on your local machine and click upload. Once did you'll automatically see the following card generated on your screen.

![This is an image](https://github.com/Seek4samurai/The-Wholesome-App/blob/main/public/imgs/image-2.png)

These images will be uploaded to your MongoDB Atlas account and to clear them you'll need to go to your collection and delete them.

## Note :-
This was a beginner friendly submission, and was mainly focused on MongoDB Atlas.
