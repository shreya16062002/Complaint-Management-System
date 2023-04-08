const mongoose = require('mongoose')

function connect () {
    mongoose.connect('mongodb+srv://username:123shreya.,@cluster0.ekhpx7h.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true})
}

module.exports = connect