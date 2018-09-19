const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.get)
router.get('/list/:kanji', controller.getByKanji)
router.post('/', controller.post)

module.exports = router