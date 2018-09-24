const Kanjis = require('./model')

const DUMMY_DATA = [
    {
        kanji: "日",
        kunyomi: "ひ、び、か",
        onyomi: "ニチ、ニ、ジツ",
        imi: "Sun, Day",
        tatoeba: "日本　にほん　Japan"
    },
    {
        kanji: "月",
        kunyomi: "つき",
        onyomi: "ゲツ、ガツ",
        imi: "Moon, Month",
        tatoeba: "1月　いち。がつ　January"
    }
]

const controller = {
    seed: (req, res, next) => {
        Kanjis
            .insertMany(DUMMY_DATA)
            .then(kanjis => {
                res.status(200).send(kanjis)
            })
            .catch(error => {
                res.status(400).send({
                    message: error
                })
            })
    },

    get: (req, res, next) => {
        Kanjis.find()
    .then(kanjis => {
        res.status(200).send(kanjis)
        })
        .catch(error => 
            res.status(400).send({
                message : error
            })
        )
    },

    getByKanji : (req, res, next) => {
        Kanjis.findOne({
            kanji : req.params.kanji
        })
            .populate('kanjis')
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

    post: (req, res, next) => {
        const {
            kanji,
            kunyomi,
            onyomi,
            imi,
            tatoeba
        } = req.body;
        if (
            kanji &&
            kunyomi &&
            onyomi &&
            imi &&
            tatoeba 
        ){
            const newKanjis = {
                kanji,
                kunyomi,
                onyomi,
                imi,
                tatoeba
            }
            Kanjis
                .create(newKanjis)
                .then(kanji => {
                    res.status(201).send(kanji)
                })
                .catch(error => {
                    res.status(400).send(error)
                })
        }
        else{
            res.status(400).send({message: 'You must fill every field!'})
            console.log('You must fill every field!')
        }
    }
}

module.exports = controller