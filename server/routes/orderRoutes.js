const express = require("express")
const router = express.Router()

const { createOrder, updatePaidStatus, updateDeliveryStatus } = require("../controllers/orderController")

const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")

router.post("/createOrder", requireSignIn, createOrder)
router.post("/paidStatus", requireSignIn, updatePaidStatus)
router.post("/deliveryStatus", requireSignIn, isAdmin, updateDeliveryStatus)


module.exports = router