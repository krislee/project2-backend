const {Router} = require('express')
const router = Router()

const {index, show, putHeading, putContent, post, deleteHeading, deleteContent} = require('../controller/index')

router.get('/', index)

router.get('/:id', show)

router.put('/heading/:id', putHeading)

router.put('/content/:id', putContent)

router.post('/', post)

router.delete('/heading/:id', deleteHeading)

router.delete('/content/:id', deleteContent)

module.exports = router