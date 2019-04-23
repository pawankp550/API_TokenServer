const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
//DB Setup
mongoose.connect('mongodb+srv://p1:mongodb12345@emaily-dev-m5nw2.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })

const App = express();

//App setup
App.use(morgan('combined'));
App.use(bodyParser.json({type:'*/*'}));
router(App);

//Server setup
const port = process.env.PORT || 3001;
const server = http.createServer(App);
server.listen(port)
console.log('server on 3001sc')