import { injectable } from "inversify";
import { UserService } from "../service/user.service";
import { Request, Response } from "express";

@injectable()
export class UserController {
  private _userService: UserService;

  public constructor(_userService: UserService) {
    this._userService = _userService;
  }

  // public getAllUsers = async (_req: Request, res: Response) => {
  //   try {
  //     const users = await this._userService.getAllUsers();
  //     res.json(users);
  //   } catch (err) {
  //     console.error("Error fetching all users:", err);
  //     res.status(500).send(err);
  //   }
  // };

  // public getUserById = async (req: Request, res: Response) => {
  //   try {
  //     const user = await this._userService.getUserById(req.params.id);
  //     if (user) {
  //       res.json(user);
  //     } else {
  //       res.status(404).send("User not found");
  //     }
  //   } catch (err) {
  //     console.error("Error fetching user by ID:", err);
  //     res.status(500).send(err);
  //   }
  // };

  public createUser = async (req: Request, res: Response) => {
    try {
      const newUser = await this._userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(400).send(err);
    }
  };

  // public updateUser = async (req: Request, res: Response) => {
  //   try {
  //     const updatedUser = await this._userService.updateUser(
  //       parseInt(req.params.id),
  //       req.body
  //     );
  //     res.json(updatedUser);
  //   } catch (err) {
  //     console.error("Error updating user:", err);
  //     res.status(400).send(err);
  //   }
  // };

  // public deleteUser = async (req: Request, res: Response) => {
  //   try {
  //     await this._userService.deleteUser(req.params.id);
  //     res.status(204).send();
  //   } catch (err) {
  //     console.error("Error deleting user:", err);
  //     res.status(500).send(err);
  //   }
  // };
}
