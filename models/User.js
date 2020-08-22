const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String | undefined,
  },
  lastName: {
    type: String | undefined,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', UserSchema)
