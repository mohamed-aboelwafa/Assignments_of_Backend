const express = require("express");

const {
    signup,
    updateUser,
    getUserByEmail,
    getUserById
} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);

router.put("/:id", updateUser);

router.get("/by-email", getUserByEmail);

router.get("/:id", getUserById);

module.exports = router;