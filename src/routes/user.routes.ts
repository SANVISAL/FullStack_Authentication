import { Response, Request, Router } from "express";
import { UserControler } from "../controller/user.controller";
import { UserService } from "../service/user.service";

const router = Router();

const userService = new UserService();
const userController = new UserControler(userService);

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
export = router;
