const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

mongoose.connect('mongodb://mirai:123asd@ds261342.mlab.com:61342/kanjis')
// mongoose.connect('mongodb://localhost:27017/backend-kanji')

const KanjiSchema = new Schema({
    kanji:{
        type : String,
        required : true
    },
    kunyomi : {
        type : String
    },
    onyomi : {
        type : String
    },
    imi : {
        type : String,
        required : true
    },
    tatoeba : {
        type : String
    }
})

KanjiSchema.plugin(uniqueValidator)

const Kanjis = mongoose.model('Kanjis', KanjiSchema)

module.exports = Kanjis