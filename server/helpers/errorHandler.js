exports.errorHandler = (err, req, res, next) => {
  const statusCode = req.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    status: "fail",
    message: err.message,
    stack: err.stack,
  })
  next()
}
