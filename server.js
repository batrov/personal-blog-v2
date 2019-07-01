const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');
const dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true
};

// Connect to DB
mongoose
  .connect(db, dbOptions)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const port = process.env.PORT || 2100;

app.listen(port, () => console.log(`Server started on port ${port}`));
