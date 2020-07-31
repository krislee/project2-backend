const db = require('./index')
const Description = require('../model/description')

const descriptionSchema = new Schema ({
    places: String,
    foods: String,
    paragraph: String,
    favoriteMemory: String,
    leastFavoriteMemory: String,
    rating: Number,
    recommend: Boolean
})

const seedDescriptions = [
    {}
]

