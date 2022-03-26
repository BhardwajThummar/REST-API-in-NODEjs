const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
// Importing Routes
const postRoute = require('./routes/posts');
const { application } = require('express');

app.use('/posts', postRoute);

//ROUTES
app.get('/',(req,res)=>{
    res.send("This is the Home Page");
});

//Connect to DB
mongoose.connect(   
    process.env.DB_CONNECTION, 
    ()=> console.log('Connected to DB')
);

//How do we start listening to the server
app.listen(3000);
