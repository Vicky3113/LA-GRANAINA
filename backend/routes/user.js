const express = require("express");

const { ensureAuth } = require("../middleware/auth");

router = express.Router();

userController = require("../controller/user.controller");

router.get("/:username", userController.get);

router.post("/", userController.register);

router.post("/login", userController.login);

router.put("/:username", [ensureAuth], userController.put);

router.delete("/:username", [ensureAuth], userController.destroy);

module.exports = router;
