const express = require("express")
const path = require("path")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const multer = require("multer")
const dotenv = require("dotenv")

const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const { errorHandler } = require("./helpers/errorHandler")
const { connectMongo } = require("./helpers/mongoConnection")

dotenv.config()

const app = express()

connectMongo()

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1]
        cb(null, `${req.originalUrl.split("/")[2]}.${ext}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"))
app.use(morgan("dev"))
app.use(bodyParser.json())


app.use("/images", express.static(path.join(__dirname, "images")))

app.use("/", authRoutes)
app.use("/", userRoutes)
app.use("/", productRoutes)

app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, console.log("Express server running."))
