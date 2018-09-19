const Kanjis = require('./model')

const controller = {
    get: async (req, res, next) => {
        Kanjis.find()
    .then(cards => {
        res.status(200).send(cards)
        })
        .catch(error => 
            res.status(400).send({
                message : error
            })
        )
    },

    getByKanji : async(req, res, next) => {
        Kanjis.findOne({
            _id : req.params._id
        })
            .populate('card')
            .exec((err, result) => {
                console.log('result :', result)
                res.status(200).send(result)
            })
            .catch(error => {
                res.status(400).send({
                    message: error
                })
            })
    },

    post : async (req, res, next) => {
        const newKanji = {
            kanji : req.body.kanji,
            kunyomi : req.body.kunyomi,
            onyomi : req.body,onyomi,
            imi : req.body.imi,
            tatoeba : req.body.tatoeba
        }
        console.log(req.body)

        const card = await Kanjis.create(newKanji)
        res.redirect('/kanji')
        res.status(201).send({
            card
        })
    }
}

module.exports = controller