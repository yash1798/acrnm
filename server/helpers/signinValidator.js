const { body, validationResult } = require("express-validator")

const signinValidationRules = () => {
  return [
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Please enter a valid e-mail."),

    body("password")
      .isLength({ min: 5 })
      .withMessage("Password should be more than 5 characters."),
  ]
}

const validateOnSignin = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  signinValidationRules,
  validateOnSignin,
}
