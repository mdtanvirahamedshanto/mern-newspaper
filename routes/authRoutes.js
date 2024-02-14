const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/api/login", authController.login);

module.exports = router;
