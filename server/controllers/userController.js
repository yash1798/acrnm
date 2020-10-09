const bcrypt = require("bcryptjs")
const dotenv = require("dotenv")


dotenv.config()

const User = require("../models/userModel")



 //-------------------------------------------------------------//

exports.addToAddressBook = async(req,res) => {
    try{
      const {id} = req.profile
      const {address, state, city, pincode} = req.body
      const user = await User.findById(id)
      user.addressBook = [...user.addressBook, {
        address,
        state,
        city,
        pincode
      }]
      
      const updatedUser = await user.save()
      res.json(updatedUser)
    }
    catch (err){
      // console.log(err)
      throw new Error("Something went wrong.")
    }
  }

  exports.deleteAnAddressById = async(req,res) => {
    try{
      const {id} = req.profile
      const {addressId} = req.params
      let user = await User.findById(id)
      user.addressBook = user.addressBook.filter(address => address._id != addressId)
      const updatedUser = await user.save()
      res.json(updatedUser)
    }
    catch (err){
      // console.log(err)
      throw new Error("Something went wrong.")
    }
  }

  exports.getAddressBook = async (req, res) => {
    try{
        const {id} = req.profile
        let user = await User.findById(id)
        res.json(user.addressBook)
      }
      catch (err){
        // console.log(err)
        throw new Error("Something went wrong.")
      }
  }

  exports.getAnAddressById = async(req,res) => {
    try{
      const {id} = req.profile
      const {addressId} = req.params
      let user = await User.findById(id)
      address = user.addressBook.find(address => address._id == addressId )
      if(address){
          return res.json(address)
      } else {
          res.status(404)
          throw new Error("Could not Find the address.")
      }
    }
    catch (err){
      // console.log(err)
      throw new Error("Something went wrong.")
    }
  }

  exports.updateAnAddressById = async(req,res) => {
    try{
      const {id} = req.profile
      const {address, state, city, pincode} = req.body
      const {addressId} = req.params
      let user = await User.findById(id)
      userAddress = user.addressBook.find(address => address._id == addressId )
      user.addressBook = user.addressBook.filter(address => address._id != addressId)
      if(userAddress){
        user.addressBook = [...user.addressBook, {
          address,
          state,
          city,
          pincode
        }]
      }
      const updatedUser = await user.save()
      res.json(updatedUser)
    }
    catch (err){
      // console.log(err)
      throw new Error("Something went wrong.")
    }
  }



  //-------------------------------------------------------------//

  exports.getAccessDetails = async (req, res) => {
    try{
      const {id} = req.profile
      let user = await User.findById(id)
      if(user){
        res.json({
          email: user.email,
          name: user.name,
          tel_number: user.tel_number
        })
      }
    } catch(err){
       // console.log(err)
       throw new Error("Something went wrong.")
    }
  }

  exports.updateAccessDetails = async (req, res) => {
    try{
      const {id} = req.profile
      const {name, email, password, tel_number} = req.body
      let user = await User.findById(id)
      let hashed_password = null
      if(password){
        hashed_password = await bcrypt.hash(password, 8)
        user.hashed_password = hashed_password
      }
      user.name = name,
      user.email= email,
      user.tel_number=tel_number
      user = await user.save()
        res.json({
          email: user.email,
          name: user.name,
          tel_number: user.tel_number
        })
      }
     catch(err){
       // console.log(err)
       throw new Error("Something went wrong.")
    }
  }


 //-------------------------------------------------------------//