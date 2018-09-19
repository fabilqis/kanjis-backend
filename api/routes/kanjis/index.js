const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.get)
router.get('/:kanji', controller.getByKanji)
router.post('/add', controller.post)

module.exports = router