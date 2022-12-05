//const connectionString = 'mongodb+srv://kelvin:<password>@nodeexpressprojects.tuajwut.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose');
const connectDB = (url) => {
    return mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})
}



module.exports = connectDB;