const mongoose = require('mongoose')
const Description = require('../model/description')
const Heading = require('../model/heading')

// DISPLAY ALL BLOGS
const index = async (req, res) => {
    try {
        const allPosts = await Heading.find().populate('content')
        res.status(200).json(allPosts)
    } catch(error) {
        res.status(400).send(error)
    }
}


// GET ONE BLOG
const show = async (req, res) => {
    try {
        const onePost = await Heading.findById(req.params.id).populate('content')
        res.status(200).json(onePost)
    } catch(error) {
        res.status(400).send(error)
    }
}


// UPDATE BLOG + HEADING DESCRIPTION
const putContent = async (req, res) => {
    try {
        const updateContent = await Description.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updateContent)
    } catch(error) {
        res.status(400).send(error)
    }
}

const putHeading = async (req, res) => {
    try {
        const updateHeading = await Heading.findByIdAndUpdate(req.params.id, req.body, {new:true}).populate('content')
        res.status(200).json(updateHeading)
    } catch(error) {
        res.status(400).send(error)
    }
}

// CREATE BLOG
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

        heading().content.push(content()._id)
        content().place.push(heading()._id)
        
        // Below only created the heading and description, ids were not pushed
        // const [heading1, content1] = await Promise.all([heading(), content()])
        // const x = await heading1.content.push(content1)
        // await x.save()
        // const y = await content1.content.push(heading)
        // await y.save()

        // Below ran heading() once more but not content()
        // const headingID= await heading().content.push(content()._id)
        // await headingID.save()
        // const contentID = await content().place.push(heading()._id)
        // await contentID.save()

        // Below doesn't work, only creates the heading:
        // await Promise.all([await Heading.create(req.body[0]), await Description.create(req.body[1])])

        const allContent = await Heading.find().populate('content')
        res.status(200).json(allContent)
        
    } catch(error) {
        res.status(400).send(error)
    }
}

/* also try console logging newContent after each line then allContent before the res.json 
to see what the data looks like as the function progresses and whether it's what you think it is */

// DELETE HEADING
const deleteHeading = async (req, res) => {
    try {
        const deleteHeading = await Heading.findByIdAndDelete(req.params.id)
        const deleteContent = await Description.findByIdAndDelete(deleteHeading.content)
        const allContent = await Heading.find().populate('content')
        res.status(200).json(allContent)
    } catch(error) {
        res.status(400).send(error)
    }
}

// DELETE CONTENT
// const deleteContent = async (req,res) => {
//     try {
//         const deleteContent = await Description.findByIdAndDelete (req.params.id)
//         const allContent = await Heading.find().populate('content')
//         res.status(200).json(allContent)
//     } catch(error) {
//         res.status(400).send(error)
//     }
// }

module.exports = {index, show, putHeading, putContent, post, deleteHeading}