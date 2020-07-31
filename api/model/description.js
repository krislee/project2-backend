const {Schema, model} = require('mongoose')

const descriptionSchema = new Schema ({
    places: String,
    foods: String,
    paragraph: String,
    favoriteMemory: String,
    leastFavoriteMemory: String,
    rating: Number,
    recommend: Boolean
})

module.exports = model('description', descriptionSchema)