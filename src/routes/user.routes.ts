import { Response, Request, Router } from "express";
import { UserController } from "../controller/user.controller";
import { container } from "../configs/inversify.config";

const router = Router();
const userController = container.get<UserController>(UserController);

// router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
// router.get("/:id", userController.getUserById);
// router.put("/:id", userController.updateUser);
// router.delete("/:id", userController.deleteUser);

// Global error handling middleware
router.use((err: Error, _req: Request, res: Response, _next: Function) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

export = router;
