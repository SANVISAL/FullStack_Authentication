import { Request, Response, Router } from "express";
import { container } from "../configs/inversify.config";
import { RoleController } from "../controller/role.controller";
import { createValidator } from "express-joi-validation";

const router = Router();

const roleController = container.get<RoleController>(RoleController);
const validator = createValidator({ passError: true });

router.post("/", async (req: Request, res: Response) => {
  roleController.createRole(req, res);
});

export = router;
