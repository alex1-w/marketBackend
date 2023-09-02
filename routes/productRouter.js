const Router = require('express')
const ProductController = require('../controllers/ProductController')
const router = Router()



router.get('/', ProductController.getProducts)
router.post('/', ProductController.createProduct)


module.exports = router