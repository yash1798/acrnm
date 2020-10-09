const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

exports.requireSignIn = async(req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded= await jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)
        if(user){
            req.profile = {
                id: user._id,
                email: user.email,
                isAdmin: user.isAdmin
            }
            next()
        } else {
            res.status(401)
            throw new Error("Unauthorized Access")
        }
    }catch(err) {
        console.log(err)
        throw new Error("Something went wrong.")
    }
}

exports.isAdmin = async(req,res,next) => {
    try{
        if(req.profile.isAdmin===true) next()
        else {
        res.status(401)
        throw new Error("Unauthorized Access.")
        }
    } catch (err){
        console.log(err)
        throw new Error("Something went wrong.")
    }
}