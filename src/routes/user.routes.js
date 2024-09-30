"use strict";
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const inversify_config_1 = require("../configs/inversify.config");
const router = (0, express_1.Router)();
const userController = inversify_config_1.container.get(user_controller_1.UserController);
// router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
// router.get("/:id", userController.getUserById);
// router.put("/:id", userController.updateUser);
// router.delete("/:id", userController.deleteUser);
// Global error handling middleware
router.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});
module.exports = router;
