const express = require("express")
const router = express.Router()

const { signup, signin } = require("../controllers/authController")

const {
  signupValidationRules,
  validateOnSignup,
} = require("../helpers/signupValidator")

const {
  signinValidationRules,
  validateOnSignin,
} = require("../helpers/signinValidator")


router.post("/signup", signupValidationRules(), validateOnSignup, signup)
router.post("/signin", signinValidationRules(), validateOnSignin, signin)


module.exports = router
