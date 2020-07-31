const db = require('../db/index')
const Description = require('../model/description');
const Heading = require('../model/heading')
const mongoose = require ('mongoose')

const seedDescription = [
    {
        place: "New York",
        landmark: ["Empire State Building", "5th Ave"],
        restaurant: ["Pommes frites", "Carmine's", "Del Frisco's Double Eagle Steakhouse"],
        favoriteMemory: "NY was such a shining bright city! It was so fun to be a tourist in a busy city because I get to experience the fast pace. My favorite part was going on top of the Empire State Building",
        leastFavoriteMemory: "I took the MTA, and waited a long time for it. But it was cool to ride the popular transit.",
        rating: 8
    },
    {
        place: "South Korea",
        landmark: ["Namsan Seoul Tower", "Nami Island", "Changdeokgung"],
        restaurant: ["Jungsik Seoul", "Jingu Hoegwan", "Hadongkwan"],
        favoriteMemory: "South Korea displayed both its historic and modern side. I visited old palaces that kings would live in, and went to the hipster Incheon area. It was great to see the city sparkled at night on top of the N Seoul Tower.",
        leastFavoriteMemory: "Paying a lot more for a keychain souvenir in a mall when there was a much cheaper one in the street market.",
        rating: 9
    },
    {
        place: "London",
        landmark: ["Tower of London", "Buckingham Palance", "Big Ben"],
        restaurant: ["Amrutha Lounge", "Andy's Greek Taverna", "Core by Clare Smyth"],
        favoriteMemory: "It was nice to learn about the history of London through visiting musuems and the palace. Getting around through the iconic double-decker buses - very vintage vibe.",
        leastFavoriteMemory: "Probably those extremely rainy days when I would get soaked!",
        rating: 8
    }
]
const test = async () => {
    await Description.deleteMany({})
    await Promise.all(seedDescription.map(async (oneDescription) => {
        const place = await Heading.findOne({destination: oneDescription.place})
        // console.log(place._id)
        oneDescription.place = place._id 
        const addedDescription = await Description.create(oneDescription)
        await place.content.push(addedDescription._id)
        await place.save()
        // console.log(place)
        // console.log(oneDescription)
    }))
    
    mongoose.connection.close()
}
test()

// const addSeed = async () => {
//     await Promise.all(seedDescription.map(async (description) => {
//         const emptyCollection = Description.deleteMany({})
//         const place = await Heading.find({destination: description.place})
//         description.place = place._id
//         const newDescription = await Description.create(description)
//         console.log(newDescription)
//         // await place.describe.push(newDescription._id)
//         // await place.save()
//     }))
//     mongoose.connection.close()
// }

// addSeed()


