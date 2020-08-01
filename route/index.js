const {Router} = require('express')
const router = Router()

const {index, show, putHeading, putContent, post, deleteHeading} = require('../controller/index')

router.get('/', index)

router.get('/:id', show)

router.put('/heading/:id', putHeading)

router.put('/content/:id', putContent)

router.post('/', post)

router.delete('/:id', deleteHeading)

// router.delete('/content/:id', deleteContent)

module.exports = router