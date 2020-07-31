const {Schema, model} = require('mongoose')

const descriptionSchema = new Schema ({
    landmark: [String],
    restaurant: [String],
    paragraph: String,
    favoriteMemory: String,
    leastFavoriteMemory: String,
    rating: Number,
    recommend: Boolean,
    image: String
})

module.exports = model('description', descriptionSchema)