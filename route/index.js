const {Router} = require('express')
const router = Router()

const {index, post} = require('../controller/index')

router.get('/', index)

router.post('/', post)

module.exports = router