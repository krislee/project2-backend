const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/travelJournal", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;

mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
        console.log("CONNECTED TO MONGO"); 
    })
    .catch(e => console.error('Connection error:', e.message))

const db = mongoose.connection

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected!"));
db.on("disconnected", () => console.log("mongo disconnected"));