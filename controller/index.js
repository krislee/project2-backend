const mongoose = require('mongoose')
const Description = require('../model/description')
const Heading = require('../model/heading')

// DISPLAY ALL BLOGS
const index = async (req, res) => {
    try {
        const allPosts = Heading.find().populate('describe')
        res.status(200).json(allPosts)
    } catch(error) {
        res.status(400).send(error)
    }
}


// GET ONE BLOG
const show = async (req, res) => {
    try {
        const onePost = (await (await Heading.findOne(req.params.id)).populate('describe'))
        res.status(200).json(allPosts)
    } catch(error) {
        res.status(400).send(error)
    }
}


// UPDATE BLOG DESCRIPTION
const put = async (req, res) => {
    try {

    } catch(error) {
        res.status(400).send(error)
    }
}

// UPDATE HEADING DESCRIPTION

// CREATE BLOG
const post = async (req, res) => {
    try {

    } catch(error) {
        res.status(400).send(error)
    }
}




// DELETE BLOG