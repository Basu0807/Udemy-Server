const { SearchController, AllProductController, AddProductController, SpecificProductController, DeleteController, DeleteAll, UpdateProductController } = require('../Controller/productController')


const productRoute = require('express').Router()

productRoute.get('/search/?',SearchController)
productRoute.get('/allproducts',AllProductController)
productRoute.post('/addproducts',AddProductController)
productRoute.put('/updateMany',UpdateProductController)
productRoute.get('/product/:id',SpecificProductController)
productRoute.delete('/product/:id',DeleteController)
productRoute.delete('/delete',DeleteAll)


module.exports=productRoute