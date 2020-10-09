const bcrypt = require("bcryptjs")
const dotenv = require("dotenv")

dotenv.config()

const User = require("../models/userModel")

const { generateToken } = require("../helpers/JsonWebToken")

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const hashed_password = await bcrypt.hash(password, 8)

    const user = await User.create({
      name,
      email,
      hashed_password,
    })

    const token = await generateToken(user._id)

    if (user) {
      res.json({
        status: "success",
        user: {
          id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
          token,
        },
      })
    } else {
      res.status(400)
      throw new Error("Invalid user data.")
    }
  } catch (err) {
    throw new Error(err)
  }
}

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
      const decoded = await bcrypt.compare(password, user.hashed_password)
      if (decoded) {
        const token = await generateToken(user._id)
        res.json({
          status: "success",
          user: {
            id: user._id,
            email: user._email,
            isAdmin: user.isAdmin,
            token,
          },
        })
      } else {
        res.status(400)
        throw new Error("Password do not match.")
      }
    } else {
      res.status(404)
      throw new Error("Could not find this email")
    }
  } catch (err) {
    // console.log(err)
    throw new Error("Something went wrong.")
  }
}

