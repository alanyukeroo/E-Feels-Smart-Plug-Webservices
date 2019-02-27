const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const devices = require('./routes/api/devices');

app.get('/', (req, res)=> res.send('Hello There!!! \n E-Feels Webservices RESTful API'));

mongoose
  .connect(db)
  .then(()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/users', users);
app.use('/api/devices', devices);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server running on port ${port}`));
