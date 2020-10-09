const express = require("express")
const router = express.Router()

const { addToAddressBook, 
    getAddressBook,
    deleteAnAddressById, 
    getAnAddressById,
    updateAnAddressById, 
    getAccessDetails,
    updateAccessDetails } = require("../controllers/userController")

const { requireSignIn } = require("../middlewares/authMiddleware")

router.put("/addToAddressBook", requireSignIn, addToAddressBook)
router.get("/getAddressBook", requireSignIn, getAddressBook)
router.get("/getAddressById/:addressId", requireSignIn, getAnAddressById)
router.put("/updateAddressById/:addressId", requireSignIn, updateAnAddressById)
router.delete("/deleteAnAddressById/:addressId", requireSignIn, deleteAnAddressById)


router.get("/getAccessDetails", requireSignIn, getAccessDetails)
router.put("/updateAccessDetails", requireSignIn, updateAccessDetails)

module.exports = router