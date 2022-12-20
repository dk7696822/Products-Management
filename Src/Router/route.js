const express = require('express');
const router = require("../Router/route.js")
const middleware = require('../middleware/middleware')

// USER APIs
router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.get('/user/:userId/profile', middleware.authentication,middleware.authorization, userController.getUserById)
router.put('/user/:userId/profile', middleware.authentication, middleware.authorization, userController.updateUser)

// PRODUCT APIs
router.post('/products', productController.createProducts)
router.get('/products', productController.getProduct)
router.get('/products/:productId', productController.getProductsById)
router.put('/products/:productId', productController.updateProduct)
router.delete('/products/:productId', productController.deleteProduct)

// CART APIs
router.post('/users/:userId/cart', middleware.authentication, middleware.authorization, cartController.addToCart)
router.put('/users/:userId/cart', middleware.authentication, middleware.authorization, cartController.updateCart)
router.get('/users/:userId/cart', middleware.authentication, middleware.authorization, cartController.getCart)
router.delete('/users/:userId/cart', middleware.authentication, middleware.authorization, cartController.deleteCart)

// ORDER APIs
router.post('/users/:userId/orders', middleware.authentication, middleware.authorization, orderController.createOrder)
router.put('/users/:userId/orders', middleware.authentication, middleware.authorization, orderController.updateOrder)

module.exports = router;