## Project Description

This project is built with CRUD functionalities of a travel journal API. It will consist of 2 models, labeled heading and description. These models will mirror the front-end portion of heading and body content. There will be routes will handle request of showing all blogs, one blog at a time, updating a blog, and making a new blog.

The project uses MongoDB Atlas and Mongoose to store the journal entries data in the database, and Heroku and Node.js for the server application. 

## Routes Set Up

In the server application, 6 routes were set up to achieve the CRUD functionalities of an API. 

#### GET ALL ROUTE
The first route is the GET route, which displays both the heading and content of the blog. To do so, two referenced schemas were set up. The heading schema, which contains the author's name, the date the post is created, the title of the blog, and the actual blog content post. The content property is referenced to the content schema by the content document ObjectId number. 
The ObjectId number of the content schema is obtained by the heading schema during the creation of the entire blog (refer to the POST route).  The content schema contains favorite and least favorite memories, landmarks and restaurants the author visited, and the place. The place is also referenced to the heading schema through the same method as the heading schema. Therefore, both the heading and content schemas are referenced schemas, referencing to each other.
Either schemas would've been appropriate to use to display all the information of the blog in the GET route, but the heading schema was chosen. In the get all blogs route, the method .find() on heading collection will find all documents, and the .populate() method with the argument content will look for the ObjectId number located in content property of heading collection to display the information from the document in content collection with that particular ObjectId number. 

#### GET ONE ROUTE
The second GET route is to display only one blog. To do this, we need the ObjectId of the particular blog, so instead of .find() method, a .findByID() method is used on the heading collection, follow by the .populate method with the argument content. Once the particular document is found with the content information populated in the content property from the heading collection, it will be sent back as the response to the front-end.

#### PUT ROUTES
To update the blog heading and content, two PUT routes were set up for each of them. Each of the PUT routes are designed to find the document from either the description or heading collection by ObjectID, and then updated the document according to the request body. The updated documents will then be sent back to the front-end to display the updated information.

#### POST ROUTES
To create a blog, we use the .create() method on both the heading and content collections. However, we need to establish 2 referenced documents when we create them. This means that the ObjectId of the newly created document in the content collection needs to pushed to the content property of the newly created document in the heading collection, and the ObjectId of the newly created document in the heading collection needs to be pushed to the place property of the newly created document in the content collection. Then, the new blog that is created will be returned by doing the same as display one blog GET route, which is finding the new document from the heading collection by its new ObjectId and populating its content property by referencing to the new content document's ObjectId that has been pushed to the content property. 

#### DELETE ROUTE
Finally, the delete route will also need the ObjectIds of the heading and content document to find the particular document to delete, and then return all the documents back from the heading collection. Since the heading document also contains the content document's ObjectId, we can retrieve it from the content property of the heading document that is found.