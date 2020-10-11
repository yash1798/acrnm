const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const fs = require("fs")


dotenv.config()

const Order = require('../models/orderModel')
const Product = require('../models/productModel')

exports.createOrder = async (req, res) => {
    try {
        const { id } = req.profile
        const { address, state, pincode, city, orderItems, totalPrice } = req.body
        const order = await Order.create({
            address, state, pincode, city,orderItems, totalPrice, user: id
        })
        res.json(order)
    } catch (err) {
        //console.log(err)
        throw new Error("Something went wrong.")
    }
}

exports.updatePaidStatus = async (req, res) => {
    try {
        const { id } = req.params
        let order = await Product.findById(id)
        order.paidStatus = true
        order = await product.save()
        res.json(order)
    } catch {
        //console.log(err)
        throw new Error("Something went wrong.")
    }
}

exports.updateDeliveryStatus = async (req, res) => {
    try {
        const { id } = req.params
        let order = await Product.findById(id)
        order.deliveryStatus = true
        order = await product.save()
        res.json(order)
    } catch {
        //console.log(err)
        throw new Error("Something went wrong.")
    }
}