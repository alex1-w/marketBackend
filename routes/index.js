const Router = require('express')  // импортируем элемент роутер из express 

const userRouter = require('./userRouter')
const router = Router() // 

// router.use('/categories', categoriesRoute) // создаем роут
// router.use('/advertisements', advertisementRoute)
router.use(`/user`, userRouter)

module.exports = router