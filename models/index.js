const sequelize = require('../dbConnection/dbConnection');
const { DataTypes } = require('sequelize')


const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    login: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        // defaultValue: ['USER, DELIVER, ADMIN],
        defaultValue: 'USER',
    }
})

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
    },
    brandId: {
        type: DataTypes.INTEGER,
    }
})
const ProductType = sequelize.define('product_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})
const ProductBrand = sequelize.define('product_brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})
const ProductInfo = sequelize.define('product_info', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING(800),
    }
})

const Basket = sequelize.define('basket', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
    }
})
const BasketProduct = sequelize.define('basket_product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
    },
    basket_id: {
        type: DataTypes.INTEGER,
    }
})

const BrandType = sequelize.define('type_brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

ProductType.hasMany(Product)
Product.belongsTo(ProductType)

ProductBrand.hasMany(Product)
Product.belongsTo(ProductBrand)

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product)

ProductType.belongsToMany(ProductBrand, { through: BrandType })
ProductBrand.belongsToMany(ProductType, { through: BrandType })

module.exports = {
    Product, ProductType, ProductBrand, ProductInfo,
    User,
    Basket, BrandType, BasketProduct
}