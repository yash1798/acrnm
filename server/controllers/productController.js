const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const fs = require("fs")

dotenv.config()

const Product = require('../models/productModel')

exports.createProduct = async (req, res) => {
	try {
		const { name, description, price, stock } = req.body
		const product = await Product.create({
			name,
			description,
			price,
			stock
		})
		res.json(product)
	} catch (err) {
		//console.log(err)
		throw new Error('Something went wrong.')
	}
}

exports.updateProduct = async (req, res) => {
	try {
		const { id } = req.params
		const { name, description, price, stock } = req.body
		let product = await Product.findById(id)
		product.name = name
		product.description = description
		product.price = price
		product.stock = stock
		product = await product.save()
		res.json(product)
	} catch (err) {
		//console.log(err)
		throw new Error('Something went wrong.')
	}
}

exports.addProductImage = async (req, res) => {
	try {
		const { id } = req.params
		let product = await Product.findById(id)
		product.image = `images/${id}.jpeg`
		product = await product.save()
		res.json(product)
	} catch (err) {
		console.log(err)
		throw new Error('Something went wrong.')
	}
}

module.exports.deleteProduct = async (req, res) => {
	let { id } = req.params
	try {
		await Product.findByIdAndDelete(id)
		await fs.unlink(`images/${id}.jpeg`, (err) => {
			if (err) {
				res.status(500)
				throw new Error('Something went wrong.')
			}
		})
		res.json({ message: "Product Deleted!!" })
	} catch (err) {
		// console.log(err)
		throw new Error('Something went wrong.')
	}
}

exports.getProductById = async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findById(id)
		if (product) {
			res.json(product)
		} else {
			res.status(404)
			throw new Error('Something went wrong.')
		}
	} catch (err) {
		// console.log(err)
		throw new Error('Something went wrong.')
	}
}

exports.getProductsByCategory = async (req, res) => {
	try {
		const { category } = req.params
		const products = await Product.find({ category })
		if (products) {
			res.json(products)
		} else {
			res.status(404)
			throw new Error("No such category.")
		}
	} catch (err) {
		// console.log(err)
		throw new Error('Something went wrong.')
	}
}

