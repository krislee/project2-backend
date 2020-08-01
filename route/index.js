const {Router} = require('express')
const router = Router()

const {index, putHeading, putContent, post} = require('../controller/index')

router.get('/', index)

router.put('/heading/:id', putHeading)

router.put('/content/:id', putContent)
router.post('/', post)

module.exports = router