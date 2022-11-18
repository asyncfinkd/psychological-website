require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'deqm74vqo',
  api_key: '758243784113573',
  api_secret: 'IjfzX1kAEEqlWfYW6rF5Hz5r6ZI',
})

module.exports = { cloudinary }
