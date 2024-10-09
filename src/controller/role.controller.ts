import { inject, injectable } from "inversify";
import { RoleService } from "../service/role.service";
import { Request, Response } from "express";

@injectable()
export class RoleController {
  private _roleService: RoleService;
  constructor(@inject(RoleService) roleService: RoleService) {
    this._roleService = roleService;
  }
  public async createRole(req: Request, res: Response) {
    try {
      const { name } = req.body;
      console.log("role:", name);
      await this._roleService.createRole(name);
      res.status(201).send("Role created successfully");
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
