const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.get)
router.post('/', controller.post)
router.get('/list/:kanji', controller.getByKanji)
router.post('/seed', controller.seed)

module.exports = router