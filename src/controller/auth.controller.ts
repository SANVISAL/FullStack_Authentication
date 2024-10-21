import { injectable } from "inversify";
import { AuthService } from "../service/auth.service";
import { Request, Response } from "express";

@injectable()
export class AuthController {
  private _authService: AuthService;
  public constructor(authService: AuthService) {
    this._authService = authService;
  }

  public register = async (req: Request, res: Response) => {
    try {
      const roleId = 2;
      const user = req.body;
      const userData = { ...user, roleId };
      // console.log("user:", userData);
      const newUser = await this._authService.register(userData);
      res.cookie("refreshToken", newUser.token.refreshToken, {
        httpOnly: true,
        secure: true, // Use this in production (HTTPS)
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      const data = {
        message: "User registered successfully",
        user: newUser.user,
        token: newUser.token.accessToken,
      };
      res.status(201).json(data);
    } catch (err: unknown) {
      throw err;
    }
  };
  public login = async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const user = await this._authService.login(userData);
      res.cookie("refreshToken", user.token.refreshToken, {
        httpOnly: true,
        secure: true, // Use this in production (HTTPS)
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      const data = {
        message: "User logged in successfully",
        user: user.userData,
        token: user.token.accessToken,
      };
      res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  };
}
