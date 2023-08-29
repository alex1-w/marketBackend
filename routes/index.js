const Router = require('express')  // импортируем элемент роутер из express 

const userRouter = require('./userRouter')
const productBrands = require('./brandRouter')
const router = Router() // 

// router.use('/categories', categoriesRoute) // создаем роут
// router.use('/advertisements', advertisementRoute)
router.use(`/user`, userRouter)
router.use(`/brand`, productBrands)

module.exports = router