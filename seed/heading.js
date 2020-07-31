const db = require('../db/index')
const Heading = require('../model/heading')
const mongoose = require ('mongoose')

// const headingSchema = new Schema({
//     createdOn: Date,
//     destination: String,
//     image: String,
//     description: [{type: Schema.Types.ObjectId, ref: 'description'}]
// })

const seedHeading = [
    {
        name: "Kristy",
        createdOn: new Date(),
        destination: "New York",
        image: "https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822",
        describe: []
    },
    {
        name: "Kristy",
        createdOn: new Date(),
        destination: "South Korea",
        image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/253341/changdeokgung-palace-blossom-1600x700-cc.jpg",
        describe: []
    },
    {
        name: "Kristy",
        createdOn: new Date(),
        destination: "London",
        image: "https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg",
        describe: []
    }
]

const addHeading = async () => {
    await Heading.deleteMany({})
    await Heading.insertMany(seedHeading, (error,response) => {
        if (error) {
            console.log(error);
        } else {
            console.log(response);
        }
        mongoose.connection.close()
    })
}

addHeading()