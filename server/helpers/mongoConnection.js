const mongoose = require("mongoose")

exports.connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log("Connected to database.")
  } catch (err) {
    throw new Error(err)
  }
}
