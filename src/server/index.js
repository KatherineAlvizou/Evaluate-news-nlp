const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// Cors for cross origin allowance
const cors= require('cors');
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)
const mockAPIResponse = require('./mockAPI.js')

let apiResponse={};

var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

    //using Sentiment analysis endpoint
    textapi.sentiment({
        'text': 'John is a very good football player!'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
        }
      });

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!')
    console.log('Press Ctrl+C to quit.')
})