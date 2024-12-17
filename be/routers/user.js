const express = require("express");
const router = express.Router();
const multer = require("multer");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const upload = multer({ dest: "uploads/" });

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/get-info/:id", userController.getInfo);

module.exports = router;
