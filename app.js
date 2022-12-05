const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db/connect')
require('dotenv').config()
const tasks  = require('./routes/tasks');
const port = process.env.PORT || 4000;
const connectionString = process.env.MONGO_URI
const notFound = require('./middleware/404.js')


//middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(notFound)

const start = async () => {
    try{
        await connectDB(connectionString).then( () => console.log("CONNECTED TO DB!!!"));
        app.listen(port, ()=> console.log(`The server is running on port: ${port}`));
    }catch(error){
        console.log(error)
  }
}


start()