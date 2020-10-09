const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const { errorHandler } = require("./helpers/errorHandler")
const { connectMongo } = require("./helpers/mongoConnection")

dotenv.config()

const app = express()

connectMongo()

app.use(morgan("dev"))
app.use(bodyParser.json())

app.use("/", authRoutes)
app.use("/", userRoutes)

app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, console.log("Express server running."))
