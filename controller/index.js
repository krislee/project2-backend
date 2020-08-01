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
        res.status(200).json(allPosts)
    } catch(error) {
        res.status(400).send(error)
    }
}


// UPDATE BLOG + HEADING DESCRIPTION
const putContent = async (req, res) => {
    try {
        const updateContent = await Heading.findByIdAndUpdate(req.params.id, req.body, {new:true}).populate('content')
        res.status(200).json(updateContent)
    } catch(error) {
        res.status(400).send(error)
    }
}

const putHeading = async (req, res) => {
    try {
        const updateHeading = await Description.findByIdAndUpdate(req.params.id, req.body, {new:true}).populate('content')
        res.status(200).json(updateHeading)
    } catch(error) {
        res.status(400).send(error)
    }
}

// CREATE BLOG
const post = async (req, res) => {
    try {
        console.log(req.body)
        const newHeading = await Heading.create(req.body[0]) // newHeading._id for redirect to only show one blog
        const newContent = await Description.create(req.body[1])
        
        await newContent.place.push(newHeading._id)
        await newContent.save()
        await newHeading.content.push(newContent._id)
        await newHeading.save()

        const body = await Heading.find().populate('content')
        res.status(200).json(body)
        
    } catch(error) {
        res.status(400).send(error)
    }
}


// DELETE BLOG


module.exports = {index, putHeading, putContent, post}