const {Schema, model} = require('mongoose')

const headingSchema = new Schema({
    name: String,
    createdOn: Date,
    destination: String,
    image: String,
    describe: [{type: Schema.Types.ObjectId, ref: 'description'}]
})

module.exports = model('heading', headingSchema)