const Router = require('express')  // импортируем элемент роутер из express 

const router = Router()
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
// router.use('/categories', categoriesRoute) // создаем роут
// router.use('/advertisements', advertisementRoute)
router.use(`/user`, userRouter)
router.use(`/brands`, brandRouter)
router.use(`/products`, productRouter)

module.exports = router