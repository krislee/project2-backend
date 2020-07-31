const db = require('./index')
const Description = require('../model/description')

const descriptionSchema = new Schema ({
    landmarks: [String],
    restaurants: [String],
    paragraph: String,
    favoriteMemory: String,
    leastFavoriteMemory: String,
    rating: Number,
    recommend: Boolean,
    image: String
})

const seedDescriptions = [
    {
        landmark: ["Empire State Building", "5th Ave"],
        restaurant: ["Pommes frites", "Carmine's", "Del Frisco's Double Eagle Steakhouse"],
        paragraph: "NY was such a shining bright city! It was so fun to be a tourist in a busy city because I get to experience the fast pace.",
        favoriteMemory: "Going on top of the Empire State Building",
        leastFavoriteMemory: "I took the MTA, and waited a long time for it. But it was cool to ride the popular transit.",
        rating: 8,
        recommend: true,
        image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_720,q_75,w_1400/v1/clients/newyorkcity/Coronavirus_Info_midtown_manhattan_skyline_nyc_3000x2000_364fa9b8-86ce-4f95-907a-4bd8ea32f232.jpg"
    },
    {
        landmark: ["Namsan Seoul Tower", "Nami Island", "Changdeokgung"],
        restaurant: ["Jungsik Seoul", "Jingu Hoegwan", "Hadongkwan"],
        paragraph: "South Korea displayed both its historic and modern side. I visited old palaces that kings would live in, and went to the hipster Incheon area.",
        favoriteMemory: "Going on top of the N Seoul Tower where I saw the city sparkled at night.",
        leastFavoriteMemory: "Paying a lot more for a keychain souvenir in a mall when there was a much cheaper one in the street market.",
        rating: 9,
        recommend: true,
        image: "https://thumbs.dreamstime.com/z/beautiful-architecture-building-n-seoul-tower-namsan-mountain-landmark-city-south-korea-140280624.jpg"
    },
    {
        landmark: ["Tower of London", "Buckingham Palance", "Big Ben"],
        restaurant: ["Amrutha Lounge", "Andy's Greek Taverna", "Core by Clare Smyth"],
        paragraph: "London's weather is infamous for cloudy and bleak, so during my stay in London I was not surprised to wake up to that weather. It was nice to learn about the history of London through visiting musuems and the palace.",
        favoriteMemory: "Getting around through the iconic double-decker buses - very vintage vibe.",
        leastFavoriteMemory: "Probably those extremely rainy days when I would get soaked!",
        rating: 8,
        recommend: true,
        image: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
    }
]

