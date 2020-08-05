# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Incomplete

## Project Description

This project is built with CRUD functionalities of a travel journal API. It will consist of 2 models, labeled heading and description. These models will mirror the front-end portion of heading and body content. There will be routes to handle requests of showing all blogs, one blog at a time, updating a blog, and making a new blog.

The project uses MongoDB Atlas and Mongoose to store the journal entries data in the database, and Heroku and Node.js for the server application. 

## Frontend Repo
View front-end repo [here](https://github.com/krislee/project2-frontend)

## Time/Priority Matrix 

[Time Matrix](https://res.cloudinary.com/dhiwn0i0g/image/upload/v1596169579/IMG_0104_ikhahb.png) 

### MVP/PostMVP - 5min 

#### MVP

- Make at least 2 schemas
- Make seed data
- Make the routes  
- Test the routes to make sure it works
- Deploy on Heroku and Netlify

#### PostMVP 

- Create model and routes for log-in

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| 2 schemas | H | 2hr | 2hr | 2hr|
| Seed data | H | 2hr | 4hr | 4hr|
| Routes | H | 10hr | 17hr | 17hr|
| Test Routes | H | 3hr| 3hr | 3hr |
| Deployment| H | 3hr | 6hr | 6hr|
| Total| H | 21hr | 32hr | 32hr|


#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Add model for log-in | M | 3hr | -hr | -hr|
| Add routes for log-in| M | 10hr | -hr | -hr|
| Total| H | 13hr | -hr | -hr|


## Additional Libraries
- Mongoose is used to connect NodeJS to MongoDB. ?????
- Morgan is used to log any errors encountered ????
- CORS used to provide whitelist ?????

## Code Snippet
In order to reference documents from different collections, there needed to be a way to obtain the ObjectIds of the documents from the different collections. To do so, the POST route was created so that right after making the documents from the different collections, we will immediately push the ObjectIds of the newly created documents to wherever the reference by ObjectId was in the schema. Below is an example that shows the heading document getting the ObjectId of the content document, and the content document getting the ObjectId of the heading document:

```JAVASCRIPT
const post = async (req, res) => {
    try {
        const heading = async () => {
            const newHeading = await Heading.create(req.body[0])
            return newHeading
        }
        const content = async () => {
            const newContent = await Description.create(req.body[1])
            return newContent
        }
        
        const [heading1, content1] = await Promise.all([heading(),content()])
    
        await heading1.content.push(content1._id)
        await heading1.save()
        await content1.place.push(heading1._id)
        await content1.save()

        console.log(heading1)
        console.log(content1)

        const allContent = await Heading.findById(heading1._id).populate('content')
        res.status(200).json(allContent)
        
    } catch(error) {
        res.status(400).send(error)
    }
}
```
## Issues and Resolutions
**ERROR**: Deployment to Heroku and MongoDB Atlas did not allow for proper references between the created documents from the heading and content collections. 
**RESOLUTION**: The mongoURI needed to include the 

## Previous Project Worksheet
 - [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
 - [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
