import { UserService } from "../service/user.service";
import { Request, Response } from "express";

export class UserControler {
  private _userService: UserService;

  // Dependency injection through the constructor
  public constructor(_userService: UserService) {
    this._userService = _userService;
  }
  public getAllUsers = async (_req: Request, res: Response) => {
    try {
      const users = await this._userService.getAllUsers();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  };
  public getUserById = async (req: Request, res: Response) => {
    try {
      const user = await this._userService.getUserById(req.params.id);
      res.json(user);
    } catch (err) {
      throw err;
    }
  };
  public createUser = async (req: Request, res: Response) => {
    try {
      const newUser = await this._userService.createUser(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(400).send(err.message);
    }
  };
  public updateUser = async (req: Request, res: Response) => {
    try {
      const updatedUser = await this._userService.updateUser(
        parseInt(req.params.id),
        req.body
      );
      res.json(updatedUser);
    } catch (err) {
      throw err;
    }
  };
}
