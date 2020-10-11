const express = require("express")
const router = express.Router()

const { createProduct, updateProduct, addProductImage,
    deleteProduct, getProductById, getProductsByCategory } = require("../controllers/productController")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")


router.get("/getProduct/:id", getProductById)
router.get("/getProducts/category/:category", getProductsByCategory)
router.post("/createProduct", requireSignIn, isAdmin, createProduct)
router.put("/updateProduct/:id", requireSignIn, isAdmin, updateProduct)
router.put("/addProductImage/:id", requireSignIn, isAdmin, addProductImage)
router.delete("/deleteProduct/:id", requireSignIn, isAdmin, deleteProduct)

module.exports = router