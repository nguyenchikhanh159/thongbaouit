//module
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
var XLSX = require('xlsx');
var url = 'mongodb://localhost:27017/uit';
var uitRoute = require('./route/route')

const port = 5000;
const app = express();

app.use(bodyParser.json())
app.use(cors());

app.use('/uit', uitRoute);


app.listen(port, () => console.log(`Server is running port ${port}`));


mongoose.Promise = global.Promise

//Connecting to the database
mongoose
  .connect(
    url,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch(() => {
    console.log('Could not connect to the database. Exiting now...')
    process.exit()
  })

