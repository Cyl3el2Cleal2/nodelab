const express = require('express');
const app = express();
const port = 3000;
const CoinRouter = require('./routers/CoinRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/expressdemo');
app.use(express.static('public'));
app.use('/coins', CoinRouter);
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'public', 'index.html'));
});
app.listen(port, function(){
	console.log('Node js Express js Tutorial');
});

