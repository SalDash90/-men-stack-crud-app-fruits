const mongoose = require ('mongoose')

// 1 Create the schema
const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean
})

// 2 regester the model
const Fruit = mongoose.model('Fruit', fruitSchema)

// 3 shere it with the rest of the app
module.exports = Fruit