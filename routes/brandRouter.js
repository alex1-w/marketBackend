const Router = require('express')
const BrandController = require('../controllers/BrandController')
const router = Router()

router.post('/', BrandController.createBrand)
router.get('/', BrandController.getBrand)

module.exports = router