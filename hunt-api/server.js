const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./src/models/product.model');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://root:mongodbpass@localhost:27017/hunt', { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api", require('./src/routes'));

app.listen(port);

console.log('listening on: ', port);
