const {Schema, model} = require('mongoose')

const headingSchema = new Schema({
    createdOn: Date,
    destination: String,
    image: String,
    describe: [{type: Schema.Types.ObjectId, ref: 'description'}]
})

module.exports = model('heading', headingSchema)