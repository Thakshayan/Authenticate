const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const mongoose =  require('mongoose');
const db = require("./config/keys").MongoURI;

const cors = require('cors')


mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true

}).then(()=>{
    console.log("connected to the database")
}).catch((err)=>{
    console.log("database connection failed")
    console.log(err)
})



const app = express();

// Public folder setup
app.use(express.static('public')); //No need of public folder for html
// Bodyparser
//parse url-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
//parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors());

app.use('/', require('./routes'))

app.listen(process.env.PORT, ()=>{
    console.log("server is running in", process.env.PORT)
})