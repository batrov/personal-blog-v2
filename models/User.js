const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    roads: {
      type: String
    },
    city: {
      type: String
    },
    country: {
      type: String
    }
  },
  devices: [{ type: Number }],
  login_date: {
    type: Date
  },
  update_date: {
    type: Date
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
