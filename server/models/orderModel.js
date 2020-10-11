const { ObjectID } = require("mongodb")
const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        orderItems: [{
            product: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product"
        }],
        userAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: Number, required: true },
        },
        paidStatus: {
            type: Boolean,
            default: false
        },
        deliveryStatus: {
            type: Boolean,
            default: false
        },
        totalPrice: {
            type: Number,
            required: true
        },
    },
  {
    timestamps: true,
  }
)

const Order = mongoose.model("Order", orderSchema)

module.exports = Order