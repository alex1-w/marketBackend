const { Product } = require("../models")

const ProductController = {

    async getProducts(req, res) {
        const products = await Product.findAll()
        console.log(products);

        return res.status(200).json(products)
    },
    async createProduct(req, res) {

        const title = req.body.title
        if (!title) { return res.status(400).json('title не указан') }

        const price = req.body.price
        if (!price) { return res.status(400).json('price не указан') }

        const description = req.body.description
        if (!description) { return res.status(400).json('description не указан') }

        const image = req.body.image
        if (!image) { return res.status(400).json('image не указан') }

        const brandId = req.body.brand
        if (!brandId) { return res.status(400).json('brand не указан') }

        const typeId = 1
        console.log(req.body);

        try {
            const product = await Product.create({
                title: title,
                price: price,
                description: description,
                image: image,
                brandId: brandId,
                typeId: typeId
            })

            return res.status(200).json(product)
        } catch (err) {

            console.log(err);
        }
    }

}

module.exports = ProductController