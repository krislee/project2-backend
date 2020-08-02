const {Schema, model} = require('mongoose')

const descriptionSchema = new Schema ({
    place: {type: Schema.Types.ObjectId, ref: 'heading'},
    landmark: [String],
    restaurant: [String],
    favoriteMemory: String,
    leastFavoriteMemory: String,
    rating: Number,
})

module.exports = model('description', descriptionSchema)