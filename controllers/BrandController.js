const { ProductBrand } = require('../models/index')

const BrandController = {
    async createBrand(req, res) {

        const brand = req.body.name
        if (!brand) return res.status(400).json('бренд не указан')
        if (brand.length < 2) return res.status(400).json('количество символов меньше 2х')

        try {
            await ProductBrand.create({
                name: brand
            })
            return res.status(200).json(brand)
        } catch (err) {

        }
    },
    async getBrand(req, res) {
        const brands = ProductBrand.findAll()
        return res.status(200).json(brands)
    }
}

module.exports = BrandController