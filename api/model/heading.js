const {Schema, model} = require('mongoose')

const headingSchema = new Schema({
    author: String,
    date: Date,
    destination: String,
    image: String,
    description: [{type: Schema.Types.ObjectId, ref: 'description'}]
})

module.exports('heading', headingSchema)